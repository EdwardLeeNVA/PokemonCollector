package com.revature.pokemonv2.model;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.apache.log4j.Logger;

public class TrainerFactory {
	
	public static final String COL_ID = "pokemon_id";
	public static final String COL_COUNT = "count";
	private static final Logger LOGGER = Logger.getLogger(TrainerFactory.class);

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

	/*public static List<Trainer> createListFromResultSet(ResultSet resultSet) {
		ArrayList<Trainer> trainerList = new ArrayList<>();
		try {
			while (resultSet.next()) {
				Trainer trainer = createFromResult(resultSet);
				pokemonList.add(pokemon);
			}
		} catch (SQLException e) {
			LOGGER.error(e.getMessage(), e);
		}
		return pokemonList;
	}*/
	
	public static Trainer create(int id, String username, int credits, int score) {
		Trainer trainer = new Trainer();
		trainer.setUsername(username);
		trainer.setUserID(id);
		trainer.setCredits(credits);
		trainer.setScore(score);
		return trainer;
	}

	private TrainerFactory() { }
}
