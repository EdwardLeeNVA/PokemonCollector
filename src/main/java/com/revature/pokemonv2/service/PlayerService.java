package com.revature.pokemonv2.service;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.revature.pokemonv2.dao.DAO;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.revature.pokemonv2.dao.TrainerDAOImplementation;

public class PlayerService {
	private PlayerService() { }
	private static final ObjectMapper mapper = new ObjectMapper();
	
	public static void RegisterPlayer(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		JsonNode playerJson = mapper.readTree(request.getReader());
		TrainerDAOImplementation.getDAO().create_trainer(
				playerJson.get("username").asText(),
				playerJson.get("password").asText(),
				playerJson.get("email").asText(),
				playerJson.get("f_name").asText(),
				playerJson.get("l_name").asText(),
				0,
				0);
	}
	
	//temporary until merged with project with pokemon service
	public static void generatePokemon(int trainerId)
			throws ServletException, IOException {
		
			DAO.generatePokemon(trainerId);
	}
	
}
