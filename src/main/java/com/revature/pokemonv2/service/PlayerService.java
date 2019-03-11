package com.revature.pokemonv2.service;

import java.io.IOException;
import java.util.Random;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.revature.pokemonv2.dao.PokemonDAO;
import com.revature.pokemonv2.dao.TrainerDAOImp;
import com.revature.pokemonv2.model.Pokemon;
import com.revature.pokemonv2.utilities.CachingUtility;

/**
 * The PlayerService class contains methods that service the TrainerDAOImp.
 */
public class PlayerService {

	private static final String AUTH = "Authorization";

	private static PlayerService instance;

	private static final ObjectMapper mapper = new ObjectMapper();

	private static TrainerDAOImp trainer = TrainerDAOImp.getTrainerDAO();

	/**
	 * Temporary until merged with Pokemon service.
	 * 
	 * @return the pokemon
	 * @throws ServletException
	 * @throws IOException
	 */
	public static Pokemon generatePokemon(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// enter the jwt token which needs to be decrypted
		String username = TokenService.getInstance().getUserDetailsFromToken(request.getHeader(AUTH)).getUsername();
		int trainerId = TokenService.getInstance().getUserDetailsFromToken(request.getHeader(AUTH)).getUserID();
		// generate a random pokemon and add it to the user's collection
		int pokemonId = new Random().nextInt(150) + 1;
		return PokemonDAO.generatePokemon(trainerId, pokemonId, username);
	}

	/**
	 * 
	 * @return an instance of the PlayerService class
	 */
	public static PlayerService getPlayerService() {
		if (instance == null) {
			instance = new PlayerService();
		}
		return instance;
	}

	private PlayerService() {
	}

	/**
	 * Handles Trainer login.
	 */
	public String login(HttpServletRequest request, HttpServletResponse response) {
		return trainer.loginAuthentication(request, response);
	}
	public void purchasePokemon(HttpServletRequest request, HttpServletResponse response) {
		String username = TokenService.getInstance().getUserDetailsFromToken(request.getHeader(AUTH)).getUsername();
		int id = Integer.parseInt(request.getParameter("pokemonId"));
		Pokemon p = CachingUtility.getCachingUtility().getPokemon(id);
		int cost = p.getCost();
		// dao command to remove the money
		if (trainer.purchasePokemon(username, cost)) {
			CachingUtility.getCachingUtility().addToCache(username, id);
			return true;
		}
		return false;
	}

	/**
	 * Takes in parameters and registers a new Trainer.
	 */
	public void registerPlayer(HttpServletRequest request, HttpServletResponse response) throws IOException {
		trainer.createTrainer(request.getParameter("username"), request.getParameter("password"),
				request.getParameter("email"), request.getParameter("fname"), request.getParameter("lname"), 0, 0);
	}
}
