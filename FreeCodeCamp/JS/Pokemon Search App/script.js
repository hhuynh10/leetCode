const input = document.getElementById("search-input");
const button = document.getElementById("search-button");
const nameDisplay = document.getElementById("pokemon-name");
const idDisplay = document.getElementById("pokemon-id");
const weightDisplay = document.getElementById("weight");
const heightDisplay = document.getElementById("height");
const typesDisplay = document.getElementById("types");
const hpDisplay = document.getElementById("hp");
const attackDisplay = document.getElementById("attack");
const defenseDisplay = document.getElementById("defense");
const spAttackDisplay = document.getElementById("special-attack");
const spDefenseDisplay = document.getElementById("special-defense");
const speedDisplay = document.getElementById("speed");
const imgDisplay = document.getElementById("img");
const image = document.getElementById("image");

let pokemonData = null;

const fetchData = async () => {
  try {
    const res = await fetch(
      `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${input.value}`
    );
    const data = await res.json();
    pokemonData = data;
    displayPokemon(pokemonData);
  } catch (err) {
    console.error(err);
    alert("Pokémon not found");
    input.value = "";
  }
};

const displayPokemon = (pokeStats) => {
  image.classList.remove("hide");
  nameDisplay.textContent = pokeStats.name;
  idDisplay.textContent = pokeStats.id;
  nameDisplay.style.textTransform = "capitalize"
  weightDisplay.textContent = pokeStats.weight;
  heightDisplay.textContent = pokeStats.height;
  typesDisplay.innerHTML = "";
  pokeStats.types.forEach((element) => {
    typesDisplay.innerHTML += `<button class="btn ${element.type.name}">${element.type.name}</button>`;
  });
  hpDisplay.textContent = pokeStats.stats[0].base_stat;
  attackDisplay.textContent = pokeStats.stats[1].base_stat;
  defenseDisplay.textContent = pokeStats.stats[2].base_stat;
  spAttackDisplay.textContent = pokeStats.stats[3].base_stat;
  spDefenseDisplay.textContent = pokeStats.stats[4].base_stat;
  speedDisplay.textContent = pokeStats.stats[5].base_stat;
  imgDisplay.src = pokeStats.sprites.front_default;

  input.value = "";
};

button.addEventListener("click", fetchData);
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    fetchData();
  }
});
