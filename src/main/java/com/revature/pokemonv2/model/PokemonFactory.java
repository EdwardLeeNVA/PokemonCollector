package com.revature.pokemonv2.model;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.apache.log4j.Logger;

/**
 * Creates Pokemon JavaBeans.
 */
public class PokemonFactory {

	public static final String COL_ID = "pokemon_id";
	public static final String COL_COUNT = "count";
	private static final Logger LOGGER = Logger.getLogger(PokemonFactory.class);

	public static Pokemon createFromResult(ResultSet result) {
		try {
			int id = result.getInt(COL_ID);
			int count = result.getInt(COL_COUNT);
			return new Pokemon(id, count);
		} catch (SQLException e) {
			LOGGER.error(e.getMessage(), e);
			return null;
		}
	}

	public static List<Pokemon> createListFromResultSet(ResultSet resultSet) {
		ArrayList<Pokemon> pokemonList = new ArrayList<>();
		try {
			while (resultSet.next()) {
				Pokemon pokemon = createFromResult(resultSet);
				pokemonList.add(pokemon);
			}
		} catch (SQLException e) {
			LOGGER.error(e.getMessage(), e);
		}
		return pokemonList;
	}

	private PokemonFactory() {
	}
}
