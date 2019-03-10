package com.revature.pokemonv2.model;

public class Trainer {
	private String username;
	private String firstName;
	private String lastName;
	private String password;
	private String email;
	private int score;
	private int credits;
	private int userID;
	
	/**
	 * Empty constructor.
	 */
	public Trainer() { /*Empty constructor*/ }
	
	/**
	 * The trainer's username.
	 */
	public String getUsername() {
		return username;
	}
	
	/**
	 * Sets the trainer's username.
	 */
	public void setUsername(String username) {
		this.username = username;
	}
	
	/**
	 * The trainer's first name.
	 */
	public String getFirstName() {
		return firstName;
	}
	
	/**
	 * Sets the trainer's first name.
	 */
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	
	/**
	 * The trainer's last name.
	 */
	public String getLastName() {
		return lastName;
	}
	
	/**
	 * Sets the trainer's last name.
	 */
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	
	/**
	 * The trainer's password. Please delete this when done.
	 */
	public String getPassword() {
		return password;
	}
	
	/**
	 * Sets the trainer's password.
	 */
	public void setPassword(String password) {
		this.password = password;
	}
	
	/**
	 * The trainer's first name.
	 */
	public String getEmail() {
		return email;
	}
	
	/**
	 * Sets the trainer's first name.
	 */
	public void setEmail(String email) {
		this.email = email;
	}
	
	/**
	 * The trainer's score.
	 */
	public int getScore() {
		return score;
	}
	
	/**
	 * Sets the trainer's score.
	 */
	public void setScore(int score) {
		this.score = score;
	}
	
	/**
	 * The trainer's credits.
	 */
	public int getCredits() {
		return credits;
	}
	
	/**
	 * Sets the trainer's credits.
	 */
	public void setCredits(int credits) {
		this.credits = credits;
	}

	/**
	 * The trainer's ID.
	 */
	public int getUserID() {
		return userID;
	}
	
	/**
	 * Sets the trainer's ID.
	 */
	public void setUserID(int userID) {
		this.userID = userID;
	}
}
