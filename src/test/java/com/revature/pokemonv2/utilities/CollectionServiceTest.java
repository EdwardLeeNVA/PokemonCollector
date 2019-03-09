package com.revature.pokemonv2.utilities;

import static org.junit.Assert.assertEquals;

import java.util.ArrayList;
import java.util.List;

import com.revature.pokemonv2.model.Pokemon;
import com.revature.pokemonv2.service.CollectionServiceImpl;

	public class CollectionServiceTest {
		
		CollectionServiceImpl test = new CollectionServiceImpl();
		
		
		public void testGetAllPokemon() {
			String username = "doesntexist";
			
			assertEquals(test.getAllPokemon(username), new ArrayList<Pokemon>());
		}
	}
