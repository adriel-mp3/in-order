import { getModalCardData } from "./cards-data.js";
import { addCardDragEvents, addCardDropdownEvents } from "./kanban-cards-events.js";
import { validateModal } from "./kanban-inputs-validation.js";
import { verifyHasCards, activeDropdown, removeCard } from "./cards-functions.js";
import { closeKanbanModal } from "./kanban-modal.js";

function createCardWrapper() {
  const cardWrapper = document.createElement("div");
  cardWrapper.classList.add("card-wrapper", "b-r5");
  cardWrapper.setAttribute("draggable", "true");
  cardWrapper.setAttribute("data-drag", "item");
  return cardWrapper;
}

export function createCardComponent({ title, date, priorityClass, priorityName }) {
  const cardComponent = createCardWrapper();
  const cardContent = `
  <div class="card-config">
    <span class="card-status ${priorityClass} font-1-s b-r5">${priorityName}
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
  <p class="card-description font-1-m color-p2">${title}</p>
  <span class="font-1-s color-p2">${date}</span> `;
  cardComponent.innerHTML = cardContent;
  return cardComponent;
}

export function setCardData(data) {
  const cardData = getModalCardData();
  return  data || cardData
}

const cardsWrapper = document.querySelectorAll(".cards-wrapper");

export function insertCard() {
  const isValidate = validateModal();
  const cardData = setCardData();
  const card = createCardComponent(cardData);
  const cardsWrapper = document.querySelector('[data-wrapper="active"]');
  if (isValidate) {
    addCard(card, cardsWrapper);
    closeKanbanModal();
  }
}

export function addCard(card, cardsWrapper) {
  cardsWrapper.appendChild(card);
  addCardEvents(card);
  verifyHasCards();
}


function addCardEvents(element) {
  addCardDragEvents(element);
  addCardDropdownEvents(element);
}
