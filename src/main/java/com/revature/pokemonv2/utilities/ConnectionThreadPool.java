package com.revature.pokemonv2.utilities;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;


public class ConnectionThreadPool {
	private static final int INIT_POOL_SIZE = 2;
	private static final int MAX_POOL_SIZE = 4;
	private static final int QUEUE_SIZE = 2;
	
	 ExecutorService executor = Executors.newFixedThreadPool(INIT_POOL_SIZE);

}
