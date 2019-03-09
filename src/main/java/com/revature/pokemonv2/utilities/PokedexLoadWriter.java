package com.revature.pokemonv2.utilities;

import java.util.ArrayList;
import java.util.List;

import org.ehcache.spi.loaderwriter.CacheLoaderWriter;

import com.revature.pokemonv2.dao.*;
import com.revature.pokemonv2.model.Pokemon;

public class PokedexLoadWriter implements CacheLoaderWriter {
	
	private static DAO dao = DAOImpl.getInstance();
	private static final CachingUtility cachingUtility = CachingUtility.getCachingUtility();
	private final int MAX_POKEDEX_SIZE = 151;
	

	@Override
	public ArrayList<Pokemon> load(Object key) throws Exception {
		ArrayList<Pokemon> returnPokeDex = new ArrayList<>();
		if(key == null) {
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
