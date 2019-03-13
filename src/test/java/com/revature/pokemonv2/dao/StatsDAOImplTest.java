/**
 * 
 */
package com.revature.pokemonv2.dao;

import static org.junit.Assert.*;

import java.util.List;

import org.junit.BeforeClass;
import org.junit.Test;

import com.revature.pokemonv2.model.Stats;
import com.revature.pokemonv2.model.Trainer;

/**
 * @author christopherraleigh
 *
 */
public class StatsDAOImplTest {
	
	private static final int TOP_N = 10;
	
	private static StatsDAOImpl instance;

	/**
	 * @throws java.lang.Exception
	 */
	@BeforeClass
	public static void setUpBeforeClass() throws Exception {
		instance = StatsDAOImpl.getInstance();
	}

	/**
	 * Test method for {@link com.revature.pokemonv2.dao.StatsDAOImpl#getPokemonCountByTrainer(boolean)}.
	 */
	@Test
	public void testGetPokemonCountByTrainer() {
		List<Stats> count = instance.getPokemonCountByTrainer(true);
		assertNotNull(count);
	}

	/**
	 * Test method for {@link com.revature.pokemonv2.dao.StatsDAOImpl#getLeaderboard(int, boolean)}.
	 */
	@Test
	public void testGetLeaderboard() {
		List<Trainer> board = instance.getLeaderboard(TOP_N, true);
		assertNotNull(board);
	}

	/**
	 * Test method for {@link com.revature.pokemonv2.dao.StatsDAOImpl#getTotalPokemonCountByTrainer(boolean)}.
	 */
	@Test
	public void testGetTotalPokemonCountByTrainer() {
		List<Stats> count = instance.getTotalPokemonCountByTrainer(true);
		assertNotNull(count);
	}

}
