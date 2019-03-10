package com.revature.pokemonv2.dao;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.SQLException;

import oracle.jdbc.OracleTypes;

/**
 * The trainerDAOStatements class consists of all SQL statements
 *
 */
class TrainerDAOStatements {
	
	/**
	 * Verifies the login statement
	 */
	static CallableStatement verifyLoginStatement(Connection connection, String username, String password) throws SQLException {
		String sql = "CALL VERIFY_CREDENTIALS(?,?,?)";
		CallableStatement statement = connection.prepareCall(sql);
		statement.setString(1, username);
		statement.setString(2, password);
		statement.registerOutParameter(3, OracleTypes.CURSOR);
		return statement;
	}
	
	static CallableStatement createTrainerStatement(Connection connection, String username, String password, String email, String firstName, String lastName,
			int credit, int score) throws SQLException {
		CallableStatement statement = connection.prepareCall("CALL create_trainer(?,?,?,?,?,?,?)");
		statement.setString(1, username);
		statement.setString(2, password);
		statement.setString(3, email);
		statement.setString(4, firstName);
		statement.setString(5, lastName);
		statement.setInt(6, credit);
		statement.setInt(7, score);
		return statement;
	}
	
	static CallableStatement purchasePokemonStatement(Connection connection, String username, int cost) throws SQLException {
		CallableStatement statement = connection.prepareCall("CALL update_credits(?,?)");
		statement.setString(1, username);
		statement.setInt(2, (cost * -1));
		return statement;
	}

	private TrainerDAOStatements() { }
}
