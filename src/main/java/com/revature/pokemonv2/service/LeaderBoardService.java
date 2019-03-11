package com.revature.pokemonv2.service;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.revature.pokemonv2.dao.StatsDAOImpl;
import com.revature.pokemonv2.model.Stats;
import com.revature.pokemonv2.model.Trainer;

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
	
	public List<Trainer> returnLeaderBoard(HttpServletRequest request, HttpServletResponse response) {
		
		return StatsDAOImpl.getInstance().getLeaderboard(10);
				
	}
	
	
	public List<Stats> returngetPokemonCountByTrainer(HttpServletRequest request, HttpServletResponse response){
		return StatsDAOImpl.getInstance().getPokemonCountByTrainer();
	}
}
