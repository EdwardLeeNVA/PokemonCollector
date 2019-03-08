package com.revature.pokemonv2.dao;

import com.revature.pokemonv2.model.Trainer;

public interface TrainerDAO {
	
	public boolean create_trainer(String username, String password,String email,
			String f_name, String l_name, int credit, int score);
	public Trainer read_trainer(String username, String password);
}