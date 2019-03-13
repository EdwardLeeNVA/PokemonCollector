package com.revature.pokemonv2.model;
import java.util.Arrays;
import java.util.Map;
import java.util.Map.Entry;

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
	private int cost;
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
	
	public Pokemon(int id, String name, String imageUrl, String[] type, Map<String, Integer> stats, Integer count, Integer cost) {
		super();
		this.id = id;
		this.name = name;
		this.imageUrl = imageUrl;
		this.type = type;
		this.stats = stats;
		this.count = count;
		this.cost = cost;
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
	public Integer getCost() {
		return this.cost;
	}


	@Override
	public String toString() {
		return "Pokemon [id=" + id + ", name=" + name + ", imageUrl=" + imageUrl + ", type=" + Arrays.toString(type)
				+ ", stats=" + stats + ", count=" + count + ", cost=" + cost + "]";
	}
	
	@Override
	public boolean equals(Object obj) {
		if ((obj != null) && (obj instanceof Pokemon)) {
			int thisId = getId();
			Pokemon otherPokemon = (Pokemon) obj;
			int thatId = otherPokemon.getId();
			return (thisId == thatId);
		} else {
			return false;
		}
	}
}
