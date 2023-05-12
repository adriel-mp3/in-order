import { newCardData, getNewCardData } from "./cards-data.js";
import { addCardDragEvents } from "./kanban-dNd-events.js";
import { validateModal } from "./kanban-inputs-validation.js";
import { verifyHasCards, activeDropdown, removeCard } from "./cards-functions.js";
import { closeKanbanModal } from "./kanban-modal.js";

export function createCardWrapperElement() {
  const cardWrapper = document.createElement("div");
  cardWrapper.classList.add("card-wrapper", "b-r5");
  cardWrapper.setAttribute("draggable", "true");
  cardWrapper.setAttribute("data-drag", "item");
  return cardWrapper;
}

export function addCardContentToWrapper(cardWrapper) {
  cardWrapper.innerHTML = `
  <div class="card-config">
    <span class="card-status ${newCardData.priorityClass} font-1-s b-r5">${newCardData.priorityName}
    </span>
    <button class="open-btn" data-dropdown="open-btn">
      <img src="./img/trash.svg" alt="Edit button">
    <ul class="card-options b-r5" data-dropdown="content">
      <li>
        <a href="#" class="font-1-s color-red2" data-dropdown="trash-btn">Remove card</a>
      </li>
      <li>
        <a href="#" class="font-1-s color-p6">Cancel</a>
      </li>
    </ul>
    </button>
  </div>
  <p class="card-description font-1-m color-p2">${newCardData.title}</p>
  <span class="font-1-s color-p2">${newCardData.date}</span> `;
  return cardWrapper;
}

export function renderCard() {
  const newCardWrapper = createCardWrapperElement();
  getNewCardData();
  addCardContentToWrapper(newCardWrapper);
  addCardDragEvents(newCardWrapper);
  return newCardWrapper;
}

export function insertCard() {
  const isValidate = validateModal();
  if (isValidate) {
    addCardToKanban();
    addCardOptions();
    closeKanbanModal();
  }
}

const cardsWrapper = document.querySelectorAll(".cards-wrapper");

export function addCardToKanban() {
  const card = renderCard();
  cardsWrapper[newCardData.index].appendChild(card);
  verifyHasCards();
  closeKanbanModal();
}

function addCardOptions() {
  const dropdownOptions = cardsWrapper[
    newCardData.index
  ].lastChild.querySelector('[data-dropdown="open-btn"]');
  const trashBtn = cardsWrapper[newCardData.index].lastChild.querySelector(
    '[data-dropdown="trash-btn"]'
  );
  dropdownOptions.addEventListener("click", activeDropdown);
  trashBtn.addEventListener("click", removeCard);
}
