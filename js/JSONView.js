"use strict";
/*global XU: true*/

// This only supports 1 or 2 header rows. More than 2 then weird things may happen or break.
(function _Table()
{
	class JSONView
	{
		constructor(_data, _container, _options)
		{
			this.data = _data;
			this.container = _container;
			this.options = Object.assign({}, _options);

			this.boundClickHandler = this.clickHandler.bind(this);

			this.container.classList.add("jsonview");
			if(this.options.hideMeta)
				this.container.classList.add("hidemeta");

			this.container.addEventListener("click", this.boundClickHandler);

			if(this.options.title)
			{
				const titleContainer = document.createElement("div");
				titleContainer.classList.add("title");
				titleContainer.append(this.options.title);
				this.container.append(titleContainer);
			}

			const rootOptions = {};
			if(this.options.rootText)
				rootOptions.valueText = this.options.rootText;

			this.container.append(this.renderItemValue(this.data, rootOptions));

			if(this.options.autoExpandFirst)
				this.clickItem(this.container.querySelector(".item"));
		}

		clickHandler(e)
		{
			const item = e.target.getAncestor(node => node && node.classList.includes("item"));
			if(!item || !item.classList.includes("clickable"))
				return;

			this.clickItem(item);
		}

		clickItem(item)
		{
			const itemValue = item.JSONViewData.value;
			const curIndent = item.JSONViewData.indent;

			// If we are expanded, just remove any nodes immediately following this one that have a higher indent level
			if(item.classList.includes("expanded"))
			{
				item.classList.remove("expanded");

				const subItems = Array.from(this.container.children);
				let stopRemoving = false;
				subItems.slice(subItems.indexOf(item)+1).forEach(subItem =>
				{
					if(stopRemoving || subItem.JSONViewData.indent<=curIndent)
					{
						stopRemoving = true;
						return;
					}

					this.container.removeChild(subItem);
				});

				return;
			}

			// Otherwise, time to expand
			item.classList.add("expanded");

			const nextNode = item.getNextSibling(n => n && n.classList.includes("item"));

			if(item.classList.includes("type-object"))
			{
				const subItemsLength = Object.keys(itemValue).length;
				Object.forEach(itemValue, (k, v, i) =>
				{
					const key = document.createElement("key");
					key.classList.add("key");
					key.append(JSON.stringify(k));

					const subItem = this.renderItemValue(v, {indent : curIndent+1});

					const subKVColon = document.createElement("span");
					subKVColon.classList.add("punctuation");
					subKVColon.append(" : ");

					subItem.prepend(key, subKVColon);
					if(i===(subItemsLength-1))
						subItem.classList.add("lastItem");

					this.container.insertBefore(subItem, nextNode);
				});
			}
			else if(item.classList.includes("type-array"))
			{
				itemValue.forEach((v, i) =>
				{
					const subItem = this.renderItemValue(v, {indent : curIndent+1});
					if(i===(itemValue.length-1))
						subItem.classList.add("lastItem");
					this.container.insertBefore(subItem, nextNode);
				});
			}
		}

		punctuate(prefix, value, suffix)
		{
			const prefixContainer = document.createElement("span");
			prefixContainer.classList.add("punctuation");
			prefixContainer.append(prefix);

			const valueContainer = document.createElement("span");
			valueContainer.classList.add("value");
			valueContainer.append(value);

			const suffixContainer = document.createElement("span");
			suffixContainer.classList.add("punctuation");
			suffixContainer.append(suffix);

			return [prefixContainer, valueContainer, suffixContainer];
		}

		renderItemValue(itemValue, _options={})
		{
			const options = Object.assign({indent : 0}, _options);
			//console.log(itemValue, options.valueText);

			const item = document.createElement("span");
			item.classList.add("item");
			item.classList.add("indent" + options.indent);
			item.JSONViewData = {value : itemValue, indent : options.indent};

			const value = document.createElement("span");
			value.classList.add("value");

			const meta = document.createElement("span");
			meta.classList.add("meta");

			if(typeof itemValue==="string")
			{
				item.classList.add("type-string");
				value.append(options.valueText || (this.options.dontQuoteStrings ? itemValue : JSON.stringify(itemValue)));
				item.prepend(value);
			}
			else if(typeof itemValue==="number")
			{
				item.classList.add("type-number");
				value.append(options.valueText || itemValue.toLocaleString());
				item.prepend(value);
			}
			else if(typeof itemValue==="boolean")
			{
				item.classList.add("type-boolean");
				value.append(options.valueText || (itemValue ? "true" : "false"));
				item.prepend(value);
			}
			else if(Array.isArray(itemValue))
			{
				if(this.options.dontExpandSingleSimples && itemValue.length===1 && (["string", "number", "boolean"].includes(typeof itemValue[0])))
				{
					item.classList.add("type-" + typeof itemValue[0]);
					if(options.valueText)
					{
						value.append(options.valueText);
						item.prepend(value);
					}
					else
					{
						item.prepend(...this.punctuate("[", this.renderItemValue(itemValue[0]).querySelector(".value").textContent, "]"));
					}
				}
				else
				{
					item.classList.add("type-array");

					item.classList.add("clickable");
					meta.append("// " + itemValue.length.toLocaleString().padStart(this.options.metaCountMinWidth || 0) + " item" + (itemValue.length===1 ? "" : "s"));
					item.append(meta);

					if(options.valueText)
					{
						value.append(options.valueText);
						item.prepend(value);
					}
					else
					{
						item.prepend(...this.punctuate("[", "…", "]"));
					}
				}
			}
			else if(Object.isObject(itemValue))
			{
				item.classList.add("type-object");

				const objectLength = Object.keys(itemValue).length;

				if(!this.options.dontExpandSingleSimples || objectLength>1)
				{
					item.classList.add("clickable");
					meta.append("// " + objectLength.toLocaleString().padStart(this.options.metaCountMinWidth || 0) + " item" + (objectLength===1 ? "" : "s"));
					item.append(meta);
				}

				if(options.valueText)
				{
					value.append(options.valueText);
					item.prepend(value);
				}
				else
				{
					item.prepend(...this.punctuate("{", "…", "}"));
				}
			}
			else
			{
				console.error("Unhandled type: %s", typeof itemValue);
				value.append(JSON.stringify(itemValue));
				item.prepend(value);
			}

			
			return item;
		}

		// Called to destroy this JSONView
		destroy()
		{
			this.container.removeEventListener("click", this.boundClickHandler);
		}
	}

	XU.JSONView = JSONView;
})();
