package com.revature.pokemonv2.model;
import java.util.Map;

/**
 * Models a Pokemon.
 */
public class Pokemon {
	private int id;
	private String name;
	private String imageUrl;
	private String [] type;
	private Map <String,Integer> stats;
	private int count;
	
	/**
	 * Empty Pokemon constructor.
	 */
	public Pokemon() { /*Empty Constructor */}
	
	
	/**
	 * Pokemon constructor with only ID and count.
	 */
	public Pokemon(int id, int count) {
		super();
		this.id = id;
		this.count = count;
	}


	/**
	 * Pokemon constructor will all parameters
	 */
	public Pokemon(int id, String name, String imageUrl, String[] type, Map<String, Integer> stats) {
		super();
		this.id = id;
		this.name = name;
		this.imageUrl = imageUrl;
		this.type = type;
		this.stats = stats;
		this.count = 1;
	}

	/**
	 * Gets the Pokemon's ID
	 */
	public int getId() {
		return id;
	}
	/**
	 * Sets the Pokemon's ID.
	 */
	public void setId(int id) {
		this.id = id;
	}
	/**
	 * Gets the Pokemon's name.
	 */
	public String getName() {
		return name;
	}
	/**
	 * Sets the Pokemon's name.
	 */
	public void setName(String name) {
		this.name = name;
	}
	/**
	 * Gets the Pokemon's image URL.
	 */
	public String getImageUrl() {
		return imageUrl;
	}
	/**
	 * Sets the Pokemon's image URL.
	 */
	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}
	/**
	 * Gets the Pokemon's type.
	 */
	public String[] getType() {
		return type;
	}
	/**
	 * Sets the Pokemon's type.
	 */
	public void setType(String[] type) {
		this.type = type;
	}
	/**
	 * Gets the Pokemon's statistics.
	 */
	public Map<String, Integer> getStats() {
		return stats;
	}
	/**
	 * Sets the Pokemon's statistics.
	 */
	public void setStats(Map<String, Integer> stats) {
		this.stats = stats;
	}
	/**
	 * Gets the Pokemon's count.
	 */
	public int getCount() {
		return count;
	}
	/**
	 * Sets the Pokemon's count.
	 */
	public void setCount(int count) {
		this.count = count;
	} 
	
	
}
