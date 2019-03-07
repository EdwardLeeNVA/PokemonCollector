package com.revature.pokemonv2.dispatcher;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;

import com.revature.pokemonv2.service.PlayerService;

public class MasterDispatcher {
	private MasterDispatcher() { }
	private static final Logger log = Logger.getLogger(MasterDispatcher.class);
	
	public static void process(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		String[] uriStrings = request.getRequestURI().split("/");
		String uri = uriStrings[uriStrings.length - 1];
		
		switch(uri) {
		case "register":
			PlayerService.RegisterPlayer(request, response);
			break;
		default:
			log.error("URI not recognized");
		}
	}

}
