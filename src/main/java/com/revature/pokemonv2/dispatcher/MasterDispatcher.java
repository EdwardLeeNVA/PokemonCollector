package com.revature.pokemonv2.dispatcher;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;

import com.revature.pokemonv2.service.CollectionService;
import com.revature.pokemonv2.service.CollectionServiceImpl;
import com.revature.pokemonv2.service.PlayerService;

public class MasterDispatcher {
	private MasterDispatcher() { }
	
	private static final Logger log = Logger.getLogger(MasterDispatcher.class);
	private static final CollectionService collectionService = new CollectionServiceImpl();
	
	public static void process(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		String[] uriStrings = request.getRequestURI().split("/");
		String uri = uriStrings[uriStrings.length - 1];
		
		switch(uri) {
		case "register":
			PlayerService.RegisterPlayer(request, response);
			break;
		case "collection":
			//collectionService.getAllPokemon();
			break;
		default:
			System.out.println("URI not recognized");
		}
	}

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
			break;
		//Logins the user and generates an auth token if successful
		case "login":
			PlayerService.getPlayerService().login(request, response);
		default:
			log.error("URI not recognized");
		}
	}

 }
