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

  //könnte man auch ohne machen, indem man direkt data.result.forEach macht
  const charactersArray = data.results;

  // Wir verarbeiten Data.results (Data.results ist ein Array) - 
  //das Wort arrayEntry bezieht sich auf jeden einzelnen Eintrag (der Befehl wird also bei 20 Einträgen 20 mal ausgeführt )
  charactersArray.forEach(arrayEntry => {
    // wir benutzen die function "createCharacterCard", die wir uns importiert haben
    // und geben der Funktion arrayEntry mit
    const newCard = createCharacterCard(arrayEntry);
    cardContainer.append(newCard);

  });

}

fetchCharacters();
