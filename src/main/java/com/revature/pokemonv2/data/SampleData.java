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
		trainersT.add(new Trainer("usertim1", 	"Tim", 		"Peccable", 3000, 	1000, 		8)); 
		trainersT.add(new Trainer("usertim2", 	"Tim", 		"Peccable", 2000, 	1000, 		9)); 
		trainersT.add(new Trainer("usertim3", 	"Tim", 		"Peccable", 9000, 	1000, 		10)); 
		trainersT.add(new Trainer("usertim4", 	"Tim", 		"Peccable", 2000, 	1000, 		11)); 
		trainersT.add(new Trainer("usertim5", 	"Tim", 		"Peccable", 1000, 	1000, 		12)); 
		trainersT.add(new Trainer("userDevin1", "Devin", 	"Training", 8000, 	1000, 		13)); 
		trainersT.add(new Trainer("userDevin2", "Devin", 	"Training", 4000, 	1000, 		14)); 
		trainersT.add(new Trainer("userDevin3", "Devin", 	"Training", 8000, 	1000, 		16)); 
		trainersT.add(new Trainer("userDevin4", "Devin", 	"Training", 1000, 	1000, 		17)); 
		trainersT.add(new Trainer("userDevin5", "Devin", 	"Training", 3000, 	1000, 		18)); 
		trainersT.add(new Trainer("userAbby1", 	"Abby", 	"LeevinMiracles", 1000, 	1000, 		20)); 
		trainersT.add(new Trainer("userAbby2", 	"Abby", 	"LeevinMiracles", 9000, 	1000, 		21));
		trainersT.add(new Trainer("userAbby3", 	"Abby", 	"LeevinMiracles", 8000, 	1000, 		24));
		trainersT.add(new Trainer("userAbby4", 	"Abby", 	"LeevinMiracles", 6000, 	1000, 		25));
		trainersT.add(new Trainer("userAbby5", 	"Abby", 	"LeevinMiracles", 5000, 	1000, 		26));
		trainersT.add(new Trainer("userZach1", 	"Zach", 	"ShunHero", 4000, 	1000, 		30)); 
		trainersT.add(new Trainer("userZach2", 	"Zach", 	"ShunHero", 9000, 	1000, 		31)); 
		trainersT.add(new Trainer("userZach3", 	"Zach", 	"ShunHero", 7000, 	1000, 		32)); 
		trainersT.add(new Trainer("userZach4", 	"Zach", 	"ShunHero", 7000, 	1000, 		33)); 
		trainersT.add(new Trainer("userZach5", 	"Zach", 	"ShunHero", 3000, 	1000, 		34)); 

		pokemonT = new ArrayList<Pokemon>();
		pokemonT.add(new Pokemon(1, "bulbasaur", "badURL", new String[]{Type.DRAGON.toString(), Type.FAIRY.toString()}, null));
		pokemonT.add(new Pokemon(2, "ivysaur", "badURL", new String[]{Type.GRASS.toString(), Type.FIRE.toString()}, null));
		pokemonT.add(new Pokemon(3, "venusaur", "badURL", new String[]{Type.GRASS.toString(), Type.ICE.toString()}, null));
		pokemonT.add(new Pokemon(4, "charmander", "badURL", new String[]{Type.ICE.toString(), Type.FAIRY.toString()}, null));
		pokemonT.add(new Pokemon(5, "charmelion", "badURL", new String[]{Type.FIRE.toString(), Type.ELECTRIC.toString()}, null));
		pokemonT.add(new Pokemon(6, "chartsizard", "badURL", new String[]{Type.ELECTRIC.toString()}, null));
		pokemonT.add(new Pokemon(7, "squirtle", "badURL", new String[]{Type.BUG.toString(), Type.FAIRY.toString()}, null));
		pokemonT.add(new Pokemon(8, "wartortle", "badURL", new String[]{Type.BUG.toString(), Type.FAIRY.toString()}, null));
		pokemonT.add(new Pokemon(9, "blastoise", "badURL", new String[]{Type.BUG.toString()}, null));
		pokemonT.add(new Pokemon(10, "caterpie", "badURL", new String[]{Type.PSYCHIC.toString(), Type.FAIRY.toString(), Type.ICE.toString()}, null));
		pokemonT.add(new Pokemon(11, "metapod", "badURL", new String[]{Type.DARK.toString(), Type.FAIRY.toString()}, null));
		pokemonT.add(new Pokemon(12, "butterfree", "badURL", new String[]{Type.DRAGON.toString(), Type.FAIRY.toString()}, null));
		pokemonT.add(new Pokemon(13, "weedle", "badURL", new String[]{Type.DARK.toString(), Type.FAIRY.toString()}, null)); 
		
	}

	public List<Trainer> getTrainersT() {
		return trainersT;
	}

	public List<Pokemon> getPokemonT() {
		return pokemonT;
	}
	
	public Trainer getTrainer(int i){
		return trainersT.get(i); 
	}
	
	public Pokemon getPokemon(int i){
		return pokemonT.get(i); 
	}
}
