package com.revature.pokemonv2.utilities;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import com.revature.pokemonv2.model.Pokemon;
import org.apache.log4j.Logger;
import org.ehcache.spi.loaderwriter.CacheLoaderWriter;

import com.revature.pokemonv2.dao.PokemonDAO;

public class PokedexLoadWriter implements CacheLoaderWriter {
	
	private static PokemonDAO dao = new PokemonDAO();
	final static Logger logger = Logger.getLogger(PokedexLoadWriter.class);
	public static boolean isTesting;

	@Override
	public ArrayList<Pokemon> load(Object key) throws Exception {
		ArrayList<Pokemon> returnPokeDex = new ArrayList<>();
		List<Pokemon> pokeDex = dao.getTrainerPokedex((String)key, isTesting);
		for (Pokemon p : pokeDex) {
			Pokemon poke = CachingUtility.getCachingUtility().getPokemonCache(p.getId());
			poke.setCount(p.getCount());
			returnPokeDex.add(poke);
		}
		Collections.sort(returnPokeDex, PokedexSorter.getInstance());
		logger.trace("Finished loading pokedex");
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
