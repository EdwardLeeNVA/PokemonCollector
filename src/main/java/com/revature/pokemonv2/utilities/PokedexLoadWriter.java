package com.revature.pokemonv2.utilities;

import java.util.ArrayList;

import org.ehcache.spi.loaderwriter.CacheLoaderWriter;

import com.revature.pokemonv2.dao.DAO;
import com.revature.pokemonv2.model.Pokemon;

public class PokedexLoadWriter implements CacheLoaderWriter {
	
	public DAO dao = new DAO();
	public CachingUtility cachingUtility = CachingUtility.getCachingUtility();
	

	@Override
	public Object load(Object key) throws Exception {
		ArrayList<Pokemon> pokeDex = dao.getTrainerPokedex((String)key);
		ArrayList<Pokemon> returnPokeDex = new ArrayList<>();
		
		for (Pokemon p : pokeDex) {
			Pokemon poke = cachingUtility.getPokemonFromCache(p.getId());
			poke.setCount(p.getCount());
			returnPokeDex.add(poke);
		}
		
		return returnPokeDex;
	}

	@Override
	public void write(Object key, Object value) throws Exception {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void delete(Object key) throws Exception {
		// TODO Auto-generated method stub
		
	}

}
