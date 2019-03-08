package com.revature.pokemonv2.service;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.revature.pokemonv2.dao.TrainerDAOImp;
import com.revature.pokemonv2.model.Trainer;

public class PlayerService {
	
	private static PlayerService playerService = null; 
	private static TrainerDAOImp trainer = TrainerDAOImp.getTrainerDAO();
	
	public PlayerService() {
		
	}
	
	public static PlayerService getPlayerService() {
		if (playerService == null) {
			playerService = new PlayerService();
		}
		return playerService;
	}
	
	
	public Trainer login(HttpServletRequest request, HttpServletResponse response) {
		return trainer.loginAuthentication(request, response);
	}
}
