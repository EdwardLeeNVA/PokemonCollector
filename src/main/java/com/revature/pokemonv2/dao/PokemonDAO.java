package com.revature.pokemonv2.dao;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Types;
import java.util.ArrayList;
import java.util.List;

import org.apache.log4j.Logger;

import com.revature.pokemonv2.model.Pokemon;
import com.revature.pokemonv2.model.PokemonFactory;
import com.revature.pokemonv2.utilities.CachingUtility;
import com.revature.pokemonv2.utilities.ConnectionUtility;

public class PokemonDAO {

	/**
	 * EhCache for Pokemon
	 */

	final static Logger logger = Logger.getLogger(PokemonDAO.class);

	public List<Pokemon> getTrainerPokedex(String username) {
		logger.trace("Database called for pokedex for " + username);
		try (Connection conn = ConnectionUtility.getInstance().getConnection()) {
			try (CallableStatement cs = PokemonDAOStatements.getTrainerPokedexStatement(conn, username)) {
				cs.execute();
				ResultSet rs = (ResultSet) cs.getObject(2);
				List<Pokemon> pokedex = PokemonFactory.createListFromResultSet(rs);
				return pokedex;
			}
		} catch (SQLException e) {
			logger.error("getTrainerPokedex didn't work", e);
			return new ArrayList<Pokemon>();
		}
	}

	/**
	 * 
	 * @param trainerId the id of the trainer
	 * @param pokemonId the pokemon's id
	 * @return score the player's score after generating the pokemon
	 */
	public static Pokemon generatePokemon(int trainerId, int pokemonId, String username) {
		Connection conn = ConnectionUtility.getInstance().getConnection();

		// until we merge with the connection pool
		// conn = pool.getConnection();

		try (CallableStatement cs = conn.prepareCall("call add_pokemon(?,?,?)")) {
			cs.setInt(1, trainerId);

			// change new Random().nextInt(150) for 1 based index to
			// new Random().nextInt(151-1)+1

			cs.setInt(2, pokemonId);
			Pokemon pokemon = CachingUtility.getCachingUtility().addToCache(username, pokemonId);
			cs.setInt(3, pokemon.getCost());
			cs.execute();

			return pokemon;

		} catch (SQLException e) {
			// TODO Auto-generated catch block
			 logger.error(e.getMessage(), e);
		} finally {

			// until we merge with connection pool
			ConnectionUtility.freeConnection(conn);

		}
		return null;
	}

}
