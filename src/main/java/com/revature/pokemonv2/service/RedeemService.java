package com.revature.pokemonv2.service;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.revature.pokemonv2.dao.TrainerDAOImp;
import com.revature.pokemonv2.model.Pokemon;
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
		
		
		//Retrieve the JWTToken
		final String JWTToken = request.getHeader("Authorization");
		//Obtain the username from the JWTToken
		String userName = TokenService.getInstance().getUserDetailsFromToken(JWTToken).getUsername();
		//Using the username obtain the users entire collection.
		ArrayList<Pokemon> fullCollection = CachingUtility.getCachingUtility().checkCache(userName);
		//Iterate through the fullCollection
		//Each Pokemon with a count > 1 add to the duplicates list.
		ArrayList<Pokemon> duplicateCollection = new ArrayList();
		for(Pokemon x : fullCollection) {
			if(x.getCount() > 1) {
				duplicateCollection.add(x);
			}
		}
		// Use object mapper to map the JSON to the response.
				response.setContentType("application/json");
				response.getWriter().append(mapper.writeValueAsString(duplicateCollection));
		
		//Old way



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
		//If you pass an object as a parameter, use objectNode to get the attribute from the parameter
		final ObjectNode node = new ObjectMapper().readValue(request.getReader(),ObjectNode.class);
		//POKEID is the parameter of the object that was passed ( {POKEID: <number>} )
		//This method gets the value of the parameter POKEID
		int pokeID = node.get("POKEID").asInt();

		int[] res = TrainerDAOImp.getTrainerDAO().redeemSpecific(ID, pokeID, false); // Execute redeem, returns new credits and
			System.out.println(res);	                   										// total credits

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
	public static void redeemAll(HttpServletRequest request, HttpServletResponse resp)
			throws ServletException, IOException {
		final String token = request.getHeader("Authorization"); // get JWT token
		int ID = (int) TokenService.getInstance().getUserDetailsFromToken(token).getUserID(); // Get trainer id from
																								// token
		String username = TokenService.getInstance().getUserDetailsFromToken(token).getUsername(); // get username from
																									// token

		int[] creditArr = TrainerDAOImp.getTrainerDAO().redeemAll(ID, false); // Execute redeem, returns new credits and total
		System.out.println(creditArr);

		CachingUtility.getCachingUtility().redeemAllPokemon(username);
		resp.setContentType("application/json");
		resp.getWriter().append(mapper.writeValueAsString(creditArr));

	}
}
