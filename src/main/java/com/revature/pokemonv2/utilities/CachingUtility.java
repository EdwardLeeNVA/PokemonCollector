package com.revature.pokemonv2.utilities;

import java.util.Collection;
import java.util.List;

import org.apache.log4j.Logger;
import org.ehcache.Cache;
import org.ehcache.CacheManager;
import org.ehcache.config.builders.CacheManagerBuilder;
import org.ehcache.spi.loaderwriter.CacheWritingException;
import org.ehcache.xml.XmlConfiguration;

import com.revature.pokemonv2.model.Pokemon;
import com.revature.pokemonv2.model.Trainer;

public class CachingUtility {
 	
	 private final Cache<Trainer, Collection> pokedexCache;
	 private final Cache<Integer, Pokemon> allPokemonCache;
	 private static CachingUtility cachingUtility = new CachingUtility();
	 final static Logger logger = Logger.getLogger(CachingUtility.class);
	 public static PokeAPI pokeAPI = PokeAPI.getPokeAPI();
	 
	 
	 private CachingUtility(){
		 
		 pokedexCache = getCacheManager().getCache("pokedexCache", Trainer.class, Collection.class);
		 allPokemonCache = getCacheManager().getCache("allPokemonCache", Integer.class, Pokemon.class);
		 
	 }
	 
	 public static CachingUtility getCachingUtility() {
		 return cachingUtility;
	 }
	 
	 
	 public void addToCache(Trainer t, Collection c) {
		 this.pokedexCache.put(t, c);
	 }
	 
	 public Collection checkCache(Trainer t) {
		 return this.pokedexCache.get(t);
	 }
	 
	 public Pokemon getPokemonFromCache(Integer i) {
		 Pokemon p = allPokemonCache.get(i);
		 if (p == null) {
			 
		 }
		 return this.allPokemonCache.get(i);
	 }
	
	 public boolean removeCollection(Trainer t) {
		 try {
			 pokedexCache.remove(t);
			 return true;
		 }catch(NullPointerException e) {
			 logger.error("NullPointerException for removeCollection");
			 e.printStackTrace();
			 return false;
		 }catch(CacheWritingException c) {
			 logger.error("cache writing excpetion for removeCollection");
			 c.printStackTrace();
			 return false;
		 }
	 }
	 
	 public void setAllPokemonCache(List<Pokemon> allPokemon) {
		 for (Pokemon p : allPokemon) {
			 allPokemonCache.put(p.getId(), p);
		 }
	 }
	  
 	CacheManager getCacheManager() {
 		XmlConfiguration ehcache = new XmlConfiguration(getClass().getResource("/resources/ehcache.xml"));
 		CacheManager cacheManager = CacheManagerBuilder.newCacheManager(ehcache);
 		cacheManager.init();
		return cacheManager;
 	}
 	
  
 
	     
	
	

}
