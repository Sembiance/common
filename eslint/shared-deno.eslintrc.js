"use strict";

// This file contains self contained, DENO SPECIFIC rules
module.exports =
{
	"parserOptions" :
	{
		"sourceType" : "module"
	},
	"globals" : {"AbortController":"writable","AbortSignal":"writable","AggregateError":"writable","alert":"writable","Array":"writable","ArrayBuffer":"writable","atob":"writable","Atomics":"writable","BigInt":"writable","BigInt64Array":"writable","BigUint64Array":"writable","Blob":"writable","Boolean":"writable","BroadcastChannel":"writable","btoa":"writable","ByteLengthQueuingStrategy":"writable","Cache":"writable","caches":"writable","CacheStorage":"writable","clearInterval":"writable","clearTimeout":"writable","close":"writable","closed":"writable","CloseEvent":"writable","CompressionStream":"writable","confirm":"writable","console":"writable","CountQueuingStrategy":"writable","crypto":"writable","Crypto":"writable","CryptoKey":"writable","CustomEvent":"writable","DataView":"writable","Date":"writable","decodeURI":"writable","decodeURIComponent":"writable","DecompressionStream":"writable","Deno":"writable","DOMException":"writable","encodeURI":"writable","encodeURIComponent":"writable","Error":"writable","ErrorEvent":"writable","escape":"writable","eval":"writable","EvalError":"writable","Event":"writable","EventTarget":"writable","fetch":"writable","File":"writable","FileReader":"writable","FinalizationRegistry":"writable","Float32Array":"writable","Float64Array":"writable","FormData":"writable","Function":"writable","globalThis":"writable","GPU":"writable","GPUAdapter":"writable","GPUAdapterInfo":"writable","GPUBindGroup":"writable","GPUBindGroupLayout":"writable","GPUBuffer":"writable","GPUBufferUsage":"writable","GPUColorWrite":"writable","GPUCommandBuffer":"writable","GPUCommandEncoder":"writable","GPUComputePassEncoder":"writable","GPUComputePipeline":"writable","GPUDevice":"writable","GPUDeviceLostInfo":"writable","GPUError":"writable","GPUMapMode":"writable","GPUOutOfMemoryError":"writable","GPUPipelineLayout":"writable","GPUQuerySet":"writable","GPUQueue":"writable","GPURenderBundle":"writable","GPURenderBundleEncoder":"writable","GPURenderPassEncoder":"writable","GPURenderPipeline":"writable","GPUSampler":"writable","GPUShaderModule":"writable","GPUShaderStage":"writable","GPUSupportedFeatures":"writable","GPUSupportedLimits":"writable","GPUTexture":"writable","GPUTextureUsage":"writable","GPUTextureView":"writable","GPUValidationError":"writable","Headers":"writable","Infinity":"writable","Int16Array":"writable","Int32Array":"writable","Int8Array":"writable","Intl":"writable","isFinite":"writable","isNaN":"writable","JSON":"writable","localStorage":"writable","location":"writable","Location":"writable","Map":"writable","Math":"writable","MessageChannel":"writable","MessageEvent":"writable","MessagePort":"writable","NaN":"writable","navigator":"writable","Navigator":"writable","Number":"writable","Object":"writable","onbeforeunload":"writable","onerror":"writable","onload":"writable","onunhandledrejection":"writable","onunload":"writable","parseFloat":"writable","parseInt":"writable","performance":"writable","Performance":"writable","PerformanceEntry":"writable","PerformanceMark":"writable","PerformanceMeasure":"writable","ProgressEvent":"writable","Promise":"writable","PromiseRejectionEvent":"writable","prompt":"writable","Proxy":"writable","queueMicrotask":"writable","RangeError":"writable","ReadableByteStreamController":"writable","ReadableStream":"writable","ReadableStreamBYOBReader":"writable","ReadableStreamBYOBRequest":"writable","ReadableStreamDefaultController":"writable","ReadableStreamDefaultReader":"writable","ReferenceError":"writable","Reflect":"writable","RegExp":"writable","reportError":"writable","Request":"writable","Response":"writable","self":"writable","sessionStorage":"writable","Set":"writable","setInterval":"writable","setTimeout":"writable","SharedArrayBuffer":"writable","Storage":"writable","String":"writable","structuredClone":"writable","SubtleCrypto":"writable","Symbol":"writable","SyntaxError":"writable","TextDecoder":"writable","TextDecoderStream":"writable","TextEncoder":"writable","TextEncoderStream":"writable","TransformStream":"writable","TransformStreamDefaultController":"writable","TypeError":"writable","Uint16Array":"writable","Uint32Array":"writable","Uint8Array":"writable","Uint8ClampedArray":"writable","undefined":"writable","unescape":"writable","URIError":"writable","URL":"writable","URLPattern":"writable","URLSearchParams":"writable","WeakMap":"writable","WeakRef":"writable","WeakSet":"writable","WebAssembly":"writable","WebSocket":"writable","WebSocketStream":"writable","window":"writable","Window":"writable","Worker":"writable","WritableStream":"writable","WritableStreamDefaultController":"writable","WritableStreamDefaultWriter":"writable","gc":"writable"},	// eslint-disable-line key-spacing, comma-spacing
	"rules" :
	{
		// Best Practices (core)
		"no-implicit-globals" : 0,

		// Strict Mode
		"strict" : [2, "never"],

		// Stylistic Issues (core)
		// Interactive AST explorer, VERY useful: https://astexplorer.net/
		"no-restricted-syntax" : [2,
			// Deno 1.21 changed this method to fail and throw an exception on invalid data. Worse than that, even if you catch the exception, it outputs an error to console. So prefer to use our own fileUtil method instead
			{
				"selector" : "CallExpression[callee.object.name='Deno'][callee.property.name='readTextFile']",
				"message"  : "Instead of Deno.readTextFile() use fileUtil.readTextFile()"
			},
			{
				"selector" : "CallExpression[callee.object.name='Deno'][callee.property.name='writeTextFile']",	// We also weap writeTextFile just so there isn't confusion as to which one we use and which one we don't Deno vs fileUtil
				"message"  : "Instead of Deno.writeTextFile() use fileUtil.writeTextFile()"
			},


			// Coding style, prefer certain functions over others
			{
				"selector" : "CallExpression[callee.property.name='hasOwnProperty']",
				"message"  : "Instead of o.hasOwnProperty(v) use Object.hasOwn(o, v)"
			},
			{
				"selector" : "CallExpression[callee.object.name='JSON'][callee.property.name='parse']",
				"message"  : "Instead of JSON.parse(v) use xu.parseJSON(v, fallback)"
			},
			{
				"selector" : "CallExpression[callee.property.name='splice'][arguments.length>=3][arguments.0.value=0][arguments.1.value=0]",
				"message"  : "Instead of [].splice(0, 0, ...) use [].unshift(...)"
			},

			// These methods were RENAMED in the switch to deno
			{
				"selector" : "CallExpression[callee.property.name='batch']",
				"message"  : "Instead of [].batch() use [].chunk()"
			},
			{
				"selector" : "CallExpression[callee.property.name='multiSort']",
				"message"  : "Instead of [].multiSort() use [].sortMulti()"
			},

			// These methods were REMOVED in the switch to deno
			{
				"selector" : "CallExpression[callee.property.name='filterEmpty']",
				"message"  : "Instead of [].filterEmpty() use [].filter(v => !!v)"
			},
			{
				"selector" : "CallExpression[callee.property.name='findAndRemove']",
				"message"  : "Instead of [].findAndRemove() use [].filter()"
			},
			{
				"selector" : "CallExpression[callee.property.name='last']",
				"message"  : "Instead of [].last() use [].at(-1)"
			},
			{
				"selector" : "CallExpression[callee.property.name='mapToObject']",
				"message"  : "Instead of [].mapToObject(v => {}) use Object.fromEntries(a.map(v => {}))"
			},
			{
				"selector" : "CallExpression[callee.property.name='pushCopyInPlace']",
				"message"  : "Instead of arr.pushCopyInPlace(n) use arr.push(...Array(n).fill(arr).flat())"
			},
			{
				"selector" : "CallExpression[callee.property.name='pushMany']",
				"message"  : "Instead of [].pushMany(v, n) use [].push(...Array(n).fill(v))"
			},
			{
				"selector" : "CallExpression[callee.object.name='Object'][callee.property.name='forEach']",
				"message"  : "Instead of Object.forEach(o, (k, v) => {}) use for([k, v] of Object.entries(o)) {}"
			},
			{
				"selector" : "CallExpression[callee.object.name='Object'][callee.property.name='reduce']",
				"message"  : "Instead of Object.reduce(o) use Object.entries(o).reduce()"
			},
			{
				"selector" : "CallExpression[callee.object.name='Object'][callee.property.name='swapKeyValues']",
				"message"  : "Instead of Object.swapKeyValues(o) use Object.map(o, (k, v) => ([v, k]))"
			}
		]
	}
};
