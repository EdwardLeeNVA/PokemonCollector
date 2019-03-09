package com.revature.pokemonv2.service;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.revature.pokemonv2.dao.TrainerDAOImp;
import com.revature.pokemonv2.model.Trainer;
import com.revature.pokemonv2.utilities.CachingUtility;


/**
 * @author Timothy Jordan, Anup Saha
 *
 */
public class RedeemService {
	//Create and instance of the ObjectMapper.
	private static final ObjectMapper mapper = new ObjectMapper();
	
		/**
		 * Purpose: Get all duplicates for a specific trainer.
		 * @param request
		 * @param response
		 * @throws ServletException
		 * @throws IOException
		 */
		public static void getDuplicates(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
			
			
			
			//Read JSON from Http request.
			JsonNode redeemJSON = mapper.readTree(request.getReader());
			//Call get_duplicate method from TrainerDAOImplementation to retrieve trainer duplicates with ID.
			TrainerDAOImp.getTrainerDAO().get_duplicates(redeemJSON.get("trainerID").asInt());
			
			
		
		}
		
		/**
		 * Purpose: Used to make a call to the TrainerDAOImplementation to redeem a specific pokemon from the trainer's collection.
		 * @param request
		 * @param response
		 * @throws ServletException
		 * @throws IOException
		 */
		public static void redeemSpecific(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
			final String token = request.getHeader("Authorization"); //get JWT token
			int ID = (int) TokenService.getInstance().getUserDetailsFromToken(token).getUserID(); //Get trainer id from token
			String username = TokenService.getInstance().getUserDetailsFromToken(token).getUsername(); //get username from token
			int pokeID = Integer.parseInt(request.getParameter("pokemonId")); //Get specific pokemonid
			
			int[] res = TrainerDAOImp.getTrainerDAO().redeemSpecific(ID, pokeID); //Execute redeem, returns new credits and total credits
			
			CachingUtility.getCachingUtility().redeemSinglePokemon(username, pokeID);
			response.setContentType("application/json");
			response.getWriter().append(mapper.writeValueAsString(res));
			
			
			
		}
		
		/**
		 * Used to make a call to the TrainerDAOImplementation redeem all of the duplicate pokemon of a trainer's collection.
		 * @param request
		 * @param response
		 * @throws ServletException
		 * @throws IOException
		 */
		public static void redeemAll(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
			final String token = request.getHeader("Authorization"); //get JWT token
			int ID = (int) TokenService.getInstance().getUserDetailsFromToken(token).getUserID(); //Get trainer id from token
			String username = TokenService.getInstance().getUserDetailsFromToken(token).getUsername(); //get username from token
			int pokeID = Integer.parseInt(request.getParameter("pokemonId")); //Get specific pokemonid
			
			int[] res = TrainerDAOImp.getTrainerDAO().redeemAll(ID); //Execute redeem, returns new credits and total credits
			
			CachingUtility.getCachingUtility().redeemAllPokemon(username);
			response.setContentType("application/json");
			response.getWriter().append(mapper.writeValueAsString(res));
			
		}
}
