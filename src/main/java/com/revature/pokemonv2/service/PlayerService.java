package com.revature.pokemonv2.service;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.revature.pokemonv2.dao.TrainerDAO;
import com.revature.pokemonv2.dao.TrainerDAOImp;
import com.revature.pokemonv2.model.Trainer;

public class PlayerService {
	private PlayerService() { }
	private static final ObjectMapper mapper = new ObjectMapper();
	private static TrainerDAO trainer = TrainerDAOImp.getTrainerDAO();
	private static PlayerService instance;
	
	//Gets instance of PlayerService
	public static PlayerService getPlayerService() {
		if (instance == null) {
			instance = new PlayerService();
		}
		return instance;
	}
	
	public void registerPlayer(HttpServletRequest request, HttpServletResponse response)
			throws IOException {
		JsonNode playerJson = mapper.readTree(request.getReader());
		trainer.createTrainer(
				playerJson.get("username").asText(),
				playerJson.get("password").asText(),
				playerJson.get("email").asText(),
				playerJson.get("f_name").asText(),
				playerJson.get("l_name").asText(),
				0,
				0);
	}

	public String login(HttpServletRequest request, HttpServletResponse response) {
		return trainer.loginAuthentication(request, response);
	}
}
