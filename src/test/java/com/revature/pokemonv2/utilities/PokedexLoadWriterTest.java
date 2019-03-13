package com.revature.pokemonv2.utilities;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class PokedexLoadWriterTest {
	PokedexLoadWriter test = new PokedexLoadWriter();
	
	@Test
	public void testLoadAllPoke() throws Exception {
		PokedexLoadWriter.isTesting = true;
		
		assertEquals(test.load("red").size(), 151 );
	}
	
	@Test
	public void testLoadNoPoke() throws Exception {
		PokedexLoadWriter.isTesting = true;
		
		assertEquals(test.load("blue").size(), 0 );
	}
	

}
 
