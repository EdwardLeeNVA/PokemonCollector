package com.revature.pokemonv2.utilities;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;

public class TestConnectionPool {
	private static final Logger logger = LogManager.getLogger(TestConnectionPool.class);
	
	private static final String url = "jdbc:oracle:thin:@p3test.cyitp3sizf7l.us-east-2.rds.amazonaws.com:1521:ORCL";
	private static final String username = "tcadmin";
	private static final String password = "s9d5j1q8";

	private static final TestConnectionPool instance = new TestConnectionPool();
	private static final int INITIAL_POOL_SIZE = 25;
	private final List<Connection> connections = new ArrayList<>(INITIAL_POOL_SIZE);
	private final List<Connection> usedConnections = new ArrayList<>(INITIAL_POOL_SIZE);
	
	// Restrict Instantiation
	private TestConnectionPool() {
		super();
		logger.trace("Instantiating TestConnectionPool");
		for (int i = 0; i < INITIAL_POOL_SIZE; i++) {
			try {
				this.connections.add(DriverManager.getConnection(url, username, password));
			} catch (SQLException e) {
				logger.fatal("Failed to obtain connection: ", e);
				throw new RuntimeException(e);
			}
		}
	}
	
	public static TestConnectionPool getInstance() {
		return instance;
	}
	
	public Connection getConnection() {
		logger.trace("Getting Connection from ConnectionPool...");
		Connection connection = this.connections.remove(INITIAL_POOL_SIZE - this.usedConnections.size() - 1);
		this.usedConnections.add(connection);
		return connection;
	}

	public boolean releaseConnection(Connection connection) {
		logger.trace("Releasing Connection...");
		this.connections.add(connection);
		return this.usedConnections.remove(connection);
	}

	public void shutdown() {
		logger.trace("Shutting down Connection Pool...");
		for (Connection c : this.connections) {
			try {
				c.close();
			} catch (SQLException e) {
				logger.fatal("Failed to obtain connection: ", e);
				throw new RuntimeException(e);
			}
		}
		
		for (Connection c : this.usedConnections) {
			try {
				c.close();
			} catch (SQLException e) {
				logger.fatal("Failed to obtain connection: ", e);
				throw new RuntimeException(e);
			}
		}
	}

}
