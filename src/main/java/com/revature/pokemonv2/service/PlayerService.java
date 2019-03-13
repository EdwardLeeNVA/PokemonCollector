package com.revature.pokemonv2.service;

import java.io.IOException;
import java.util.Random;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;

import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.JsonParseException;
import com.revature.pokemonv2.dao.PokemonDAO;
import com.revature.pokemonv2.dao.TrainerDAOImp;
import com.revature.pokemonv2.model.Pokemon;
import com.revature.pokemonv2.utilities.CachingUtility;
import com.revature.pokemonv2.utilities.ConnectionUtility;

/**
 * The PlayerService class contains methods that service the TrainerDAOImp.
 */
public class PlayerService {

	private static final String AUTH = "Authorization";

	private static PlayerService instance;

	private static final ObjectMapper mapper = new ObjectMapper();

	private static TrainerDAOImp trainer = TrainerDAOImp.getTrainerDAO();

	private static final Logger log = Logger.getLogger(ConnectionUtility.class);

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
		int pokemonId = new Random().nextInt(151) + 1;
		return PokemonDAO.generatePokemon(trainerId, pokemonId, username, false);
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
	public Pokemon purchasePokemon(HttpServletRequest request, HttpServletResponse response) {
		String username = TokenService.getInstance().getUserDetailsFromToken(request.getHeader(AUTH)).getUsername();
		Pokemon p = null;
		try {
			p = mapper.readValue(request.getReader(), Pokemon.class);
			log.info("PlayerService purchase: " + p.getId() + " "+p.getName()+ " " + p.getCost());
		} catch (JsonParseException e) {
			// TODO Auto-generated catch block
			log.error(e);
		} catch (JsonMappingException e) {
			// TODO Auto-generated catch block
			log.error(e);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			log.error(e);
		}
		int cost = p.getCost();
		// dao command to remove the money
		if (trainer.purchasePokemon(username, cost, false)) {
			return CachingUtility.getCachingUtility().addToCache(username, p.getId());
			// return true;
		} else {
			return null;
		}
		// return false;
	}
	/**
	 * Takes in parameters and registers a new Trainer.
	 */
	public void registerPlayer(HttpServletRequest request, HttpServletResponse response) throws IOException {
//		trainer.createTrainer(request.getParameter("username"), request.getParameter("password"),
//				request.getParameter("email"), request.getParameter("fname"), request.getParameter("lname"), 0, 0, false);
		
		if (!trainer.createTrainer(request.getParameter("username"), request.getParameter("password"),
                request.getParameter("email"), request.getParameter("fname"), request.getParameter("lname"), 0, 0, false))
            response.getWriter().write("Failed");
	}
}
