package com.revature.pokemonv2.service;

import java.util.List;

import com.revature.pokemonv2.model.Pokemon;

public interface CollectionService {
	
	public List<Pokemon> getAllPokemon(String username);
	public List<Pokemon> getCompleteSet();
	//public boolean removeCollection(Trainer t);

}
