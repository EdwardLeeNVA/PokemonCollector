package com.revature.pokemonv2.service;

import java.io.IOException;
import java.util.Iterator;
import java.util.Map.Entry;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.revature.pokemonv2.dao.TrainerDAO;
import com.revature.pokemonv2.dao.TrainerDAOImp;
import com.revature.pokemonv2.model.Pokemon;
import com.revature.pokemonv2.model.Trainer;
import com.revature.pokemonv2.utilities.CachingUtility;

/**
 * The PlayerService class contains methods that service the TrainerDAOImp.
 */
public class PlayerService {
	private PlayerService() {
	}
	//Object mapper
	private static final ObjectMapper mapper = new ObjectMapper();
	//Trainer DAO instance
	private static TrainerDAO trainer = TrainerDAOImp.getTrainerDAO();
	//Player service instance
	private static PlayerService instance;

	/**
	 * Returns an instance of the PlayerService class.
	 */
	public static PlayerService getPlayerService() {
		if (instance == null) {
			instance = new PlayerService();
		}
		return instance;
	}
	/**
	 * Takes in parameters and registers a new Trainer.
	 */
	public void registerPlayer(HttpServletRequest request, HttpServletResponse response) throws IOException {
		System.out.println(request.getParameter("username"));
		System.out.println(request.getParameter("password"));
		System.out.println(request.getParameter("email"));
		System.out.println(request.getParameter("fname"));
		System.out.println(request.getParameter("lname"));
		trainer.createTrainer(request.getParameter("username"), request.getParameter("password"),
				request.getParameter("email"), request.getParameter("fname"), request.getParameter("lname"),
				0, 0);
	}
	/**
	 * Handles Trainer login.
	 */
	public String login(HttpServletRequest request, HttpServletResponse response) {
		return trainer.loginAuthentication(request, response);
	}
	
	public boolean purchasePokemon(HttpServletRequest request, HttpServletResponse response) {
		String username = TokenService.getInstance().getUserDetailsFromToken(
				request.getHeader("Authorization")).getUsername();
		int id = Integer.parseInt(request.getParameter("pokemonId"));
		Pokemon p = CachingUtility.getCachingUtility().getPokemonFromCache(id);
		int cost = p.getCost();
		//dao command to remove the money
		if(trainer.purchasePokemon(username, cost)) {
			CachingUtility.getCachingUtility().addToCache(username, id);
			return true;
		}
		return false;
	}
}
