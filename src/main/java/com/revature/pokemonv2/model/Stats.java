package com.revature.pokemonv2.model;

public class Stats {
	private String name;
	private int y;
	
	public String getName() {
		return name;
	}
	
	public Stats(String name, int y) {
		super();
		this.name = name;
		this.y = y;
	}

	public void setName(String name) {
		this.name = name;
	}
	
	public int getY() {
		return y;
	}
	
	public void setY(int y) {
		this.y = y;
	}
	
	

}
