package com.revature.pokemonv2.dao;

import java.util.List;

import com.revature.pokemonv2.model.Stats;
import com.revature.pokemonv2.model.Trainer;

public interface StatDAO {

	List<Trainer> getLeaderboard(int topN, boolean isTesting);
	List<Stats> getPokemonCountByTrainer(boolean isTesting);
	List<Stats> getTotalPokemonCountByTrainer(boolean isTesting);

}
