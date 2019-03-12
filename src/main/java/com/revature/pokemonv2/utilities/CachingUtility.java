package com.revature.pokemonv2.utilities;

import java.net.HttpURLConnection;
import java.net.URL;
import java.util.*;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import me.sargunvohra.lib.pokekotlin.client.PokeApi;
import me.sargunvohra.lib.pokekotlin.client.PokeApiClient;
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
	 private ArrayList<Pokemon> pokeList;
	 private static CachingUtility cachingUtility;
	 final static Logger logger = Logger.getLogger(CachingUtility.class);
	 private final String ALL_POKEMON = "red";
	private static final ObjectMapper mapper = new ObjectMapper();
	 
	 
	 private CachingUtility(){
		 pokedexCache = getCacheManager().getCache("pokedexCache", String.class, ArrayList.class);
		 allPokemonCache = getCacheManager().getCache("allPokemonCache", Integer.class, Pokemon.class);
	 }
	 
	 public static CachingUtility getCachingUtility() {
		 if (cachingUtility == null) {
		 	cachingUtility = new CachingUtility();
		 }
		 return cachingUtility;
	 }
	 
	 public ArrayList<Pokemon> checkCache(String username) {
		 return this.pokedexCache.get(username);
	 }

	public Pokemon addToCache(String username, int pokeId) {
		pokeList = this.pokedexCache.get(username);
		Pokemon temp = findPokemon(pokeId);
		temp.setCount(temp.getCount()+1);
		pokeList.add(temp);
		Collections.sort(pokeList, PokedexSorter.getInstance());
		// Logic for counting cache hits
		/*this.pokedexCache.put(username, incrementCacheHit(pokeList));*/
		this.pokedexCache.put(username, pokeList);
		return new Pokemon(temp.getId(), temp.getName(),temp.getImageUrl(), temp.getType(), temp.getStats(), pokeList.size(), temp.getCost());
	}

	public int redeemSinglePokemon(String username, int pokeId){

		pokeList = this.pokedexCache.get(username);
		Pokemon temp = findPokemon(pokeId);
		
		int count = temp.getCount();
		int cost = temp.getCost();
		int value = (int) (0.1*(count-1)*cost);
		
		temp.setCount(1);
		pokeList.add(temp);
		Collections.sort(pokeList, PokedexSorter.getInstance());
		this.pokedexCache.put(username, pokeList);
	 	return value;
	 }

	

	public int redeemAllPokemon(String username){
		pokeList = this.pokedexCache.get(username);
		int totalValue = 0;
		for(int i = 0; i < pokeList.size(); i++){
			int count = pokeList.get(i).getCount();
			int cost = pokeList.get(i).getCost();
			if(count>1) {
			totalValue += 0.1*(count-1)*cost;
			System.out.println(totalValue);
			pokeList.get(i).setCount(1);
			}
			
		}
		Collections.sort(pokeList, PokedexSorter.getInstance());
		// Logic for counting cache hits
		/*this.pokedexCache.put(username, incrementCacheHit(newPokeList));*/
		this.pokedexCache.put(username, pokeList);
		return totalValue;
	}
	
	 public boolean removeCollection(String username) {
		 try {
			 pokedexCache.remove(username);
			 return true;
		 }catch(NullPointerException e) {
			 logger.error("NullPointerException for removeCollection", e);
			 return false;
		 }catch(CacheWritingException e) {
			 logger.error("cache writing exception for removeCollection", e);
			 return false;
		 }
	 }
	 
	 public ArrayList<Pokemon> getAllPokemon() {
		 return pokedexCache.get(ALL_POKEMON);
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
	public ArrayList<Pokemon> incrementCacheHit(ArrayList list){
		Pokemon counter = (Pokemon)list.remove(0);
		counter.setCount(counter.getCount() + 1);
		list.add(counter);
		return list;
	}

	public Pokemon findPokemon(Integer pokeId){
		Pokemon temp = null;
		for(int x = 0; x < pokeList.size(); x++){
			if(pokeList.get(x).getId() == pokeId){
				temp = pokeList.remove(x);
			}
		}
		if(temp == null){
			temp = this.getPokemonCache(pokeId);
			temp.setCount(0);
		}
	 	return temp;
	}

	public Pokemon getPokemonCache(Integer pokeId){
	 	return this.allPokemonCache.get(pokeId);
	}

	public Pokemon getPokemon(Integer pokeId){
		try {
			StringBuilder pokeBaseURL = new StringBuilder("https://pokeapi.co/api/v2/pokemon/");
			pokeBaseURL.append(pokeId);
			URL url = new URL(pokeBaseURL.toString());
			HttpURLConnection http = (HttpURLConnection) url.openConnection();
			http.setRequestMethod("GET");
			http.setRequestProperty("User-Agent", "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36");
			http.setRequestProperty("Accept-Language", "en-US,en;q=0.5");;
			JsonNode resp = mapper.readTree(http.getInputStream());
			String[] types = new String[resp.get("types").size()];
			Map<String, Integer> stats = new HashMap<>();
			int cost = 0;
			for(int x = 0; x < resp.get("stats").size(); x++){
				stats.put(resp.get("stats").get(x).get("stat").get("name").asText(), resp.get("stats").get(x).get("base_stat").asInt());
				cost += resp.get("stats").get(x).get("base_stat").asInt();
			}
			for(int x = 0; x < resp.get("types").size(); x++){
				types[x] = resp.get("types").get(x).get("type").get("name").asText();
			}
			return new Pokemon(
					resp.get("id").asInt(),
					resp.get("name").asText(),
					resp.get("sprites").get("front_default").asText(),
					types,
					stats,
					cost
			);
		} catch (Exception e) {
			logger.error("Failed to retrieve Pokemon in CachingUtility.", e);
			return null;
		}
	}
}
