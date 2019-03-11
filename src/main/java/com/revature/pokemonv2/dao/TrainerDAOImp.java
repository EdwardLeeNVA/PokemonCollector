package com.revature.pokemonv2.dao;

import java.io.IOException;
import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;<<<<<<<HEAD
import java.sql.Types;=======
import java.util.List;>>>>>>>staging

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.revature.pokemonv2.model.Pokemon;
import com.revature.pokemonv2.model.PokemonFactory;
import com.revature.pokemonv2.model.Trainer;
import com.revature.pokemonv2.model.TrainerFactory;
import com.revature.pokemonv2.service.TokenService;
import com.revature.pokemonv2.utilities.ConnectionUtility;

/**
 * The TrainerDAOImp class contains methods that deal with the selection,
 * insertion, and updating of trainers.
 *
 */
public class TrainerDAOImp implements TrainerDAO {

	private static final Logger LOGGER = Logger.getLogger(TrainerDAOImp.class);
	private static ObjectMapper mapper = new ObjectMapper();
	private static final TokenService tokenService = TokenService.getInstance();
	private static TrainerDAOImp trainer = null;

	/**
	 * Gets the instance of the class.
	 */
	public static TrainerDAOImp getTrainerDAO() {
		if (trainer == null) {
			trainer = new TrainerDAOImp();
		}
		return trainer;
	}

	@Override
	public boolean createTrainer(String username, String password, String email, String firstName, String lastName,
			int credit, int score) {
		try (Connection conn = ConnectionUtility.getInstance().getConnection()) {
			try (CallableStatement cs = TrainerDAOStatements.createTrainerStatement(conn, username, password, email,
					firstName, lastName, credit, score)) {
				cs.execute();
				return true;
			}
		} catch (SQLException e) {
			LOGGER.error(e.getMessage(), e);
		}
		return false;
	}

	@Override
	public List<Pokemon> getDuplicates(int trainerId) {
		List<Pokemon> duplicateList = null;
		try (Connection conn = ConnectionUtility.getInstance().getConnection()) {
			try (CallableStatement cs = TrainerDAOStatements.getDuplicatesStatement(conn, trainerId)) {
				cs.execute();
				try (ResultSet rs = (ResultSet) cs.getObject(2)) {
					duplicateList = PokemonFactory.createListFromResultSet(rs);
				}
			}
		} catch (SQLException e) {
			LOGGER.error(e.getMessage(), e);
		}
		return duplicateList;
	}

	@Override
	public String loginAuthentication(HttpServletRequest request, HttpServletResponse response) {
		// Verifies if the user is valid
		String token = "";
		Trainer login = verifyLogin(request.getParameter("USERNAME"), request.getParameter("PASSWORD"));
		if (login != null) {
			// Generate a token for the user
			token = tokenService.generateToken(login);
			response.addHeader("Authorization", "Bearer " + token);
			try {
				response.getWriter().write(mapper.writeValueAsString(login));
			} catch (IOException e) {
				LOGGER.error(e.getMessage(), e);
			}
		}
		return token;
	}

	@Override
	public boolean purchasePokemon(String username, int cost) {
		try (Connection conn = ConnectionUtility.getInstance().getConnection()) {
			try (CallableStatement cs = TrainerDAOStatements.purchasePokemonStatement(conn, username, cost)) {
				cs.execute();
			}
		} catch (SQLException e) {
			LOGGER.error(e.getMessage(), e);
			return false;
		}
		return true;
	}

	@Override
	public int[] redeemAll(int trainerId) {
		int[] out = new int[2];
		try (Connection conn = ConnectionUtility.getInstance().getConnection()) { // create connection
			try (CallableStatement cs = TrainerDAOStatements.redeemAllStatement(conn, trainerId)) {
				cs.execute();
				out[0] = cs.getInt(2);
				out[1] = cs.getInt(3);
			}
			return out;
		} catch (SQLException e) {
			LOGGER.error(e.getMessage(), e);
			return null;
		}
	}

	@Override
	public int[] redeemSpecific(int trainerId, int pokeId) {
		int[] out = new int[2]; // return array
		try (Connection conn = ConnectionUtility.getInstance().getConnection()) {
			try (CallableStatement cs = TrainerDAOStatements.redeemSpecificStatement(conn, trainerId, pokeId)) {
				cs.execute();
				out[0] = cs.getInt(3);
				out[1] = cs.getInt(4);
			}
			return out; // return array of values
		} catch (SQLException e) {
			LOGGER.error(e.getMessage(), e);
			return null;
		}

	}

	// Update's the trainer's account information
	@Override
	public String updateTrainer(int id, String oldUsername, String newUsername, String password, String email,
			String firstName, String lastName) {
		try (Connection conn = ConnectionUtility.getInstance().getConnection()) {
			try (CallableStatement cs = conn.prepareCall("CALL update_trainer(?,?,?,?,?,?,?,?)");) {
				cs.setInt(1, id);
				cs.setString(2, oldUsername);
				cs.setString(3, newUsername);
				cs.setString(4, password);
				cs.setString(5, email);
				cs.setString(6, firstName);
				cs.setString(7, lastName);
				cs.registerOutParameter(8, Types.VARCHAR);
				cs.executeUpdate();
				return cs.getString(8);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return null;
	}

	@Override
	public Trainer verifyLogin(String username, String password) {
		// Try with resources on the instance of ConnectionUtility
		try (Connection conn = ConnectionUtility.getInstance().getConnection()) {
			// Try with resources on the PreparedStatement
			try (CallableStatement cs = TrainerDAOStatements.verifyLoginStatement(conn, username, password)) {
				cs.execute();
				// Executing out parameters
				try (ResultSet rs = (ResultSet) cs.getObject(3)) {
					if (rs.next()) {
						return TrainerFactory.createFromResult(rs);
					}
				}
			}
		} catch (SQLException e) {
			LOGGER.error(e.getMessage(), e);
		}
		return null;
	}
}
