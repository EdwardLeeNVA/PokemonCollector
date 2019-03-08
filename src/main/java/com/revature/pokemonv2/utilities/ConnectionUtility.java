package com.revature.pokemonv2.utilities;

import java.sql.Connection;
import java.sql.SQLException;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.sql.DataSource;

import org.apache.log4j.Logger;

public class ConnectionUtility {

	private static DataSource dataSource;
	private static final String ENVIRONMENT_CONTEXT = "java:/comp/env";
	private static final String FILE_DATA = "jdbc/myoracle";
	private static final Logger log = Logger.getLogger(ConnectionUtility.class);

	public static Connection getConnection() {
		try {
			DataSource ds = getDataSource();
			return ds.getConnection();
		} catch (SQLException | NamingException e) {
			log.error("Failed to create datasource.", e);
			throw new RuntimeException(e);
		}
	}

	private static DataSource getDataSource() throws NamingException {
		if (dataSource == null) {
			Context context = new InitialContext();
			Context lookup = (Context) context.lookup(ENVIRONMENT_CONTEXT);
			dataSource = (DataSource) lookup.lookup(FILE_DATA);
		}
		return dataSource;
	}
	
    public static void freeConnection(Connection c) {
        try {
            c.close();
        } catch (SQLException e) {
            System.out.println(e);
        }
    }
}
