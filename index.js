import { createCharacterCard } from "./components/card/card.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 1;
const page = 1;
const searchQuery = "";



async function fetchCharacters(){
  const url = "https://rickandmortyapi.com/api/character";
  const response = await fetch(url);


  // .json() wandelt json in javascript Objekte um. 
  // await = wartet bis response.json() fertig ist. DANN legt er die Daten in Data ab
  const data = await response.json();
  console.log(data.results);
  console.log(data.results[11].gender);

}

fetchCharacters();
