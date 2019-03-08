package com.revature.pokemonv2.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.revature.pokemonv2.model.Trainer;
import com.revature.pokemonv2.service.TokenService;
import com.revature.pokemonv2.utilities.ConnectionUtility;

public class TrainerDAOImp implements TrainerDAO {

	private static final TokenService token = TokenService.getInstance();
	private static TrainerDAOImp trainer = null;

	public static TrainerDAOImp getTrainerDAO() {
		if (trainer == null) {
			trainer = new TrainerDAOImp();
		}
		return trainer;
	}

	@Override
	public Trainer loginAuthentication(HttpServletRequest request, HttpServletResponse response) {
		// Creates a new trainer and assigns the username and password to the object
		// Verifies if the user is valid
		Trainer login = verifyLogin(request.getParameter("USERNAME"), request.getParameter("PASSWORD"));
		if (login != null) {
			// Generate a token for the user
			token.generateToken(login);
		}
		return login;
	}

	// Verifies via SQL whether the user login is correct
	public Trainer verifyLogin(String username, String password) {
		//Try with resources on the instance of ConnectionUtility
		try (Connection conn = ConnectionUtility.getInstance().getConnection()) {
			//Creates a new trainer
			Trainer login = null;
			//Call stored procedure
			String sql = "CALL VERIFY_CREDENTIALS(?,?)";
			//Try with resources on the PreparedStatement
			try (PreparedStatement cs = conn.prepareStatement(sql)) {
				cs.setString(1, username);
				cs.setString(2, password);
				try (ResultSet rs = cs.executeQuery()) {
					if (rs.next()) {
						login = new Trainer();
						login.setUsername(username);
						login.setUserID(1);
						login.setCredits(rs.getInt(2));
						login.setScore(rs.getInt(3));
						return login;
					}
				}
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return null;
	}
}
