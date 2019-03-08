package com.revature.pokemonv2.service;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.revature.pokemonv2.dao.TrainerDAOImplementation;

public class RedeemService {

	private static final ObjectMapper mapper = new ObjectMapper();
		public static void getDuplicates(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
			//Read JSON from Http request.
			JsonNode redeemJSON = mapper.readTree(request.getReader());
			//Call get_duplicate method from TrainerDAOImplementation to retrieve trainer duplicates with ID.
			TrainerDAOImplementation.getDAO().get_duplicates(redeemJSON.get("trainerID").asInt());
			
			
		
		}
}
