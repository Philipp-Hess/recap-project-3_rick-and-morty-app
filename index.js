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
let maxPage = 1;
let page = 1;
let searchQuery = "";

async function fetchCharacters() {
  //Lösche alles innerhalb der Liste aka cardContainer
  cardContainer.innerHTML = "";

  const url = `https://rickandmortyapi.com/api/character?page=${page}&name=${searchQuery}`;
  const response = await fetch(url);

  // .json() wandelt json in javascript Objekte um.
  // await = wartet bis response.json() fertig ist. DANN legt er die Daten in Data ab
  const data = await response.json();

  //falls der gesuchte Charakter nicht da ist wird die Fehlermeldung ausgegeben und fetch unterbrochen
  if (data.error) {
    cardContainer.append(data.error);
    return;
  }

  /*
  Aus der Anfrage der API wird unter Info die maximale Seitenanzahl 
  geholt und gleich in maxPage hinterlegt bzw. überschrieben
  */
  maxPage = data.info.pages;

  //Aktualisiert die Seitenanzeige (aktuelle Seite / maximale Seitenanzahl)
  pagination.textContent = `${page} / ${maxPage}`;

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

// Für den Erstaufruf der Seite für Testing bzw. so haben wir am Anfang uns alle Charaktere geholt
//fetchCharacters();

/*
Wenn auf Button "previous" geklickt wird geprüft welche Seite page hat.
Wenn die Seite 1 ist wird der Eventlistener unterbrochen.
Wenn die Seite nicht 1 ist wird die Seitenanzahl erhöht und
fetchCharacters() ausgeführt.
*/
prevButton.addEventListener("click", () => {
  if (page === 1) {
    return;
  }
  //Dekrement
  page--;
  fetchCharacters();
});

nextButton.addEventListener("click", () => {
  if (page === maxPage) {
    return;
  }
  //Inkrement
  page++;
  fetchCharacters();
});

searchBar.addEventListener("submit", (event) => {
  event.preventDefault();
  searchQuery = event.target.elements.query.value;
  fetchCharacters();
});
