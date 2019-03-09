package com.revature.pokemonv2.data;

import java.util.ArrayList;
import java.util.List;

import com.revature.pokemonv2.model.Pokemon;
import com.revature.pokemonv2.model.Trainer;
import com.revature.pokemonv2.model.Type;

public class SampleData {
	
	private List<Trainer> trainersT; 
	private List<Pokemon> pokemonT; 
	private static SampleData mInstance; 
	
	private SampleData() {
		super();
		populateData(); 
	}
	
	public static SampleData getInstance() {
		if(mInstance == null) {
			mInstance = new SampleData(); 
		}
		return mInstance; 
	}
	
	private void populateData() {
		trainersT = new ArrayList<Trainer>(); 
		////////////////////////// username  	FName		LName       score	credits		userId   
		trainersT.add(new Trainer("usertim1", 	"Tim", 		"Peccable", 1000, 	1000, 		8)); 
		trainersT.add(new Trainer("usertim2", 	"Tim", 		"Peccable", 1000, 	1000, 		9)); 
		trainersT.add(new Trainer("usertim3", 	"Tim", 		"Peccable", 1000, 	1000, 		10)); 
		trainersT.add(new Trainer("usertim4", 	"Tim", 		"Peccable", 1000, 	1000, 		11)); 
		trainersT.add(new Trainer("usertim5", 	"Tim", 		"Peccable", 1000, 	1000, 		12)); 
		trainersT.add(new Trainer("userDevin1", "Devin", 	"Training", 1000, 	1000, 		13)); 
		trainersT.add(new Trainer("userDevin2", "Devin", 	"Training", 1000, 	1000, 		14)); 
		trainersT.add(new Trainer("userDevin3", "Devin", 	"Training", 1000, 	1000, 		16)); 
		trainersT.add(new Trainer("userDevin4", "Devin", 	"Training", 1000, 	1000, 		17)); 
		trainersT.add(new Trainer("userDevin5", "Devin", 	"Training", 1000, 	1000, 		18)); 
		trainersT.add(new Trainer("userAbby1", 	"Abby", 	"LeevinMiracles", 1000, 	1000, 		20)); 
		trainersT.add(new Trainer("userAbby2", 	"Abby", 	"LeevinMiracles", 1000, 	1000, 		21));
		trainersT.add(new Trainer("userAbby3", 	"Abby", 	"LeevinMiracles", 1000, 	1000, 		24));
		trainersT.add(new Trainer("userAbby4", 	"Abby", 	"LeevinMiracles", 1000, 	1000, 		25));
		trainersT.add(new Trainer("userAbby5", 	"Abby", 	"LeevinMiracles", 1000, 	1000, 		26));
		trainersT.add(new Trainer("userZach1", 	"Zach", 	"ShunHero", 1000, 	1000, 		30)); 
		trainersT.add(new Trainer("userZach2", 	"Zach", 	"ShunHero", 1000, 	1000, 		31)); 
		trainersT.add(new Trainer("userZach3", 	"Zach", 	"ShunHero", 1000, 	1000, 		32)); 
		trainersT.add(new Trainer("userZach4", 	"Zach", 	"ShunHero", 1000, 	1000, 		33)); 
		trainersT.add(new Trainer("userZach5", 	"Zach", 	"ShunHero", 1000, 	1000, 		34)); 

		pokemonT = new ArrayList<Pokemon>();
		
	}
}
