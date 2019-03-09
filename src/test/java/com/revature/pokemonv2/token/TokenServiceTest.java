package com.revature.pokemonv2.token;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

import org.junit.Before;
import org.junit.Test;

import com.revature.pokemonv2.model.Trainer;
import com.revature.pokemonv2.service.TokenService;

public class TokenServiceTest {

	private final TokenService tokenService = TokenService.getInstance();
	private final Trainer trainer = new Trainer();
	
	@Before
	public void setUpTrainer() {
		trainer.setUsername("William");
		trainer.setScore(100);
	}
	
	@Test
	public void jwtShouldBeProduced_AndProperlyParsed() {
		final String token = "Bearer " + tokenService.generateToken(trainer);
		assertNotNull(trainer);
		System.out.println(token);
		
		assertEquals("William", tokenService.getUserDetailsFromToken(token).getUsername());
		assertEquals(100, tokenService.getUserDetailsFromToken(token).getScore());
	}
	
}
