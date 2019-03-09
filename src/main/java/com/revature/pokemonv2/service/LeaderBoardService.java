package com.revature.pokemonv2.service;

import com.fasterxml.jackson.databind.ObjectMapper;

public class LeaderBoardService {
	
	private LeaderBoardService() {
	}
	//Object mapper
	private static final ObjectMapper mapper = new ObjectMapper();
	//Trainer DAO instance
	//private static TrainerDAO trainer = TrainerDAOImp.getTrainerDAO();
	//Player service instance
	private static LeaderBoardService instance;

	/**
	 * Returns an instance of the PlayerService class.
	 */
	public static LeaderBoardService getLeaderBoardService() {
		if (instance == null) {
			instance = new LeaderBoardService();
		}
		return instance;
	}
	
	
}
