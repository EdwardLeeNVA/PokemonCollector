 package com.revature.pokemonv2.dispatcher;

import java.io.IOException;
import java.util.Random;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.revature.pokemonv2.service.CollectionService;
import com.revature.pokemonv2.service.CollectionServiceImpl;
import com.revature.pokemonv2.service.PlayerService;
import com.revature.pokemonv2.service.RedeemService;
import com.revature.pokemonv2.service.TokenService;

/**
 * The master dispatcher class relays HTTP requests to different end points.
 */
public class MasterDispatcher {
	private MasterDispatcher() {
	}

	private static final Logger log = Logger.getLogger(MasterDispatcher.class);
	private static final CollectionService collectionService = new CollectionServiceImpl();
	private static final ObjectMapper mapper = new ObjectMapper();

	/*
	 * Relays the HTTP request to the correct endpoint.
	 */
	public static void process(HttpServletRequest request, HttpServletResponse response)
			throws IOException, ServletException {
		String[] uriStrings = request.getRequestURI().split("/");
		String uri = uriStrings[uriStrings.length - 1];

		switch (uri) {
		// Logins the user and generates an authentication token if successful
		case "login":
				PlayerService.getPlayerService().login(request, response);
			break;
		case "register":
				PlayerService.getPlayerService().registerPlayer(request, response);
			break;
		case "collection":
			String username = TokenService.getInstance().getUserDetailsFromToken(
					request.getHeader("Authorization")).getUsername();
			mapper.writeValue(response.getOutputStream(), collectionService.getAllPokemon(username));
			break;
		case "purchase":
				PlayerService.getPlayerService().purchasePokemon(request, response);
			
			break;
		case "allpokemon":
				mapper.writeValue(response.getOutputStream(), collectionService.getCompleteSet());
			break;
		case "duplicate":
			//Endpoint for duplicate call. Retrieves all duplicate pokemon for a specific user.
			RedeemService.getDuplicates(request, response);
			break;
		case "redeem":
			//Endpoint for redeem call. Redeems a specific pokemon
			
			RedeemService.redeemSpecific(request, response);
			break;
		case "redeemAll":
			//Endpoint for redeem all call. Redeems all pokemon.
			
			RedeemService.redeemAll(request, response);
		case "generatePokemon":
			mapper.writeValue(response.getOutputStream(),PlayerService.generatePokemon(request, response));

			break;
		case "updateTrainer":
			PlayerService.getPlayerService().updateTrainer(request, response);
			break;
		default:
			System.out.println("URI not recognized");
		}
	}
}
