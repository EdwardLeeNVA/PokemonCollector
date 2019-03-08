package com.revature.pokemonv2.dispatcher;

import java.io.IOException;



import javax.servlet.ServletException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;

import com.revature.pokemonv2.service.PlayerService;

import com.revature.pokemonv2.service.RedeemService;

import com.revature.pokemonv2.service.CollectionService;
import com.revature.pokemonv2.service.CollectionServiceImpl;

public class MasterDispatcher {
	private MasterDispatcher() {
	}

	private static final Logger log = Logger.getLogger(MasterDispatcher.class);
	private static final CollectionService collectionService = new CollectionServiceImpl();

	public static void process(HttpServletRequest request, HttpServletResponse response)
			throws IOException {
		String[] uriStrings = request.getRequestURI().split("/");
		String uri = uriStrings[uriStrings.length - 1];

		switch (uri) {
		case "register":
			PlayerService.getPlayerService().registerPlayer(request, response);
			break;
		case "collection":
			break;
		// Logins the user and generates an authentication token if successful
		case "login":
			PlayerService.getPlayerService().login(request, response);
			break;
		case "duplicate":
			//Endpoint for duplicate call. Retrieves all duplicate pokemon for a specific user.
			RedeemService.getDuplicates(request, response);
			break;
		case "redeem":
			//Endpoint for redeem call. Redeems a specific pokemon
			//POST: Takes trainerID and PokemonID
			RedeemService.redeemSpecific(request, response);
			break;
		case "redeemAll":
			//Endpoint for redeem all call. Redeems all pokemon.
			//POST Takes trainerID.
			RedeemService.redeemAll(request, response);
			break;
		default:
			System.out.println("URI not recognized");
		}
	}
}
