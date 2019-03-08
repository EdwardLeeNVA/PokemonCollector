package com.revature.pokemonv2.dao;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.SQLException;
import java.util.Random;

public class DAO {

	public static int generatePokemon(int trainerId) {
		Connection conn = null;
		
		//until we merge with the connection pool
		//conn = pool.getConnection();
		
		try (CallableStatement cs = conn.prepareCall("{call add_pokemon(?,?)}");) {
			cs.setInt(1, trainerId);
			
			//change new Random().nextInt(150) for 1 based index to
			//new Random().nextInt(151-1)+1
			int pokemonId = new Random().nextInt(150);
			cs.setInt(2, pokemonId);

			cs.execute();
			
			return pokemonId;
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			//log.error(e.getMessage());
		}finally {
			
			//until we merge with connection pool
			
			//pool.freeConnection(conn);
		}
	return -1;
	}
	
}
