package com.revature.pokemonv2.dao;

import java.io.IOException;
import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;

import com.fasterxml.jackson.databind.ObjectMapper;
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

	private static final TokenService tokenService = TokenService.getInstance();
	private static TrainerDAOImp trainer = null;
	private static final Logger LOGGER = Logger.getLogger(TrainerDAOImp.class);
	private static ObjectMapper mapper = new ObjectMapper();

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
	public String loginAuthentication(HttpServletRequest request, HttpServletResponse response) {
		// Creates a new trainer and assigns the username and password to the object
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
}
