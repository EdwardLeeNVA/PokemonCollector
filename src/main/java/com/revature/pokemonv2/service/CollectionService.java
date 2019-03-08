package com.revature.pokemonv2.service;

import java.util.List;

import com.revature.pokemonv2.model.Pokemon;
import com.revature.pokemonv2.model.Trainer;

public interface CollectionService {
	
	public List<Pokemon> getAllPokemon(String username);
	//public boolean removeCollection(Trainer t);

}
