package com.revature.pokemonv2.dao;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.SQLException;

public class UserDaoImplementation implements UserDao{

	@Override
	//By CameronT
	public boolean create_trainer(String username, String password, String email, String f_name, 
			String l_name, int credits, int score) {
		
		Connection conn = null;
		System.out.println(1);
		//For the connection pool that we will add later
	//	conn = pool.getConnection();
		System.out.println(2);
		try (CallableStatement cs = conn.prepareCall("{call insert_user(?,?,?,?,?,0,0)}");) {
			cs.setString(1, username);
			cs.setString(2, password);
			cs.setString(3, email);
			cs.setString(4, f_name);
			cs.setString(5, l_name);
			cs.setInt(6, credits);
			cs.setInt(7, score);
			cs.execute();

			return true;
			
		} catch (SQLException e) {
			
		//	log.error(e.getMessage());
		}finally {
	//		pool.freeConnection(conn);
		}
	return false;
	}

}
