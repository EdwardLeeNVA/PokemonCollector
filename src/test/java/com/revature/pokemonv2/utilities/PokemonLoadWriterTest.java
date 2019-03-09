package com.revature.pokemonv2.utilities;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class PokemonLoadWriterTest {

    AllPokemonLoadWriter test = new AllPokemonLoadWriter();
    
    
    @Test
    public void TestLoad() throws Exception{
        Integer i = new Integer(1);
        assertEquals((test.load(i)).getName(), "bulbasaur");
    }

}