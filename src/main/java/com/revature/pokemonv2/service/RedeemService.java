package com.revature.pokemonv2.service;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.revature.pokemonv2.dao.TrainerDAOImp;
import com.revature.pokemonv2.model.Pokemon;
import com.revature.pokemonv2.model.Trainer;
import com.revature.pokemonv2.utilities.CachingUtility;

/**
 * @author Timothy Jordan
 * @author Anup Saha
 *
 */
public class RedeemService {
	// Create and instance of the ObjectMapper.
	private static final ObjectMapper mapper = new ObjectMapper();

	/**
	 * Purpose: Get all duplicates for a specific trainer.
	 * 
	 * @param request
	 * @param response
	 * @throws ServletException
	 * @throws IOException
	 */
	public static void getDuplicates(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		ArrayList<Pokemon> duplicateJSONList = null;
		// Retrieve the JWT token
		final String token = request.getHeader("Authorization"); // get JWT token
		// Retrieve userID from the token
		int ID = (int) TokenService.getInstance().getUserDetailsFromToken(token).getUserID(); // Get trainer id from
																								// token

		// Call get duplicates with the trainer ID. Returns a list of Pokemon Objects
		ArrayList<Pokemon> duplicatesArray = (ArrayList<Pokemon>) TrainerDAOImp.getTrainerDAO().getDuplicates(ID);

		// Use duplicatesArray to retrieve each pokemons information from the cache.
		// Loop through the duplicatesArray
		for (Pokemon x : duplicatesArray) {
			// Create a pokemon object from the cached value base on the duplicate pokemon
			// id.

			Pokemon temp = CachingUtility.getCachingUtility().getPokemon(x.getId());

			// Add a pokemon to the final pokemon list
			duplicateJSONList.add(temp);
		}

		// Use object mapper to map the JSON to the response.
		response.setContentType("application/json");
		response.getWriter().append(mapper.writeValueAsString(duplicateJSONList));

	}

	/**
	 * Purpose: Used to make a call to the TrainerDAOImplementation to redeem a
	 * specific pokemon from the trainer's collection.
	 * 
	 * @param request
	 * @param response
	 * @throws ServletException
	 * @throws IOException
	 */
	public static void redeemSpecific(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		final String token = request.getHeader("Authorization"); // get JWT token
		int ID = (int) TokenService.getInstance().getUserDetailsFromToken(token).getUserID(); // Get trainer id from
																								// token
		String username = TokenService.getInstance().getUserDetailsFromToken(token).getUsername(); // get username from
																									// token
		int pokeID = Integer.parseInt(request.getParameter("pokemonId")); // Get specific pokemonid

		int[] res = TrainerDAOImp.getTrainerDAO().redeemSpecific(ID, pokeID); // Execute redeem, returns new credits and
																				// total credits

		CachingUtility.getCachingUtility().redeemSinglePokemon(username, pokeID);
		response.setContentType("application/json");
		response.getWriter().append(mapper.writeValueAsString(res));

	}

	/**
	 * Used to make a call to the TrainerDAOImplementation redeem all of the
	 * duplicate pokemon of a trainer's collection.
	 * 
	 * @param request
	 * @param response
	 * @throws ServletException
	 * @throws IOException
	 */
	public static void redeemAll(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		final String token = request.getHeader("Authorization"); // get JWT token
		int ID = (int) TokenService.getInstance().getUserDetailsFromToken(token).getUserID(); // Get trainer id from
																								// token
		String username = TokenService.getInstance().getUserDetailsFromToken(token).getUsername(); // get username from
																									// token
		int pokeID = Integer.parseInt(request.getParameter("pokemonId")); // Get specific pokemonid

		int[] res = TrainerDAOImp.getTrainerDAO().redeemAll(ID); // Execute redeem, returns new credits and total
																	// credits

		CachingUtility.getCachingUtility().redeemAllPokemon(username);
		response.setContentType("application/json");
		response.getWriter().append(mapper.writeValueAsString(res));

	}
}
