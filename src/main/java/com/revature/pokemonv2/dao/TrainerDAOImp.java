package com.revature.pokemonv2.dao;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Types;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.revature.pokemonv2.model.Trainer;
import com.revature.pokemonv2.service.TokenService;
import com.revature.pokemonv2.utilities.ConnectionUtility;

import oracle.jdbc.OracleTypes;

public class TrainerDAOImp implements TrainerDAO {

	private static final TokenService token = TokenService.getInstance();
	private static TrainerDAOImp trainer = null;
	
	//Gets the instance of the class
	public static TrainerDAOImp getTrainerDAO() {
		if (trainer == null) {
			trainer = new TrainerDAOImp();
		}
		return trainer;
	}
	//Authentication, creates JWT for user
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
		// Try with resources on the instance of ConnectionUtility
		try (Connection conn = ConnectionUtility.getInstance().getConnection()) {
			// Creates a new trainer
			Trainer login = null;
			// Call stored procedure
			String sql = "CALL VERIFY_CREDENTIALS(?,?)";
			// Try with resources on the PreparedStatement
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

	//Creates a trainer
	@Override
	public boolean create_trainer(String username, String password, String email, String f_name, String l_name,
			int credit, int score) {
		try (Connection conn = ConnectionUtility.getInstance().getConnection()) {
			try (CallableStatement cs = conn.prepareCall("CALL create_trainer(?,?,?,?,?,?,?)");) {
				cs.setString(1, username);
				cs.setString(2, password);
				cs.setString(3, email);
				cs.setString(4, f_name);
				cs.setString(5, l_name);
				cs.setInt(6, credit);
				cs.setInt(7, score);
				cs.execute();
				return true;
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return false;
	}

	// Update's the trainer's account information
	@Override
	public String updateTrainer(int id, String oldUsername, String newUsername, String password, String email, String f_name, String l_name) {
		try (Connection conn = ConnectionUtility.getInstance().getConnection()) {
			try (CallableStatement cs = conn.prepareCall("CALL update_trainer(?,?,?,?,?,?,?)");) {
				cs.setInt(1, id);
				cs.setString(2, oldUsername);
				cs.setString(3, newUsername);
				cs.setString(4, password);
				cs.setString(5, email);
				cs.setString(6, f_name);
				cs.setString(7, l_name);
				cs.registerOutParameter(8, Types.VARCHAR);
				cs.executeUpdate();
				return cs.getString(8);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return null;
	}
}
