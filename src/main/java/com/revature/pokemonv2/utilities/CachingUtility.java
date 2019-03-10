package com.revature.pokemonv2.utilities;

import java.util.*;

import com.revature.pokemonv2.dao.DAO;
import me.sargunvohra.lib.pokekotlin.client.PokeApi;
import me.sargunvohra.lib.pokekotlin.client.PokeApiClient;
import me.sargunvohra.lib.pokekotlin.model.Pokemon;
import org.apache.log4j.Logger;
import org.ehcache.Cache;
import org.ehcache.CacheManager;
import org.ehcache.config.builders.CacheManagerBuilder;
import org.ehcache.spi.loaderwriter.CacheWritingException;
import org.ehcache.xml.XmlConfiguration;


public class CachingUtility {
 	
	 private final Cache<String, ArrayList> pokedexCache;
	 private final DAO dao = new DAO();
	 private static CachingUtility cachingUtility = new CachingUtility();
	 final static Logger logger = Logger.getLogger(CachingUtility.class);
	 private final int MAX_POKEDEX_SIZE = 151;
	 
	 
	 private CachingUtility(){
		 
		 pokedexCache = getCacheManager().getCache("pokedexCache", String.class, ArrayList.class);
	 }
	 
	 public static CachingUtility getCachingUtility() {
		 return cachingUtility;
	 }
	 
	 public ArrayList checkCache(String username) {
		ArrayList<com.revature.pokemonv2.model.Pokemon> returnList = this.pokedexCache.get(username);
		if(returnList == null){
			this.pokedexCache.put(username, loadOnMiss(username));
			returnList = this.pokedexCache.get(username);
		}
		 return returnList;
	 }
	 
//	 public ArrayList addToCache(String username, int poke_id) {
//		 ArrayList<Pokemon> pokeList = (ArrayList<Pokemon>) this.pokedexCache.get(username);
//		 Pokemon temp = pokeList.remove(poke_id);
//		 if(temp == null){
//		 	temp = this.getPokemonFromCache(poke_id);
//		 } else {
//		 	temp.setCount(temp.getCount() + 1);
//		 }
//		 pokeList.add(temp);
//		 this.pokedexCache.put(username, pokeList);
//		 return this.pokedexCache.get(username);
//	 }

//	 public ArrayList redeemSinglePokemon(String username, int poke_id){
//
//	 	// Logic for counting cache hits
//	 	/*this.pokedexCache.put(username, incrementCacheHit(this.pokedexCache.get(username)));*/
//		return this.pokedexCache.get(username);
//	 }

	public ArrayList addToCache(String username, int poke_id) {
		ArrayList<com.revature.pokemonv2.model.Pokemon> pokeList = this.pokedexCache.get(username);
		if(pokeList == null){
			this.pokedexCache.put(username, loadOnMiss(username));
			pokeList = this.pokedexCache.get(username);
		}
		com.revature.pokemonv2.model.Pokemon temp = pokeList.remove(poke_id);
		if(temp == null){
			temp = this.getPokemon(poke_id);
		} else {
			temp.setCount(temp.getCount() + 1);
		}
		pokeList.add(temp);
		// Logic for counting cache hits
		/*this.pokedexCache.put(username, incrementCacheHit(pokeList));*/
		this.pokedexCache.put(username, pokeList);
		return this.pokedexCache.get(username);
	}

	public ArrayList redeemSinglePokemon(String username, int poke_id){

		ArrayList<com.revature.pokemonv2.model.Pokemon> newPokeList = this.pokedexCache.get(username);
		if(newPokeList == null){
			this.pokedexCache.put(username, loadOnMiss(username));
			newPokeList = this.pokedexCache.get(username);
		}
		com.revature.pokemonv2.model.Pokemon temp = newPokeList.remove(poke_id);
		temp.setCount(1);
		newPokeList.add(temp);

		this.pokedexCache.put(username, newPokeList);
	 	return null;
	 }

	

	public ArrayList redeemAllPokemon(String username){
		ArrayList<com.revature.pokemonv2.model.Pokemon> origPokeList = this.pokedexCache.get(username);
		if(origPokeList == null){
			this.pokedexCache.put(username, loadOnMiss(username));
			origPokeList = this.pokedexCache.get(username);
		}
		ArrayList<com.revature.pokemonv2.model.Pokemon> newPokeList = new ArrayList<>();
		for(int i = 0; i < newPokeList.size(); i++){
			com.revature.pokemonv2.model.Pokemon temp = origPokeList.get(i);
			temp.setCount(1);
			newPokeList.add(temp);
		}

		// Logic for counting cache hits
		/*this.pokedexCache.put(username, incrementCacheHit(newPokeList));*/
		this.pokedexCache.put(username, newPokeList);
		return this.pokedexCache.get(username);
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
		 ArrayList<com.revature.pokemonv2.model.Pokemon> returnList = pokedexCache.get("red");
		 if(returnList == null){
		 	pokedexCache.put("red", loadOnMiss("red"));
		 	return pokedexCache.get("red");
		 }
	 	return returnList;
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
	public ArrayList<com.revature.pokemonv2.model.Pokemon> incrementCacheHit(ArrayList list){
		com.revature.pokemonv2.model.Pokemon counter = (com.revature.pokemonv2.model.Pokemon)list.remove(0);
		counter.setCount(counter.getCount() + 1);
		list.add(counter);
		return list;
	}

	public com.revature.pokemonv2.model.Pokemon getPokemon(Integer poke_id){
			PokeApi poke = new PokeApiClient();
			Pokemon p = poke.getPokemon(poke_id);

			ArrayList<String> typeTemp = new ArrayList<>();
			int z = 0;
			while (z < p.getTypes().size()) {
				typeTemp.add(p.getTypes().get(z).getType().getName());
			}

			Map<String, Integer> statTemp = new HashMap<>();
			int statCount = 0;
			int cost = 0;
			while (statCount < p.getStats().size()) {
				statTemp.put(p.getStats().get(statCount).getStat().getName(), p.getStats().get(statCount).getStat().component3());
				cost += p.getStats().get(statCount).getStat().component3();
			}

			return new com.revature.pokemonv2.model.Pokemon(p.getId(), p.getName(), p.getSprites().getFrontDefault(),(String[])typeTemp.toArray(), statTemp, cost);

	}

	public ArrayList<com.revature.pokemonv2.model.Pokemon> loadOnMiss(String username){
		ArrayList<com.revature.pokemonv2.model.Pokemon> returnPokeDex = new ArrayList<>();
		if(username.equals("red")) {
			for (int i = 1; i <= MAX_POKEDEX_SIZE; i++ ) {
				returnPokeDex.add(cachingUtility.getPokemon(i));
			}
			return returnPokeDex;
		} else {
			List<com.revature.pokemonv2.model.Pokemon> pokeDex = dao.getTrainerPokedex(username);

			for (com.revature.pokemonv2.model.Pokemon p : pokeDex) {
				com.revature.pokemonv2.model.Pokemon poke = cachingUtility.getPokemon(p.getId());
				poke.setCount(p.getCount());
				returnPokeDex.add(poke);
			}
			// Adds dummy pokemon to counter Cache hits
			/*returnPokeDex.add(new Pokemon(0, 1));*/
			return returnPokeDex;
		}
	}
}
