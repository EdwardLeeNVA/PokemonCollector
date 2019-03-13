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

	static CallableStatement createTrainerStatement(Connection connection, String username, String password,
			String email, String firstName, String lastName, int credit, int score) throws SQLException {
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

	static CallableStatement getDuplicatesStatement(Connection connection, int trainerId) throws SQLException {
		CallableStatement statement = connection.prepareCall("CALL get_all_duplicates(?, ?)");
		statement.setInt(1, trainerId);
		statement.registerOutParameter(2, OracleTypes.CURSOR);
		return statement;
	}

	static CallableStatement purchasePokemonStatement(Connection connection, String username, int cost, int trainerId, int pokeId)
			throws SQLException {
		CallableStatement statement = connection.prepareCall("CALL update_credits(?,?,?,?)");
		statement.setString(1, username);
		statement.setInt(2, (cost * -1));
		statement.setInt(3, trainerId);
		statement.setInt(4, pokeId);
		return statement;
	}

	/**
	 * Statement for redeemSpecific. Out param 3 for added credits. Out param 4 for
	 * new total.
	 * 
	 * @param connection database connection
	 * @param trainerId  ID of trainer
	 * @param pokeId     ID of Pokemon
	 * @return a CallableStatement
	 * @throws SQLException
	 */
	static CallableStatement redeemSpecificStatement(Connection connection, int trainerId, int pokeId)
			throws SQLException {
		CallableStatement statement = connection.prepareCall("CALL redeem_duplicate(?, ?)");
		statement.setInt(1, trainerId);
		statement.setInt(2, pokeId);
		return statement;
	}

	/**
	 * Verifies the login statement
	 */
	static CallableStatement verifyLoginStatement(Connection connection, String username, String password)
			throws SQLException {
		String sql = "CALL VERIFY_CREDENTIALS(?,?,?)";
		CallableStatement statement = connection.prepareCall(sql);
		statement.setString(1, username);
		statement.setString(2, password);
		statement.registerOutParameter(3, OracleTypes.CURSOR);
		return statement;
	}
	
	static CallableStatement redeemAllStatement(Connection connection, int trainerId) throws SQLException {
		CallableStatement statement = connection.prepareCall("CALL redeem_all_duplicates(?)");
		statement.setInt(1, trainerId);
		return statement;
	}

	private TrainerDAOStatements() {
	}
}
