package com.revature.pokemonv2.utilities;

import com.revature.pokemonv2.dao.DAO;
import com.revature.pokemonv2.dao.DAOImpl;

public class Driver {
	public static void main(String[] args) {
		DAO myDao = DAOImpl.getInstance(); 
		
		System.out.println(myDao.getLeaderboard()); 
		System.out.println(myDao.getPokemonCountByTrainer());
		System.out.println(myDao.getPokemonPopularity());
		System.out.println(myDao.getPokmeonFrequency());
		System.out.println(myDao.getUniquePokemonCountByTrainer());
		
	}
}
