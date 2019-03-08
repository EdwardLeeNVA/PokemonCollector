package com.revature.pokemonv2.dao;

public interface TrainerDAO {
	
	public boolean create_trainer(String username, String password,String email,
			String f_name, String l_name, int credits, int score);
}