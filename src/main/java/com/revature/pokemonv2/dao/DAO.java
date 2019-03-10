package com.revature.pokemonv2.dao;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Types;
import java.util.ArrayList;
import java.util.Random;
import java.util.List;
import java.util.Map;

import com.revature.pokemonv2.model.Pokemon;
import com.revature.pokemonv2.model.Trainer;
import com.revature.pokemonv2.model.Type;
import com.revature.pokemonv2.utilities.CachingUtility;
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

	/**
	 * 
	 * @param trainerId the id of the trainer
	 * @param pokemonId the pokemon's id
	 * @return score the player's score after generating the pokemon
	 */
	public static Pokemon generatePokemon(int trainerId, int pokemonId) {
		Connection conn = ConnectionUtility.getInstance().getConnection();
		
		//until we merge with the connection pool
		//conn = pool.getConnection();
		
		try (CallableStatement cs = conn.prepareCall("call add_pokemon(?,?,?)");) {
			cs.setInt(1, trainerId);
			
			//change new Random().nextInt(150) for 1 based index to
			//new Random().nextInt(151-1)+1
		
			cs.setInt(2, pokemonId);		
			Pokemon pokemon = CachingUtility.getCachingUtility().getPokemon(pokemonId);
			cs.setInt(3, pokemon.getCost());
			cs.execute();			
			//return CachingUtility.getCachingUtility().getPokemonFromCache(pokemonId);
			return pokemon;
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			//log.error(e.getMessage());
		}finally {
			
			//until we merge with connection pool
			ConnectionUtility.freeConnection(conn);
			
		}
	return null;
	}
	
}
