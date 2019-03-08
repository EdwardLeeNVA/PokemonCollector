package com.revature.pokemonv2.service;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.revature.pokemonv2.dao.DAO;

public class PlayerService {
	private PlayerService() { }
	
	public static void RegisterPlayer(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		
	}
	
	//temporary until merged with project with pokemon service
	public static void generatePokemon(int trainerId)
			throws ServletException, IOException {
		
			DAO.generatePokemon(trainerId);
	}
	
}
