package com.revature.pokemonv2.dao;

import java.util.ArrayList;

import com.revature.pokemonv2.model.Pokemon;

public interface TrainerDAO {
	
	public boolean create_trainer(String username, String password,String email,
			String f_name, String l_name, int credit, int score);
	
	public ArrayList<Pokemon> get_duplicates( int trainer_id);
}