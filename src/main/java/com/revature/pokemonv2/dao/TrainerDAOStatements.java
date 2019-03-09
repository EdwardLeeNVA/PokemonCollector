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

	private TrainerDAOStatements() {
	}
}
