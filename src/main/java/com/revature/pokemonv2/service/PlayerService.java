package com.revature.pokemonv2.service;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.revature.pokemonv2.dao.TrainerDAOImplementation;

public class PlayerService {
	private PlayerService() { }
	
	public static void RegisterPlayer(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		TrainerDAOImplementation.getDAO().create_trainer(
				request.getParameter("username"),
				request.getParameter("password"),
				request.getParameter("email"),
				request.getParameter("f_name"),
				request.getParameter("l_name"),
				0,
				0);
	}
}
