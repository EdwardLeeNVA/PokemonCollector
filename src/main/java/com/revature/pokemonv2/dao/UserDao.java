package com.revature.pokemonv2.dao;

public interface UserDao {
	
	public boolean create_trainer(String username, String password,String email,
			String f_name, String l_name, int credits, int score);
}
