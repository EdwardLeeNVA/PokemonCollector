package com.revature.pokemonv2.dao;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.revature.pokemonv2.model.Trainer;

public interface TrainerDAO {
	
	public Trainer loginAuthentication(HttpServletRequest request, HttpServletResponse response);
	
	public boolean create_trainer(String username, String password,String email,
			String f_name, String l_name, int credit, int score);
	public boolean purchasePokemon(String username, int cost);
}