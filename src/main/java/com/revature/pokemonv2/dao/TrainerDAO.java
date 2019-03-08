package com.revature.pokemonv2.dao;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.revature.pokemonv2.model.Trainer;

public interface TrainerDAO {
	
	public Trainer loginAuthentication(HttpServletRequest request, HttpServletResponse response);
	
}