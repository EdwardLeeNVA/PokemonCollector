 package com.revature.pokemonv2.dispatcher;

import java.io.IOException;
import java.util.List;
import java.util.Random;

import javax.servlet.ServletException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.apache.log4j.Logger;

import com.revature.pokemonv2.service.PlayerService;
import com.revature.pokemonv2.service.TokenService;
import com.revature.pokemonv2.utilities.CachingUtility;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.revature.pokemonv2.model.Pokemon;
import com.revature.pokemonv2.service.CollectionService;
import com.revature.pokemonv2.service.CollectionServiceImpl;

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
		boolean isUnfiltered = uriStrings[uriStrings.length - 2].equals("unfiltered");
		String uri = uriStrings[uriStrings.length - 1];

		switch (uri) {
		case "register":
			if (isUnfiltered)
				PlayerService.getPlayerService().registerPlayer(request, response);
			break;
		case "collection":
			if (!isUnfiltered) {
				String username = TokenService.getInstance().getUserDetailsFromToken(
						request.getHeader("Authorization")).getUsername();
				mapper.writeValue(response.getOutputStream(), collectionService.getAllPokemon(username));
			}
			break;
		case "purchase":
			PlayerService.getPlayerService().purchasePokemon(request, response);
			break;
		case "allpokemon":
			mapper.writeValue(response.getOutputStream(), collectionService.getCompleteSet());
			break;
		// Logins the user and generates an authentication token if successful
		case "login":
			if (isUnfiltered)
				PlayerService.getPlayerService().login(request, response);
			break;
		case "generatePokemon":
			//enter the jwt token which needs to be decrypted
			String username1 = TokenService.getInstance().getUserDetailsFromToken(
					request.getHeader("Authorization")).getUsername();;
			int trainerId = TokenService.getInstance().getUserDetailsFromToken(
					request.getHeader("Authorization")).getUserID();
			//generate a random pokemon and add it to the user's collection
			int pokemonId = new Random().nextInt(150)+1;
			CachingUtility.getCachingUtility().addToCache(username1, pokemonId);
			
			mapper.writeValue(response.getOutputStream(),PlayerService.generatePokemon(trainerId, pokemonId));
			mapper.writeValue(response.getOutputStream(),CachingUtility.getCachingUtility().getPokemonFromCache(pokemonId));
			break;
		default:
			System.out.println("URI not recognized");
		}
	}
}
