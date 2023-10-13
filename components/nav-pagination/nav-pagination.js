import { page, maxPage } from "../../index.js";
export let newPage = 0;
export function previousPage() {
  if (page === 1) {
    return;
  }
  fetchCharacters();
  newPage--;
}
export function nextPage() {
  if (maxPage === 20) {
    return;
  }
  fetchCharacters();
  newPage++;
}
