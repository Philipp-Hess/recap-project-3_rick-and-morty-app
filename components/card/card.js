export function createCharacterCard(cardData) {
  const newCard = document.createElement("li");
  newCard.classList.add("card");
  newCard.innerHTML = `<div class="card__image-container">
    <img
        class="card__image"
        src="${cardData.image}"
        alt="${cardData.name}"
    />
    <div class="card__image-gradient"></div>
    </div>
    <div class="card__content">
    <h2 class="card__title">${cardData.name}</h2>
    <dl class="card__info">
        <dt class="card__info-title">Status</dt>
        <dd class="card__info-description">${cardData.status}</dd>
        <dt class="card__info-title">Type</dt>
        <dd class="card__info-description">${cardData.type}</dd>
        <dt class="card__info-title">Occurrences</dt>
        <dd class="card__info-description">${cardData.episode.length}</dd>
    </dl>
    </div>`;
  console.log(newCard);
  return newCard;
}
