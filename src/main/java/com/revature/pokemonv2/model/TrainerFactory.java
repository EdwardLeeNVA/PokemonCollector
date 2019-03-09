package com.revature.pokemonv2.model;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.apache.log4j.Logger;

/**
 * Creates Trainer JavaBeans.
 */
public class TrainerFactory {

	public static final String COL_ID = "pokemon_id";
	public static final String COL_COUNT = "count";
	private static final Logger LOGGER = Logger.getLogger(TrainerFactory.class);

	/**
	 * Creates a Trainer bean from ResultSet.
	 */
	public static Trainer createFromResult(ResultSet result, String username) {
		try {
			int id = result.getInt(1);
			int credits = result.getInt(2);
			int score = result.getInt(3);
			return create(id, username, credits, score);
		} catch (SQLException e) {
			LOGGER.error(e.getMessage(), e);
			return null;
		}
	}

	/**
	 * Creates a Trainer bean with the specified parameters.
	 */
	public static Trainer create(int id, String username, int credits, int score) {
		Trainer trainer = new Trainer();
		trainer.setUsername(username);
		trainer.setUserID(id);
		trainer.setCredits(credits);
		trainer.setScore(score);
		return trainer;
	}

	private TrainerFactory() {
	}
}