package com.revature.pokemonv2.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.revature.pokemonv2.model.Pokemon;
import com.revature.pokemonv2.model.Trainer;
import com.revature.pokemonv2.model.Type;

public class DAOImpl implements DAO{

	@Override
	public Map<Trainer, Integer> getPokemonCountByTrainer() {
		
		Map pokemonCount = new HashMap<Trainer, Integer>();
		
		
		return null;
	}

	@Override
	public Map<Trainer, Integer> getUniquePokemonCountByTrainer() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Map<Pokemon, Integer> getPokemonPopularity() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Map<Pokemon, Integer> getPokmeonFrequency() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Map<Type, Integer> getTypeFrequency() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Map<Pokemon, Integer> getPokmeonFrequency(Trainer trainer) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Map<Type, Integer> getTypeFrequency(Trainer trainer) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Map<Trainer, Integer> getTrainerScore() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Map<Trainer, Integer> getTrainerCredits() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Pokemon> getTrainerPokedex(String key) {
		// TODO Auto-generated method stub
		return null;
	}

}
