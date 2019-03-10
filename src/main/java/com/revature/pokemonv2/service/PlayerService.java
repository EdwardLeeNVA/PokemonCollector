package com.revature.pokemonv2.service;

import java.io.IOException;
import java.util.Random;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.revature.pokemonv2.dao.DAO;
import com.revature.pokemonv2.dao.TrainerDAO;
import com.revature.pokemonv2.dao.TrainerDAOImp;
import com.revature.pokemonv2.model.Pokemon;
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
	private static TrainerDAOImp trainer = TrainerDAOImp.getTrainerDAO();
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
		trainer.createTrainer(request.getParameter("username"), request.getParameter("password"),
				request.getParameter("email"), request.getParameter("fname"), request.getParameter("lname"),
				0, 0);
	}
	
	//temporary until merged with project with pokemon service
	//returns the pokemon
	public static Pokemon generatePokemon(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		//enter the jwt token which needs to be decrypted
		int trainerId = TokenService.getInstance().getUserDetailsFromToken(
				request.getHeader("Authorization")).getUserID();
		//generate a random pokemon and add it to the user's collection
		int pokemonId = new Random().nextInt(150)+1;
			return DAO.generatePokemon(trainerId, pokemonId);
	}
	
	/**
	 * Handles Trainer login.
	 */
	public String login(HttpServletRequest request, HttpServletResponse response) {
		return trainer.loginAuthentication(request, response);
	}
	
	public void purchasePokemon(HttpServletRequest request, HttpServletResponse response) {
		String username = TokenService.getInstance().getUserDetailsFromToken(
				request.getHeader("Authorization")).getUsername();
		int credits = TokenService.getInstance().getUserDetailsFromToken(
				request.getHeader("Authorization")).getCredits(); //need to know if they can update the token or if I should be the one to do it
		int id = Integer.parseInt(request.getParameter("pokemonId"));
		Pokemon p = CachingUtility.getCachingUtility().getPokemonFromCache(id);
		int cost = p.getCost();
		//dao command to remove the money
		if(trainer.purchasePokemon(username, cost)) {
			CachingUtility.getCachingUtility().addToCache(username, id);
		}
	}
}
