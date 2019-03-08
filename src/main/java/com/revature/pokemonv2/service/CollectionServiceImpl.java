package com.revature.pokemonv2.service;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.revature.pokemonv2.model.Pokemon;
import com.revature.pokemonv2.model.Trainer;
import com.revature.pokemonv2.utilities.CachingUtility;

public class CollectionServiceImpl implements CollectionService {
	
	public static CachingUtility cachingUtility = CachingUtility.getCachingUtility();
	final static Logger logger = Logger.getLogger(CollectionServiceImpl.class);
	private final ObjectMapper mapper = new ObjectMapper();
	
	
		public List<Pokemon> getAllPokemon(Trainer t) {
			List<Pokemon> allPokemon = (ArrayList<Pokemon>) cachingUtility.checkCache(t);
			
			logger.error(allPokemon);
			if(allPokemon != null) {
				return allPokemon;
			}else
				/*
				 * need to call the database
				 */
				return null;
		}
		
		
		
		
		
		/*
		 * public boolean removeCollection(Trainer t) {
			return cachingUtility.removeCollection(t);
		 */
		
			
		
	}


