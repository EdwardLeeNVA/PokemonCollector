package com.revature.pokemonv2.utilities;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import me.sargunvohra.lib.pokekotlin.client.PokeApi;
import me.sargunvohra.lib.pokekotlin.client.PokeApiClient;
import me.sargunvohra.lib.pokekotlin.model.Pokemon;
import org.apache.log4j.Logger;
import org.ehcache.spi.loaderwriter.CacheLoaderWriter;

import com.revature.pokemonv2.dao.*;
import com.revature.pokemonv2.dao.DAO;

public class PokedexLoadWriter implements CacheLoaderWriter {
	

	private static DAO dao = DAOImpl.getInstance();

	private static final CachingUtility cachingUtility = CachingUtility.getCachingUtility();
	private final int MAX_POKEDEX_SIZE = 151;
	 final static Logger logger = Logger.getLogger(PokedexLoadWriter.class);
	

	@Override
	public ArrayList<com.revature.pokemonv2.model.Pokemon> load(Object key) throws Exception {
		ArrayList<com.revature.pokemonv2.model.Pokemon> returnPokeDex = new ArrayList<>();
		List<com.revature.pokemonv2.model.Pokemon> pokeDex = dao.getTrainerPokedex((String)key);
			
		for (com.revature.pokemonv2.model.Pokemon p : pokeDex) {
			com.revature.pokemonv2.model.Pokemon poke = cachingUtility.getPokemon(p.getId());
			poke.setCount(p.getCount());
			returnPokeDex.add(poke);
		}
			// Adds dummy pokemon to counter Cache hits
			/*returnPokeDex.add(new Pokemon(0, 1));*/
		return returnPokeDex;
	}

	@Override
	public void write(Object key, Object value) throws Exception {
		// TODO
	}

	@Override
	public void delete(Object key) throws Exception {
		// TODO
	}
}
