package com.revature.pokemonv2.utilities;

import java.util.ArrayList;
import java.util.List;

import org.apache.log4j.Logger;
import org.ehcache.spi.loaderwriter.CacheLoaderWriter;

import com.revature.pokemonv2.dao.DAO;
import com.revature.pokemonv2.model.Pokemon;

public class PokedexLoadWriter implements CacheLoaderWriter {
	
	private static DAO dao = new DAO();
	private static final CachingUtility cachingUtility = CachingUtility.getCachingUtility();
	private final int MAX_POKEDEX_SIZE = 151;
	 final static Logger logger = Logger.getLogger(PokedexLoadWriter.class);
	

	@Override
	public ArrayList<Pokemon> load(Object key) throws Exception {
		ArrayList<Pokemon> returnPokeDex = new ArrayList<>();
		if(key == "red") {
			for (int i = 1; i <= MAX_POKEDEX_SIZE; i++ ) {
				returnPokeDex.add(cachingUtility.getPokemonFromCache(i));
			}
			return returnPokeDex;
		}else {
			List<Pokemon> pokeDex = dao.getTrainerPokedex((String)key);
			
			for (Pokemon p : pokeDex) {
				Pokemon poke = cachingUtility.getPokemonFromCache(p.getId());
				poke.setCount(p.getCount());
				returnPokeDex.add(poke);
			}
			// Adds dummy pokemon to counter Cache hits
			/*returnPokeDex.add(new Pokemon(0, 1));*/
			return returnPokeDex;
		}
		
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
