package com.revature.pokemonv2.dao;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;

import com.revature.pokemonv2.data.SampleData;
import com.revature.pokemonv2.model.Pokemon;
import com.revature.pokemonv2.model.Stats;
import com.revature.pokemonv2.model.Trainer;
import com.revature.pokemonv2.model.Type;
import com.revature.pokemonv2.utilities.ConnectionUtility;

public class StatsDAOImpl implements StatDAO{

	private static StatsDAOImpl mInstance; 
	
	private StatsDAOImpl(){
		super(); 
	}
	
	public static StatsDAOImpl getInstance() {
		if(mInstance == null) {
			mInstance = new StatsDAOImpl(); 
		}
		return mInstance; 
	}
	
	@Override
	public List<Stats> getPokemonCountByTrainer() {
		try (Connection conn = ConnectionUtility.getInstance().getConnection()) {
			String sql = "CALL get_pokemon_count_per_trainer(?)";
			try(CallableStatement cs = conn.prepareCall(sql)){
				cs.registerOutParameter(1, oracle.jdbc.OracleTypes.CURSOR);
				cs.execute();
				List<Stats> trainers = new ArrayList<Stats>(); 
				try(ResultSet rs = (ResultSet) cs.getObject(1)){
				//While the result set has another object create a trainer object and push it to the leaderboard array.
					while(rs.next()) {
						Stats t = new Stats(
							rs.getString("username"),  
							rs.getInt("count(*)")
						); 
						trainers.add(t); 
					}
				}
				return trainers;
			}

		} catch (SQLException e) {
			e.printStackTrace();
			return null;
		}
	}

	public List<Trainer> getLeaderboard(int topN) {
		// Get the top n pokemon trainers
		try (Connection conn = ConnectionUtility.getInstance().getConnection()) {
			String sql = "CALL get_leaderboard(?,?)";
			try(CallableStatement cs = conn.prepareCall(sql)){
				cs.setInt(1, topN);
				cs.registerOutParameter(2, oracle.jdbc.OracleTypes.CURSOR);
				cs.execute();
				List<Trainer> leaderboard = new ArrayList<Trainer>(); 
				try(ResultSet rs = (ResultSet) cs.getObject(2)){
				//While the result set has another object create a trainer object and push it to the leaderboard array.
					while(rs.next()) {
						Trainer t = new Trainer(
								rs.getString("username"), 
								rs.getString("f_name"), 
								rs.getString("l_name"), 
								rs.getInt("score"), 
								rs.getInt("credits"), 
								rs.getInt("ID")
								);
						leaderboard.add(t);
					}
				}
				return leaderboard;
			}

		} catch (SQLException e) {
			e.printStackTrace();
			return null;
}
	}

	
	
}
