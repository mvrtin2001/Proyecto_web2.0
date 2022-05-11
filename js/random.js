const baseUrl = `https://pokeapi.co/api/v2/pokemon/`;
const pokemon = document.getElementById('nombrePokemon');
const buttonPokemon = document.getElementById('buscarPokemon');
const buttonClear = document.getElementById('eliminarPokemon');
const appNode = document.getElementById('app');

buttonPokemon.addEventListener('click' , insertPokemon);
buttonPokemon.addEventListener('touchstart' , insertPokemon);

buttonClear.addEventListener('click' , deletePokemons);
buttonClear.addEventListener('touchstart' , deletePokemons);

async function insertPokemon() {
  try {
    const res = await fetch(`${baseUrl}${pokemon.value.toLocaleLowerCase()}`)
    const pokemonDataJSON = await res.json()

    const allItems = [];
    const result = []; 

    for (let pokemonInfo in pokemonDataJSON) { 
      result.push([pokemonInfo , pokemonDataJSON[pokemonInfo]]);
    }

    console.table(result);


    //*Crear imagen
    const pokemonImage = document.createElement('img');
    pokemonImage.src = result[14][1].front_default;

    //*Nombre de pokemon e ID
    const pokemonName = document.createElement('h2');
    pokemonName.innerText = `Name: ${result[10][1]} - ID: ${result[6][1]}`;

    //*Tipo de pokemon
    const pokemonType = document.createElement('h2');
    pokemonType.innerText = `Type: ${result[16][1][0].type.name}`; 

    //* Vida Pokemon
    const hp = document.createElement('p');
    hp.innerText = `HP: ${result[15][1][0].base_stat}`; 
    hp.classList.add('pokemonStats');

    //* Pder de ataque
    const attack = document.createElement('p');
    attack.innerText = `Attack: ${result[15][1][1].base_stat}`;
    attack.classList.add('pokemonStats');

    //* Defensa Pokemon
    const defense = document.createElement('p');
    defense.innerText = `Defense: ${result[15][1][2].base_stat}`;
    defense.classList.add('pokemonStats');

    //* Ataque Especial
    const specialAttack = document.createElement('p');
    specialAttack.innerText = `Special Attack: ${result[15][1][3].base_stat}`;
    specialAttack.classList.add('pokemonStats');

    //* Defensa Especial
    const specialDefense = document.createElement('p');
    specialDefense.innerText = `Special Defense: ${result[15][1][4].base_stat}`;
    specialDefense.classList.add('pokemonStats');

    //* Velocidad
    const speed = document.createElement('p');
    speed.innerText = `Speed: ${result[15][1][5].base_stat}`;
    speed.classList.add('pokemonStats');

    //* Contenedor Habilidades
    const stats = document.createElement('div');
    stats.append(hp, attack, defense, specialAttack, specialDefense, speed);
    stats.classList.add('pokemonStatsContainer');

    //*Crear contenedor
    const container = document.createElement('div');
    container.append(pokemonImage , pokemonName ,pokemonType, stats);
    container.classList.add('container');

    allItems.push(container);

    appNode.append(...allItems);

  } catch (error) {
    alert("Erroooooor!!!! Este pokemon no existe!!!!");
  }
}

function deletePokemons() {
  let allPokemon = appNode.childNodes;
  allPokemon = Array.from(allPokemon);

  allPokemon.forEach(pokemon => {
    pokemon.remove(pokemon);
  });
}
