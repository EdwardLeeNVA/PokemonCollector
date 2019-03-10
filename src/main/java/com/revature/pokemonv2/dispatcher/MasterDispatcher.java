 package com.revature.pokemonv2.dispatcher;

import java.io.IOException;
import java.util.List;
import java.util.Random;

import javax.servlet.ServletException;

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
			if(!isUnfiltered) {
				PlayerService.getPlayerService().purchasePokemon(request, response);
			}
			break;
		case "allpokemon":
			mapper.writeValue(response.getOutputStream(), collectionService.getCompleteSet());
			break;
		// Logins the user and generates an authentication token if successful
		case "login":
			if (isUnfiltered)
				mapper.writeValue(response.getOutputStream(), PlayerService.getPlayerService().login(request, response));
			break;
		case "generatePokemon":		
			//write the generated pokemon to the response
			mapper.writeValue(response.getOutputStream(),PlayerService.generatePokemon(request, response));
			break;
		default:
			System.out.println("URI not recognized");
		}
	}
}
