package com.revature.pokemonv2.utilities;

import com.revature.pokemonv2.model.Pokemon;

import java.util.Comparator;

public class PokedexSorter implements Comparator<Pokemon> {
    private static PokedexSorter pokedexSorter;

    @Override
    public int compare(Pokemon o1, Pokemon o2) {
        return o1.getId() - o2.getId();
    }

    private PokedexSorter(){}

    public static PokedexSorter getInstance(){
        if(pokedexSorter == null){
            pokedexSorter = new PokedexSorter();
            return pokedexSorter;
        } else {
            return pokedexSorter;
        }
    }
}
