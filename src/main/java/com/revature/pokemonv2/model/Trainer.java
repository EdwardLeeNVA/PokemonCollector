package com.revature.pokemonv2.model;

public class Trainer implements Comparable<Trainer>{
	private String username;
	private String firstName;
	private String lastName;
	private int score;
	private int credits;
	private int userID;
	
	public Trainer() { /*Empty constructor*/ }
	public Trainer(String username, String firstName, String lastName) {
		this.username = username; 
		this.firstName = firstName; 
		this.lastName = lastName; 
	}
	public Trainer(String username, String firstName, String lastName, int score, int credits, int userID) {
		this.username = username; 
		this.firstName = firstName; 
		this.lastName = lastName; 
		this.score = score; 
		this.credits = credits; 
		this.userID = userID; 
	}
	
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public int getScore() {
		return score;
	}
	public void setScore(int score) {
		this.score = score;
	}
	public int getCredits() {
		return credits;
	}
	public void setCredits(int credits) {
		this.credits = credits;
	}

	public int getUserID() {
		return userID;
	}
	public void setUserID(int userID) {
		this.userID = userID;
	}
	@Override
	public int compareTo(Trainer t2) {
		return t2.score-this.score;
	}
}
