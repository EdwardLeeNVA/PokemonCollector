package com.revature.pokemonv2.dao;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public interface TrainerDAO {

	/**
	 * Authentication, creates JWT for user.
	 */
	public String loginAuthentication(HttpServletRequest request, HttpServletResponse response);

	/**
	 * Inserts a new trainer into the database.
	 */
	public boolean createTrainer(String username, String password, String email, String firstName, String lastName,
			int credit, int score);
}