package com.revature.pokemonv2.utilities;

public class PokeAPI {
	
	
	public static final int POKEDEX_MAX_SIZE = 151;

	
	private static PokeAPI pokeAPI = new PokeAPI();
	private PokeAPI() {
		
	}
	public static PokeAPI getPokeAPI() {
		return pokeAPI;
	}
	

}
