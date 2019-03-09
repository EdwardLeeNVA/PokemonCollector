package com.revature.pokemonv2.dao;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Types;
import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.revature.pokemonv2.model.Pokemon;
import com.revature.pokemonv2.model.Trainer;
import com.revature.pokemonv2.service.TokenService;
import com.revature.pokemonv2.utilities.ConnectionUtility;

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
	
	
	
	
	@Override
	/* 
	 * Method for fetching all duplicate pokemon of a specfiic trainer.
	 * Takes an int trainer_id
	 * Returns an ArrayList of pokemon objects
	 */
	public ArrayList<Pokemon> get_duplicates(int trainer_id) {
		//Create a temporary list for pokemon.
		ArrayList<Pokemon> duplicateList = null;
		//Try with resources to connect to database.
		try (Connection conn = ConnectionUtility.getInstance().getConnection()) {
			
			// Call stored procedure
			String sql = "CALL get_all_duplicates(?)";
			//Setup callableStatment
			try(CallableStatement cs = conn.prepareCall(sql)){
			//Set the trainer id in the callable statement
				cs.setInt(1, trainer_id);
				cs.registerOutParameter(2, oracle.jdbc.OracleTypes.CURSOR);
				cs.execute();				//Prepare the resultset
				try(ResultSet rs = (ResultSet) cs.getObject(2)){
				//While the result set has another object create a pokemon objet and push it to the duplicatePokemon array.
					while(rs.next()) {
						Pokemon temp = new Pokemon(rs.getInt("pokemon_id"), rs.getInt("count"));
						duplicateList.add(temp);
					}
				}
			}	
			return duplicateList;
			
		} catch (SQLException e) {
			e.printStackTrace();
			return null;
		}
		
		
	}

	
	
	@Override
	/* Purpose: Redeem a specific pokemon from a trainer's collection.
	 * trainer_id: ID of the current trainer.
	 * poke_id: ID of the pokemon being redeemed.
	 * Returns the amount of credits of credits given (index 0) and total credits (index 1)
	 */
	
	public int[] redeemSpecific(int trainer_id, int poke_id) 
	{
		int [] out = new int[2]; //return array
		try (Connection conn = ConnectionUtility.getInstance().getConnection()) { //create connection
			String sql = "CALL redeem_duplicate(?,?, ?, ?)"; //Procedure string
			//Setup callableStatment
			try(CallableStatement cs = conn.prepareCall(sql)){
				cs.setInt(1, trainer_id);//Set the trainer id in the callable statement
				cs.setInt(2, poke_id);//Set the pokemon id in the callable statement
				cs.registerOutParameter(3, Types.INTEGER); //Out param for added credits
				cs.registerOutParameter(4, Types.INTEGER);//out param for new total
				cs.execute();				//Prepare the resultset
				
				out[0] = cs.getInt(3); //set return value
				out[1] = cs.getInt(4);//set return value
			}	
			return out; //return array of values
			
		} catch (SQLException e) {
			e.printStackTrace();
			return null;
		}
		
	}

	@Override
	/*
	 * Purpose: Redeem a all pokemon for a specific trainer.
	 * trainer_id: ID of the current trainer.
	 */
	public int redeemAll(int trainer_id) {
		// TODO Auto-generated method stub
		return 0;
		
	}
}
