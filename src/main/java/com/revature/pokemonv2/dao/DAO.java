package com.revature.pokemonv2.dao;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.apache.log4j.Logger;

import com.revature.pokemonv2.model.Pokemon;
import com.revature.pokemonv2.utilities.ConnectionUtility;
import com.revature.pokemonv2.utilities.PokedexLoadWriter;

public class DAO {

	
	/**
	 * EhCache for Pokemon
	 */
	
	final static Logger logger = Logger.getLogger(DAO.class);
	
	
	public List<Pokemon> getTrainerPokedex(String username) {
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
