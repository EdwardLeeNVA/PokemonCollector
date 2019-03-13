/**
 * 
 */
package com.revature.pokemonv2.dao;

import static org.junit.Assert.*;import java.util.List;

import org.apache.log4j.Logger;
import org.junit.BeforeClass;
import org.junit.Test;

import com.revature.pokemonv2.model.Pokemon;
import com.revature.pokemonv2.model.Trainer;

/**
 * @author Christopher Raleigh
 *
 */
public class TrainerDAOImpTest {
	
	private static final Logger LOGGER = Logger.getLogger(TrainerDAOImpTest.class);
	private static final String USERNAME = "PkmnTrnrBlue";
	private static final String PASSWORD = "MyOriginalNameIsGreen";
	private static final String EMAIL = "goak@example.com";
	private static final String FIRST_NAME = "Gary";
	private static final String LAST_NAME = "Oak";
	private static final int COST = 1;
	
	private static TrainerDAOImp instance;

	/**
	 * @throws java.lang.Exception
	 */
	@BeforeClass
	public static void setUpBeforeClass() throws Exception {
		instance = TrainerDAOImp.getTrainerDAO();
	}

	/**
	 * Test method for {@link com.revature.pokemonv2.dao.TrainerDAOImp#createTrainer(java.lang.String, java.lang.String, java.lang.String, java.lang.String, java.lang.String, int, int, boolean)}.
	 */
	@Test
	public void testCreateTrainer() {
		boolean successful = instance.createTrainer(USERNAME, PASSWORD, EMAIL, FIRST_NAME, LAST_NAME, 0, 0, true);
		assertTrue(successful);
	}
	
	/**
	 * Test method for {@link com.revature.pokemonv2.dao.TrainerDAOImp#verifyLogin(java.lang.String, java.lang.String, boolean)}.
	 */
	@Test
	public void testVerifyLogin() {
		Trainer result = instance.verifyLogin(USERNAME, PASSWORD, true);
		assertNotNull(result);
	}
	
	/**
	 * Test method for {@link com.revature.pokemonv2.dao.TrainerDAOImp#purchasePokemon(java.lang.String, int, boolean)}.
	 */
	@Test
	public void testPurchasePokemon() {
		boolean successful = instance.purchasePokemon(USERNAME, COST, true);
		assertFalse(successful);
	}
	
	/**
	 * Test method for {@link com.revature.pokemonv2.dao.TrainerDAOImp#redeemSpecific(int, int, java.lang.String, boolean)}.
	 */
	@Test
	public void testRedeemSpecific() {
		int redemption = instance.redeemSpecific(-1, 1, USERNAME, true);
		assertTrue(redemption < 1);
	}
	
	/**
	 * Test method for {@link com.revature.pokemonv2.dao.TrainerDAOImp#redeemAll(int, java.lang.String, boolean)}.
	 */
	@Test
	public void testRedeemAll() {
		int redemption = instance.redeemAll(-1, USERNAME, true);
		assertTrue(redemption < 1);
	}

	/**
	 * Test method for {@link com.revature.pokemonv2.dao.TrainerDAOImp#getDuplicates(int, boolean)}.
	 */
	@Test
	public void testGetDuplicates() {
		List<Pokemon> duplicates = instance.getDuplicates(-1, true);
		assertNull(duplicates);
	}

	/**
	 * Test method for {@link com.revature.pokemonv2.dao.TrainerDAOImp#loginAuthentication(javax.servlet.http.HttpServletRequest, javax.servlet.http.HttpServletResponse)}.
	 */
	@Test
	public void testLoginAuthentication() {
		LOGGER.info("Cannot unit test, since username and password cannot be passed to the method directly, and requests and responses cannot be created here.");
	}
}
