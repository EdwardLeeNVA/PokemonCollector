package com.revature.pokemonv2.utilities;

import com.revature.pokemonv2.model.Pokemon;
import org.ehcache.config.EvictionAdvisor;

import java.util.ArrayList;

public class PokedexEvictor implements EvictionAdvisor<String, ArrayList> {
    CachingUtility cachingUtility = CachingUtility.getCachingUtility();


    /*
    Custom Eviction suggestion that will suggest records with lower Cache hits
     */
    @Override
        public boolean adviseAgainstEviction(String key, ArrayList value) {
            if(key.equals("red")){
                return true;
            } else {
                return false;
            }
            /*ArrayList<Pokemon> list = (ArrayList<Pokemon>)cachingUtility.getCache().get(key);
            int current_hits = list.get(0).getCount();
            return checkForHigherPriorityKey(list, current_hits);*/
    }

    /*public boolean checkForHigherPriorityKey(ArrayList<Pokemon> list, int current_hits){
        if(current_hits == 1) return false;
        for(Pokemon p : list){
            if(p.getId() != 0 && p.getCount() < current_hits){
                return true;
            }
        }
        return false;
    }*/
}
