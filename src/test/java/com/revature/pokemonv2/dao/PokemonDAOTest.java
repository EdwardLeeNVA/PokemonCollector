/**
 * 
 */
package com.revature.pokemonv2.dao;

import static org.junit.Assert.*;

import java.util.List;

import org.junit.BeforeClass;
import org.junit.Test;

import com.revature.pokemonv2.model.Pokemon;

/**
 * @author christopherraleigh
 *
 */
public class PokemonDAOTest {
	
	private static PokemonDAO instance;

	/**
	 * @throws java.lang.Exception
	 */
	@BeforeClass
	public static void setUpBeforeClass() throws Exception {
		instance = new PokemonDAO();
	}

	/**
	 * Test method for {@link com.revature.pokemonv2.dao.PokemonDAO#getTrainerPokedex(java.lang.String, boolean)}.
	 */
	@Test
	public void testGetTrainerPokedex() {
		List<Pokemon> pokedex = instance.getTrainerPokedex(TrainerDAOImpTest.USERNAME, true);
		assertNotNull(pokedex);
	}

	/**
	 * Test method for {@link com.revature.pokemonv2.dao.PokemonDAO#generatePokemon(int, int, java.lang.String, boolean)}.
	 */
	@Test
	public void testGeneratePokemon() {
		Pokemon pokemon = PokemonDAO.generatePokemon(0, 1, TrainerDAOImpTest.USERNAME, true);
		assertNotNull(pokemon);
	}

}
