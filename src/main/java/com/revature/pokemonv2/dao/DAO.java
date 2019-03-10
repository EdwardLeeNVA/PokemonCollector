package com.revature.pokemonv2.dao;

import java.util.List;
import java.util.Map;

import com.revature.pokemonv2.model.Pokemon;
import com.revature.pokemonv2.model.Trainer;
import com.revature.pokemonv2.model.Type;

import com.revature.pokemonv2.utilities.ConnectionUtility;
import com.revature.pokemonv2.utilities.PokedexLoadWriter;


public interface DAO {
	
	
	// GET STATISTICS DATA
	public Map<Trainer, Integer> getPokemonCountByTrainer();           // "user1 has 30 pokemon"       | "user2 has 80 pokemon"       | .... 
	public Map<Trainer, Integer> getUniquePokemonCountByTrainer();     // "user1 has 18 unique pokemon"| "user2 has 61 unique pokemon"| .... 
	public Map<Pokemon, Integer> getPokemonPopularity();			   // "42 users have bulbasaur"    | "31 users have ivysaur"      | ....
	public Map<Pokemon, Integer> getPokmeonFrequency();				   // "62 bulbasuars caught"       | "44 ivysaurs caught"         | ....
	public Map<Type, 	Integer> getTypeFrequency();                   // "95 flying types caught"     | "216 water types caught"     | ....
	public Map<Pokemon, Integer> getPokmeonFrequency(Trainer trainer); // "user1 has 3 bulbasaurs"     | "user2 has 8 ivysaurs"       | ....
	public Map<Type, 	Integer> getTypeFrequency(Trainer trainer);    // "user1 has 8 flying types"   | "user2 has 31 water types"   | ....
	public Map<Trainer, Integer> getTrainerScore(); 				   // "user1 has 888 points"       | "user2 has 889 points"       | ....
	public Map<Trainer, Integer> getTrainerCredits(); 				   // "user1 has 1 credits"        | "user2 has 100000 credits"   | ....
	List<Pokemon> getTrainerPokedex(String username);
	List<Trainer> getLeaderboard(int topN);

}
