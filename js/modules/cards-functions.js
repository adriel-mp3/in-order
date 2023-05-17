import { kanbanArray , kanbans, cards, updateData } from "./cards-data.js";
import { addEvents, renderData } from "./render-cards.js";
const kanbanContainer = document.querySelectorAll('[data-drag="zone"]');
  
export function verifyHasCards() {
    kanbanContainer.forEach((kanban, index) => {
      const kanbanCards = kanban.querySelectorAll('*');
      const containerIsEmpty = kanbanCards.length === 0;
      if (containerIsEmpty) {
        addEmptyStateCard(index)
      }
      else {  
        removeEmptyStateCard(index);
      }  
    })
}

const dropdownBtns = document.querySelectorAll('[data-dropdown="open-btn"]');
const trashBtns = document.querySelectorAll('[data-dropdown="trash-btn"]');

export function activeDropdown() {
  this.classList.toggle('active');
}

export function removeCard(event) {
  if (event.currentTarget === this) {
    const cardIndex = [...cards].indexOf(event.currentTarget.closest('.card-wrapper'));
    const kanbanIndex = [...kanbans].indexOf(event.currentTarget.closest('.cards-wrapper'))
    kanbanArray[kanbanIndex].splice(cardIndex, 1);
    updateData();
    prepareBoard();
  }
}

function addEmptyStateCard(index) {
  kanbanContainer[index].style.minWidth = '250px';
  kanbanContainer[index].style.padding = '20px 0';
}

function removeEmptyStateCard(index) {
  kanbanContainer[index].style.minWidth = 'initial';
  kanbanContainer[index].style.padding = '0';
}

export function prepareBoard() {
  renderData();
  addEvents();
  verifyHasCards();
}

dropdownBtns.forEach((button) => button.addEventListener('click', activeDropdown));
trashBtns.forEach((button) => button.addEventListener('click', removeCard));
