package com.revature.pokemonv2.utilities;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import org.ehcache.spi.loaderwriter.CacheLoaderWriter;

import me.sargunvohra.lib.pokekotlin.client.PokeApi;
import me.sargunvohra.lib.pokekotlin.client.PokeApiClient;
import me.sargunvohra.lib.pokekotlin.model.Pokemon;



public class AllPokemonLoadWriter implements CacheLoaderWriter {
	
	
	

	@Override
	public com.revature.pokemonv2.model.Pokemon load(Object i) throws Exception {

		PokeApi poke = new PokeApiClient();
		Pokemon p = poke.getPokemon((Integer)i);
		
		ArrayList<String> temp = new ArrayList<>();
		int z = 0;
		while (z < p.getTypes().size()) {
			temp.add(p.getTypes().get(z).getType().getName());
		}
		
		Map<String, Integer> statTemp = new HashMap<>();
		int statCount = 0;
		while (statCount < p.getStats().size()) {
			statTemp.put(p.getStats().get(statCount).getStat().getName(), p.getStats().get(statCount).getStat().component3());
		}
		
		
		return new com.revature.pokemonv2.model.Pokemon(p.getId(), p.getName(), p.getSprites().getFrontDefault(),(String[])temp.toArray(), statTemp);
		
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