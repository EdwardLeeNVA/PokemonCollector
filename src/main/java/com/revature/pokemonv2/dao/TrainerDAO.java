package com.revature.pokemonv2.dao;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.revature.pokemonv2.model.Pokemon;
import com.revature.pokemonv2.model.Trainer;

public interface TrainerDAO {

	public boolean createTrainer(String username, String password, String email, String f_name, String l_name,
			int credit, int score);

	/**
	 * Method for fetching all duplicate pokemon of a specfiic trainer. Takes an int
	 * @return an ArrayList of pokemon objects
	 */
	public List<Pokemon> getDuplicates(int trainerId);

	/**
	 * Creates a new trainer and assigns the username and password to the object
	 */
	public String loginAuthentication(HttpServletRequest request, HttpServletResponse response);

	/**
	 * Removes the credits from a trainers wallet.
	 * 
	 * Because of the cache, this will just try to remove the credits from the
	 * account, and not remove the Pokemon.
	 */
	public boolean purchasePokemon(String username, int cost);
	
	/**
	 * Redeem all Pokemon for a specific trainer.
	 * @param trainer_id ID of the current trainer.
	 */
	public int[] redeemAll(int trainer_id);
	
	/**
	 * Redeems a specific Pokemon from a trainer's collection.
	 * 
	 * @param trainerId ID of the current trainer.
	 * @param pokeId ID of the Pokemon being redeemed.
	 * @return the amount of credits of credits given (index 0) and total credits (index 1).
	 */
	public int[] redeemSpecific(int trainerId, int pokeId);

	/**
	 * Verifies via SQL whether the user login is correct
	 */
	public Trainer verifyLogin(String username, String password);
}
