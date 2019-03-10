package com.revature.pokemonv2.dao;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;

import com.revature.pokemonv2.data.SampleData;
import com.revature.pokemonv2.model.Pokemon;
import com.revature.pokemonv2.model.Trainer;
import com.revature.pokemonv2.model.TrainerFactory;
import com.revature.pokemonv2.model.Type;
import com.revature.pokemonv2.utilities.ConnectionUtility;

import oracle.jdbc.OracleTypes;

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
		try (Connection conn = ConnectionUtility.getInstance().getConnection()) {
			String sql = "CALL get_pokemon_count_per_trainer(?)";
			try(CallableStatement cs = conn.prepareCall(sql)){
				cs.registerOutParameter(1, oracle.jdbc.OracleTypes.CURSOR);
				cs.execute();
				Map<Trainer, Integer> trainers = new HashMap<Trainer, Integer>(); 
				try(ResultSet rs = (ResultSet) cs.getObject(1)){
				//While the result set has another object create a trainer object and push it to the leaderboard array.
					while(rs.next()) {
						Trainer t = new Trainer(
							rs.getString("username"),  
							rs.getString("f_name"),  
							rs.getString("l_name"),  
							rs.getInt("score"), 
							rs.getInt("credits"),  
							rs.getInt("ID")
						); 
						Integer c = rs.getInt("count(*)");
						trainers.put(t, c); 
					}
				}
				return trainers;
			}

		} catch (SQLException e) {
			e.printStackTrace();
			return null;
		}
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


	public List<Trainer> getLeaderboard(int topN) {
		// Get the top n pokemon trainers
		try (Connection conn = ConnectionUtility.getInstance().getConnection()) {
			String sql = "CALL get_leaderboard(?,?)";
			try(CallableStatement cs = conn.prepareCall(sql)){
				cs.setInt(1, topN);
				cs.registerOutParameter(2, oracle.jdbc.OracleTypes.CURSOR);
				cs.execute();
				List<Trainer> leaderboard = new ArrayList<Trainer>(); 
				try(ResultSet rs = (ResultSet) cs.getObject(2)){
				//While the result set has another object create a trainer object and push it to the leaderboard array.
					while(rs.next()) {
						Trainer t = new Trainer(
								rs.getString("username"), 
								rs.getString("f_name"), 
								rs.getString("l_name"), 
								rs.getInt("score"), 
								rs.getInt("credits"), 
								rs.getInt("ID")
								);
						leaderboard.add(t);
					}
				}
				return leaderboard;
			}

		} catch (SQLException e) {
			e.printStackTrace();
			return null;
}
	}

	@Override
	/**
	 * EhCache for Pokemon
	 */
	public List<Pokemon> getTrainerPokedex(String username) {
		Logger logger = Logger.getLogger(DAO.class);
		try (Connection conn = ConnectionUtility.getInstance().getConnection()) {
			String sql = "call get_all_pokemon(?)";
			try (CallableStatement cs = conn.prepareCall(sql)) {
				cs.setString(1, username);
				try (ResultSet rs = cs.executeQuery()) {
					ArrayList<Pokemon> pokedex = new ArrayList<>();
					while (rs.next()) {
						pokedex.add(new Pokemon(rs.getInt("pokemon_id"), rs.getInt("count")));
					}
					return pokedex;
				}
			}
		} catch (SQLException e) {
			logger.error("getTrainerPokedex didn't work");
			return new ArrayList<Pokemon>();
		}	
	}
	
	
	
}

