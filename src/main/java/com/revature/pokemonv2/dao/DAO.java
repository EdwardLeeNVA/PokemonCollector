package com.revature.pokemonv2.dao;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Random;

import org.apache.log4j.Logger;

import com.revature.pokemonv2.model.Pokemon;
import com.revature.pokemonv2.utilities.CachingUtility;
import com.revature.pokemonv2.utilities.ConnectionUtility;

public class DAO {
	
	public ConnectionUtility connection = new ConnectionUtility();
	private static Logger logger = Logger.getLogger(DAO.class);
	
	public ArrayList<Pokemon> getTrainerPokedex(String username) {
		
		try (Connection conn = connection.getConnection();) {
			
			String sql = "call get_all_pokemon(?)";
			CallableStatement cs = conn.prepareCall(sql);
			cs.setString(1, username);
			ResultSet rs = cs.executeQuery();
			ArrayList<Pokemon> pokedex = new ArrayList<>();
			while(rs.next()) {
				pokedex.add(new Pokemon(rs.getInt("pokemon_id"), rs.getInt("count")));
			}
			return pokedex;
		}catch(SQLException e) {
			logger.error("getTrainerPokedex didn't work");
			e.printStackTrace();
		}
		
		return null;
	}

	public static int generatePokemon(int trainerId, String username) {
		Connection conn = null;
		
		//until we merge with the connection pool
		//conn = pool.getConnection();
		
		try (CallableStatement cs = conn.prepareCall("{call add_pokemon(?,?)}");) {
			cs.setInt(1, trainerId);
			
			//change new Random().nextInt(150) for 1 based index to
			//new Random().nextInt(151-1)+1
			int pokemonId = new Random().nextInt(150)+1;
			
			CachingUtility.getCachingUtility().addToCache(username, pokemonId);
			
			cs.setInt(2, pokemonId);

			cs.execute();
			
			return pokemonId;
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			//log.error(e.getMessage());
		}finally {
			
			//until we merge with connection pool
			
			//pool.freeConnection(conn);
		}
	return -1;
	}
	
}
