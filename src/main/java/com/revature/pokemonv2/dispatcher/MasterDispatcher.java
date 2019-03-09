 package com.revature.pokemonv2.dispatcher;

import java.io.IOException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.apache.log4j.Logger;

import com.revature.pokemonv2.service.PlayerService;
import com.revature.pokemonv2.service.TokenService;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.revature.pokemonv2.service.CollectionService;
import com.revature.pokemonv2.service.CollectionServiceImpl;

public class MasterDispatcher {
	private MasterDispatcher() {
	}

	private static final Logger log = Logger.getLogger(MasterDispatcher.class);
	private static final CollectionService collectionService = new CollectionServiceImpl();
	private static final ObjectMapper mapper = new ObjectMapper();

	public static void process(HttpServletRequest request, HttpServletResponse response)
			throws IOException {
		String[] uriStrings = request.getRequestURI().split("/");
		String uri = uriStrings[uriStrings.length - 1];

		switch (uri) {
		case "register":
			PlayerService.getPlayerService().registerPlayer(request, response);
			break;
		case "collection":
			String username = TokenService.getInstance().getUserDetailsFromToken(
					request.getHeader("Authorization")).getUsername();
			mapper.writeValue(response.getOutputStream(), collectionService.getAllPokemon(username));
			break;
		// Logins the user and generates an authentication token if successful
		case "login":
			PlayerService.getPlayerService().login(request, response);
			break;
		default:
			System.out.println("URI not recognized");
		}
	}
}
