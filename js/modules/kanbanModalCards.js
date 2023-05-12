import { verifyHasCards } from './kanbanDragNDrop.js';
import { activeDropdown, removeCard } from './cardDropdownOptions.js';
import { closeKanbanModal } from './kanbanModal.js';
import { newCardData } from "./cardsData.js";
import { renderCard } from "./kanbanCreateCard.js";
import { validateModal } from "./kanbanInputsValidation.js";

export function kanbanModalCards() {
  
}
const cardsWrapper = document.querySelectorAll('.cards-wrapper');
// modal buttons
const submitModalBtn = document.querySelector('[data-modal="submit"]');
// inputs
export function insertCard() {
  const isValidate = validateModal();
  if (isValidate) {
    addCardToKanban();
    addCardOptions();
    closeKanbanModal();
  } 
}

function addCardOptions() {
    const dropdownOptions = cardsWrapper[newCardData.index].lastChild.querySelector('[data-dropdown="open-btn"]');
    const trashBtn = cardsWrapper[newCardData.index].lastChild.querySelector('[data-dropdown="trash-btn"]');
    dropdownOptions.addEventListener('click', activeDropdown);
    trashBtn.addEventListener('click', removeCard);
  }

function addCardToKanban() {
  const card = renderCard();
  cardsWrapper[newCardData.index].appendChild(card);
  verifyHasCards();
  closeKanbanModal();
}

submitModalBtn.addEventListener('click', insertCard);
  