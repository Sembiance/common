package com.telparia.util;

public class KeyValue<K, V>
{
	public K key;
	public V value;
	
	public KeyValue(K key)
	{
		this.key = key;
	}

	public KeyValue(K key, V value)
	{
		this.key = key;
		this.value = value;
	}
	
	@Override
	public String toString()
	{
		return key.toString() + "," + value.toString();
	}
}
