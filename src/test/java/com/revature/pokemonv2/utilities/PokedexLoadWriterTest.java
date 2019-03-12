package com.revature.pokemonv2.utilities;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class PokedexLoadWriterTest {
	PokedexLoadWriter test = new PokedexLoadWriter();
	
	@Test
	public void testLoadEmptyKey() throws Exception {
		PokedexLoadWriter.isTesting = true;
		
		//test.load(null)
		System.out.println( test.load(null).size());
		assertEquals(test.load(null).size(), 151 );
	}
	
	@Test
	public void testLoadValidKey() throws Exception {
		PokedexLoadWriter.isTesting = true;
		
		assertEquals(test.load("test").size(), 3);
	}
}
 
