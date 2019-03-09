package com.revature.pokemonv2.model;
import java.util.Map;
import java.util.Map.Entry;

import java.util.Map;

public class Pokemon {
	private int id;
	private String name;
	private String imageUrl;
	private String [] type;
	private Map <String,Integer> stats;
	private int count;
	private int cost;
	/**
	 * Empty Pokemon constructor.
	 */
	public Pokemon() { /*Empty Constructor */}
	
	public Pokemon(int id, int count) {
		super();
		this.id = id;
		this.count = count;
	}
	public Pokemon(int id, String name, String imageUrl, String[] type, Map<String, Integer> stats, Integer cost) {
		super();
		this.id = id;
		this.name = name;
		this.imageUrl = imageUrl;
		this.type = type;
		this.stats = stats;
		this.count = 1;
		this.cost = cost;
	}

	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getImageUrl() {
		return imageUrl;
	}
	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}
	public String[] getType() {
		return type;
	}
	public void setType(String[] type) {
		this.type = type;
	}
	public Map<String, Integer> getStats() {
		return stats;
	}
	public void setStats(Map<String, Integer> stats) {
		this.stats = stats;
	}
	public int getCount() {
		return count;
	}
	public void setCount(int count) {
		this.count = count;
	} 
	public Integer getCost() {
		return this.cost;
	}
	
}
