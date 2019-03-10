package com.revature.pokemonv2.utilities;

import com.revature.pokemonv2.dao.DAO;
import com.revature.pokemonv2.dao.DAOImpl;

public class Driver {
	public static void main(String[] args) {

		
	}
	public static void tomcatDebug() {
		DAO myDao = DAOImpl.getInstance(); 
		
		System.out.println("got this far");
		
		System.out.println(myDao.getPokemonCountByTrainer());
		System.out.println(myDao.getLeaderboard(10));
		
		
		System.out.println("and got here without errorsssss");
		
	}
}
