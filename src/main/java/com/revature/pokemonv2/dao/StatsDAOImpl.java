package com.revature.pokemonv2.dao;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import com.revature.pokemonv2.model.Stats;
import com.revature.pokemonv2.model.Trainer;
import com.revature.pokemonv2.utilities.ConnectionUtility;
import com.revature.pokemonv2.utilities.TestConnectionPool;
import org.apache.log4j.Logger;

public class StatsDAOImpl implements StatDAO {

	private static StatsDAOImpl mInstance;
	private static final Logger logger = Logger.getLogger(StatsDAOImpl.class);

	private StatsDAOImpl() {
		super();
	}

	public static StatsDAOImpl getInstance() {
		if (mInstance == null) {
			mInstance = new StatsDAOImpl();
		}
		return mInstance;
	}

	@Override
	public List<Stats> getPokemonCountByTrainer(boolean isTesting) {
		Connection conn = isTesting ? TestConnectionPool.getInstance().getConnection()
				: ConnectionUtility.getInstance().getConnection();
		
		String sql = "CALL get_pokemon_count_per_trainer(?)";
		try (CallableStatement cs = conn.prepareCall(sql)) {
			cs.registerOutParameter(1, oracle.jdbc.OracleTypes.CURSOR);
			cs.execute();
			List<Stats> trainers = new ArrayList<Stats>();
			try (ResultSet rs = (ResultSet) cs.getObject(1)) {
				// While the result set has another object create a trainer object and push it
				// to the leaderboard array.
				while (rs.next()) {
					Stats t = new Stats(rs.getString("username"), rs.getInt("count(*)"));
					trainers.add(t);
				}
			}
			return trainers;
		} catch (SQLException e) {
			logger.error("SQL Exception in getPokemonCountByTrainer.", e);
			return null;
		} finally {
			if (isTesting)
				TestConnectionPool.getInstance().releaseConnection(conn);
			else
				ConnectionUtility.freeConnection(conn);
		}
	}

	public List<Trainer> getLeaderboard(int topN, boolean isTesting) {
		Connection conn = isTesting ? TestConnectionPool.getInstance().getConnection()
				: ConnectionUtility.getInstance().getConnection();
		
		// Get the top n pokemon trainers
		String sql = "CALL get_leaderboard(?,?)";
		try (CallableStatement cs = conn.prepareCall(sql)) {
			cs.setInt(1, topN);
			cs.registerOutParameter(2, oracle.jdbc.OracleTypes.CURSOR);
			cs.execute();
			List<Trainer> leaderboard = new ArrayList<Trainer>();
			try (ResultSet rs = (ResultSet) cs.getObject(2)) {
				// While the result set has another object create a trainer object and push it
				// to the leaderboard array.
				while (rs.next()) {
					Trainer t = new Trainer(rs.getString("username"), rs.getString("f_name"),
							rs.getString("l_name"), rs.getInt("score"), rs.getInt("credits"), rs.getInt("ID"));
					leaderboard.add(t);
				}
				Collections.sort(leaderboard);
			}
			return leaderboard;
		} catch (SQLException e) {
			logger.error("SQL Exception in getLeaderboard.", e);
			return null;
		} finally {
			if (isTesting)
				TestConnectionPool.getInstance().releaseConnection(conn);
			else
				ConnectionUtility.freeConnection(conn);
		}
	}

	@Override
	public List<Stats> getTotalPokemonCountByTrainer(boolean isTesting) {
		Connection conn = isTesting ? TestConnectionPool.getInstance().getConnection()
				: ConnectionUtility.getInstance().getConnection();
		
		String sql = "CALL get_total_pokemon_per_trainer(?)";
		try (CallableStatement cs = conn.prepareCall(sql)) {
			cs.registerOutParameter(1, oracle.jdbc.OracleTypes.CURSOR);
			cs.execute();
			List<Stats> trainers = new ArrayList<Stats>();
			try (ResultSet rs = (ResultSet) cs.getObject(1)) {
				// While the result set has another object create a trainer object and push it
				// to the leaderboard array.
				while (rs.next()) {
					Stats t = new Stats(rs.getString("username"), rs.getInt("sum(count)"));
					trainers.add(t);
				}
			}
			return trainers;
		} catch (SQLException e) {
			logger.error("SQL Exception in getTotalPokemonCountByTrainer.", e);
			return null;
		} finally {
			if (isTesting)
				TestConnectionPool.getInstance().releaseConnection(conn);
			else
				ConnectionUtility.freeConnection(conn);
		}
	}

}
