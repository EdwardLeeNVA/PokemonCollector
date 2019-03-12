package com.revature.pokemonv2.utilities;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import com.revature.pokemonv2.model.Pokemon;
import org.apache.log4j.Logger;
import org.ehcache.spi.loaderwriter.CacheLoaderWriter;



public class AllPokemonLoadWriter implements CacheLoaderWriter {

    @Override
    public Pokemon load(Object i) throws Exception {
        return CachingUtility.getCachingUtility().getPokemon((Integer) i);
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
