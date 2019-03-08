package com.revature.pokemonv2.dao;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Collection;

import org.apache.log4j.Logger;

import com.revature.pokemonv2.model.Pokemon;
import com.revature.pokemonv2.utilities.ConnectionUtility;

public class DAO {
	
	public ConnectionUtility connection = new ConnectionUtility();
	private static Logger logger = Logger.getLogger(DAO.class);
	
	public Collection getTrainerPokedex(String username) {
		
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

}
