package com.revature.pokemonv2.model;
import java.util.Map;

public class Pokemon {
	private int id;
	private String name;
	private String imageUrl;
	private String [] type;
	private Map <String,Integer> stats;
	
	public Pokemon() { /*Empty Constructor */}
	
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
	
	
}
