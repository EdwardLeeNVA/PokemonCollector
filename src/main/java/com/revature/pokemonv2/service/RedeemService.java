package com.revature.pokemonv2.service;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.revature.pokemonv2.dao.TrainerDAOImp;
import com.revature.pokemonv2.model.Trainer;


/**
 * @author Timothy Jordan
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
			
			// get trainer_id from request
			
		}
		
		/**
		 * Used to make a call to the TrainerDAOImplementation redeem all of the duplicate pokemon of a trainer's collection.
		 * @param request
		 * @param response
		 * @throws ServletException
		 * @throws IOException
		 */
		public static void redeemAll(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
			
		}
}
