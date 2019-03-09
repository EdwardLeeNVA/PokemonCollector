package com.revature.pokemonv2.utilities;

import static org.junit.Assert.assertEquals;

import org.junit.Test;


	public class PokedexLoadWriterTest {
		PokedexLoadWriter test = new PokedexLoadWriter();
		/*
		 * @Test
		public void testLoadValidKey() throws Exception {
			assertEquals(test.load("test").size(), 3);
		}
		 */
		@Test
		public void testLoadEmptyKey() throws Exception {
			//test.load(null)
			System.out.println( test.load(null).size());
			assertEquals(test.load(null).size(), 151 );
		}
		
		
	}
 
