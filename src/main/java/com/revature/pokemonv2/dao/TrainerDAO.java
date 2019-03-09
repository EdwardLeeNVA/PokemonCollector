package com.revature.pokemonv2.dao;


import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.revature.pokemonv2.model.Pokemon;


public interface TrainerDAO {

	public String loginAuthentication(HttpServletRequest request, HttpServletResponse response);

	public boolean createTrainer(String username, String password, String email, String f_name, String l_name,
			int credit, int score);

	public ArrayList<Pokemon> get_duplicates( int trainer_id);
	public int[] redeemSpecific(int trainer_id, int poke_id);
	public int[] redeemAll(int trainer_id);
}
