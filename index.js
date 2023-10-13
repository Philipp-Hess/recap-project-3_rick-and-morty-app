import { createCharacterCard } from "./components/card/card.js";
import {
  previousPage,
  nextPage,
  newPage,
} from "./components/nav-pagination/nav-pagination.js";

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
export let maxPage = 1;
export let page = 1;
let searchQuery = "";

async function fetchCharacters() {
  const url = `https://rickandmortyapi.com/api/character?page=${page}`;
  const response = await fetch(url);

  // .json() wandelt json in javascript Objekte um.
  // await = wartet bis response.json() fertig ist. DANN legt er die Daten in Data ab
  const data = await response.json();

  //könnte man auch ohne machen, indem man direkt data.result.forEach macht
  const charactersArray = data.results;

  // Wir verarbeiten Data.results (Data.results ist ein Array) -
  //das Wort arrayEntry bezieht sich auf jeden einzelnen Eintrag (der Befehl wird also bei 20 Einträgen 20 mal ausgeführt )
  charactersArray.forEach((arrayEntry) => {
    // wir benutzen die function "createCharacterCard", die wir uns importiert haben
    // und geben der Funktion arrayEntry mit
    const newCard = createCharacterCard(arrayEntry);
    cardContainer.append(newCard);
  });
}
// Für den Erstaufruf der Seite
fetchCharacters();

prevButton.addEventListener("click", () => {
  previousPage();
  console.log(newPage);
});

nextButton.addEventListener("click", () => {
  nextPage();
  console.log(newPage);
});

// it is prevented that the page index could go higher than the max page index or below 1
// the page index is increased / decreased
// the fetchCharacters function is called
