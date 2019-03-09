package com.revature.pokemonv2.utilities;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.apache.log4j.Logger;
import org.ehcache.Cache;
import org.ehcache.CacheManager;
import org.ehcache.config.builders.CacheManagerBuilder;
import org.ehcache.spi.loaderwriter.CacheWritingException;
import org.ehcache.xml.XmlConfiguration;

import com.revature.pokemonv2.model.Pokemon;

public class CachingUtility {
 	
	 private final Cache<String, ArrayList> pokedexCache;
	 private final Cache<Integer, Pokemon> allPokemonCache;
	 private static CachingUtility cachingUtility = new CachingUtility();
	 final static Logger logger = Logger.getLogger(CachingUtility.class);
	 
	 
	 private CachingUtility(){
		 
		 pokedexCache = getCacheManager().getCache("pokedexCache", String.class, ArrayList.class);
		 allPokemonCache = getCacheManager().getCache("allPokemonCache", Integer.class, Pokemon.class);
	 }
	 
	 public static CachingUtility getCachingUtility() {
		 return cachingUtility;
	 }
	 
//	 public void addToCache(String username, Collection c) {
//		 this.pokedexCache.put(username, c);
//	 }
	 
	 public ArrayList checkCache(String username) {
	 	// Logic for counting cache hits
	 	/*this.pokedexCache.put(username, incrementCacheHit(this.pokedexCache.get(username)));*/
		return this.pokedexCache.get(username);
	 }
	 
	 public ArrayList addToCache(String username, int id) {
		 ArrayList<Pokemon> pokeList = (ArrayList<Pokemon>) this.pokedexCache.get(username);
		 for(int i = 0; i<pokeList.size(); i++) {
			 if(pokeList.get(i).getId()==id) {
				 pokeList.get(i).setCount(pokeList.get(i).getCount()+1);
				 this.pokedexCache.remove(username);
				 this.pokedexCache.put(username, pokeList);
				 return this.pokedexCache.get(username);
			 }
		 }
		 Pokemon pokemon= this.getPokemonFromCache(id);
		 pokemon.setCount(1);
		 pokeList.add(pokemon);
		 this.pokedexCache.remove(username);
		 this.pokedexCache.put(username, pokeList);
		 return this.pokedexCache.get(username);
	 }
	 
	 public Pokemon getPokemonFromCache(Integer i) {
		 return this.allPokemonCache.get(i);
	 }
	
	 public boolean removeCollection(String username) {
		 try {
			 pokedexCache.remove(username);
			 return true;
		 }catch(NullPointerException e) {
			 logger.error("NullPointerException for removeCollection");
			 e.printStackTrace();
			 return false;
		 }catch(CacheWritingException c) {
			 logger.error("cache writing exception for removeCollection");
			 c.printStackTrace();
			 return false;
		 }
	 }
	 
	 public ArrayList getAllPokemon() {
		 return pokedexCache.get(null);
	 }
	 
	
 	CacheManager getCacheManager() {
 		XmlConfiguration ehcache = new XmlConfiguration(getClass().getResource("/ehcache.xml"));
 		CacheManager cacheManager = CacheManagerBuilder.newCacheManager(ehcache);
 		cacheManager.init();
		return cacheManager;
 	}
 	
	public Cache getCache(){
	 	return this.pokedexCache;
	}


	// This method will increment the counter pokemon in the Pokedex for custom eviction
	public ArrayList incrementCacheHit(ArrayList list){
		Pokemon counter = (Pokemon)list.remove(0);
		counter.setCount(counter.getCount() + 1);
		list.add(counter);
		return list;
	}
}
