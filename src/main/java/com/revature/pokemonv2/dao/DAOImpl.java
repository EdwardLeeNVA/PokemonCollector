package com.revature.pokemonv2.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.revature.pokemonv2.data.SampleData;
import com.revature.pokemonv2.model.Pokemon;
import com.revature.pokemonv2.model.Trainer;
import com.revature.pokemonv2.model.Type;

public class DAOImpl implements DAO{
	
	private static DAOImpl mInstance; 
	
	private DAOImpl() {
		super(); 
	}
	
	public static DAOImpl getInstance() {
		if(mInstance == null) {
			mInstance = new DAOImpl(); 
		}
		return mInstance; 
	}

	@Override
	public Map<Trainer, Integer> getPokemonCountByTrainer() {
		
		Map pokemonCount = new HashMap<Trainer, Integer>();
		List <Trainer> trainers = SampleData.getInstance().getTrainersT(); 
		for(Trainer t: trainers) {
			pokemonCount.put(t, (Math.floor(Math.random()*15))); 
		}
		
		return pokemonCount;
	}

	@Override
	public Map<Trainer, Integer> getUniquePokemonCountByTrainer() {
		Map pokemonCount = new HashMap<Trainer, Integer>();
		List <Trainer> trainers = SampleData.getInstance().getTrainersT(); 
		for(Trainer t: trainers) {
			pokemonCount.put(t, (Math.floor(Math.random()*8))); 
		}
		
		return pokemonCount;
	}

	@Override
	public Map<Pokemon, Integer> getPokemonPopularity() {
		Map pokemonPop = new HashMap<Pokemon, Integer>();
		List <Pokemon> pokemons = SampleData.getInstance().getPokemonT(); 
		for(Pokemon p: pokemons) {
			pokemonPop.put(p, (Math.floor(Math.random()*10))); 
		}
		
		return pokemonPop;
	}

	@Override
	public Map<Pokemon, Integer> getPokmeonFrequency() {
		Map pokemonPop = new HashMap<Pokemon, Integer>();
		List <Pokemon> pokemons = SampleData.getInstance().getPokemonT(); 
		for(Pokemon p: pokemons) {
			pokemonPop.put(p, (Math.floor(Math.random()*15))); 
		}
		
		return pokemonPop;
	}

	@Override
	public Map<Type, Integer> getTypeFrequency() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Map<Pokemon, Integer> getPokmeonFrequency(Trainer trainer) {
		Map pokemonPop = new HashMap<Pokemon, Integer>();
		List <Pokemon> pokemons = SampleData.getInstance().getPokemonT(); 
		for(Pokemon p: pokemons) {
			pokemonPop.put(p, (Math.floor(Math.random()*4))); 
		}
		
		return pokemonPop;
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
	public List<Trainer> getLeaderboard() {
		return SampleData.getInstance().getTrainersT(); 
		
	}

	@Override
	public List<Pokemon> getTrainerPokedex(String key) {
		// TODO Auto-generated method stub
		return null;
	}

}
