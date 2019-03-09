package com.revature.pokemonv2.service;

import java.util.ArrayList;
import java.util.List;
import org.apache.log4j.Logger;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.revature.pokemonv2.model.Pokemon;
import com.revature.pokemonv2.utilities.CachingUtility;

public class CollectionServiceImpl implements CollectionService {
	
	public static CachingUtility cachingUtility = CachingUtility.getCachingUtility();
	final static Logger logger = Logger.getLogger(CollectionServiceImpl.class);
	private final ObjectMapper mapper = new ObjectMapper();
	
	
		public List<Pokemon> getAllPokemon(String username) {
			return (ArrayList<Pokemon>) cachingUtility.checkCache(username);
		
		}
		
		
		
		
		
		/*
		 * public boolean removeCollection(Trainer t) {
			return cachingUtility.removeCollection(t);
		 */
		
			
		
	}


