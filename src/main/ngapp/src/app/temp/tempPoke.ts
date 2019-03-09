import { Pokemon } from '../models/Pokemon';

export const POKEMON: Pokemon[] = [
  { id: 1,
     name: 'bulbasaur',
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
  types: ["poison", "grass"],
  stats: [
    {
      "base_stat": 45,
      "effort": 0,
      "stat": {
        "name": "speed",
        "url": "https://pokeapi.co/api/v2/stat/6/"
      }
    },
    {
      "base_stat": 65,
      "effort": 0,
      "stat": {
        "name": "special-defense",
        "url": "https://pokeapi.co/api/v2/stat/5/"
      }
    },
    {
      "base_stat": 65,
      "effort": 1,
      "stat": {
        "name": "special-attack",
        "url": "https://pokeapi.co/api/v2/stat/4/"
      }
    },
    {
      "base_stat": 49,
      "effort": 0,
      "stat": {
        "name": "defense",
        "url": "https://pokeapi.co/api/v2/stat/3/"
      }
    },
    {
      "base_stat": 49,
      "effort": 0,
      "stat": {
        "name": "attack",
        "url": "https://pokeapi.co/api/v2/stat/2/"
      }
    },
    {
      "base_stat": 45,
      "effort": 0,
      "stat": {
        "name": "hp",
        "url": "https://pokeapi.co/api/v2/stat/1/"
      }
    }
  ],
  count: 2
},
{ id: 2,
    name: 'ivysaur',
 image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/2.png",
 types: ["poison", "grass"],
 stats: [
   {
     "base_stat": 45,
     "effort": 0,
     "stat": {
       "name": "speed",
       "url": "https://pokeapi.co/api/v2/stat/6/"
     }
   },
   {
     "base_stat": 65,
     "effort": 0,
     "stat": {
       "name": "special-defense",
       "url": "https://pokeapi.co/api/v2/stat/5/"
     }
   },
   {
     "base_stat": 65,
     "effort": 1,
     "stat": {
       "name": "special-attack",
       "url": "https://pokeapi.co/api/v2/stat/4/"
     }
   },
   {
     "base_stat": 63,
     "effort": 0,
     "stat": {
       "name": "defense",
       "url": "https://pokeapi.co/api/v2/stat/3/"
     }
   },
   {
     "base_stat": 62,
     "effort": 0,
     "stat": {
       "name": "attack",
       "url": "https://pokeapi.co/api/v2/stat/2/"
     }
   },
   {
     "base_stat": 60,
     "effort": 0,
     "stat": {
       "name": "hp",
       "url": "https://pokeapi.co/api/v2/stat/1/"
     }
   }
 ],
 count: 3
},
{ id: 3,
    name: 'venusaur',
 image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/3.png",
 types: ["poison", "grass"],
 stats: [
   {
     "base_stat": 45,
     "effort": 0,
     "stat": {
       "name": "speed",
       "url": "https://pokeapi.co/api/v2/stat/6/"
     }
   },
   {
     "base_stat": 65,
     "effort": 0,
     "stat": {
       "name": "special-defense",
       "url": "https://pokeapi.co/api/v2/stat/5/"
     }
   },
   {
     "base_stat": 65,
     "effort": 1,
     "stat": {
       "name": "special-attack",
       "url": "https://pokeapi.co/api/v2/stat/4/"
     }
   },
   {
     "base_stat": 83,
     "effort": 0,
     "stat": {
       "name": "defense",
       "url": "https://pokeapi.co/api/v2/stat/3/"
     }
   },
   {
     "base_stat": 82,
     "effort": 0,
     "stat": {
       "name": "attack",
       "url": "https://pokeapi.co/api/v2/stat/2/"
     }
   },
   {
     "base_stat": 80,
     "effort": 0,
     "stat": {
       "name": "hp",
       "url": "https://pokeapi.co/api/v2/stat/1/"
     }
   }
 ],
 count: 5
},
{ id: 4,
    name: 'charmander',
 image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/4.png",
 types: ["fire"],
 stats: [
   {
     "base_stat": 45,
     "effort": 0,
     "stat": {
       "name": "speed",
       "url": "https://pokeapi.co/api/v2/stat/6/"
     }
   },
   {
     "base_stat": 65,
     "effort": 0,
     "stat": {
       "name": "special-defense",
       "url": "https://pokeapi.co/api/v2/stat/5/"
     }
   },
   {
     "base_stat": 65,
     "effort": 1,
     "stat": {
       "name": "special-attack",
       "url": "https://pokeapi.co/api/v2/stat/4/"
     }
   },
   {
     "base_stat": 43,
     "effort": 0,
     "stat": {
       "name": "defense",
       "url": "https://pokeapi.co/api/v2/stat/3/"
     }
   },
   {
     "base_stat": 52,
     "effort": 0,
     "stat": {
       "name": "attack",
       "url": "https://pokeapi.co/api/v2/stat/2/"
     }
   },
   {
     "base_stat": 39,
     "effort": 0,
     "stat": {
       "name": "hp",
       "url": "https://pokeapi.co/api/v2/stat/1/"
     }
   }
 ],
 count: 5
}
,
{ id: 5,
    name: 'charmeleon',
 image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/5.png",
 types: ["fire"],
 stats: [
   {
     "base_stat": 45,
     "effort": 0,
     "stat": {
       "name": "speed",
       "url": "https://pokeapi.co/api/v2/stat/6/"
     }
   },
   {
     "base_stat": 65,
     "effort": 0,
     "stat": {
       "name": "special-defense",
       "url": "https://pokeapi.co/api/v2/stat/5/"
     }
   },
   {
     "base_stat": 65,
     "effort": 1,
     "stat": {
       "name": "special-attack",
       "url": "https://pokeapi.co/api/v2/stat/4/"
     }
   },
   {
     "base_stat": 58,
     "effort": 0,
     "stat": {
       "name": "defense",
       "url": "https://pokeapi.co/api/v2/stat/3/"
     }
   },
   {
     "base_stat": 64,
     "effort": 0,
     "stat": {
       "name": "attack",
       "url": "https://pokeapi.co/api/v2/stat/2/"
     }
   },
   {
     "base_stat": 58,
     "effort": 0,
     "stat": {
       "name": "hp",
       "url": "https://pokeapi.co/api/v2/stat/1/"
     }
   }
 ],
 count: 1
}
];