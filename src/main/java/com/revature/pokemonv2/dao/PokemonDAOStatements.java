package com.revature.pokemonv2.dao;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.SQLException;

import org.apache.log4j.Logger;

import oracle.jdbc.OracleTypes;

class PokemonDAOStatements {
	
	private static final Logger logger = Logger.getLogger(PokemonDAO.class);

	static CallableStatement getTrainerPokedexStatement(Connection connection, String username) throws SQLException {
		CallableStatement statement = connection.prepareCall("call get_all_pokemon(?, ?)");
		statement.setString(1, username);
		statement.registerOutParameter(2, OracleTypes.CURSOR);
		return statement;
	}
	
	private PokemonDAOStatements() { }
}
