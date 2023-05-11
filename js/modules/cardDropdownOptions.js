import { verifyHasItems } from './kanbanDragNDrop.js';

export function cardDropdownOptions() {
  
}

const dropdownBtns = document.querySelectorAll('[data-dropdown="open-btn"]');
const trashBtns = document.querySelectorAll('[data-dropdown="trash-btn"]')

export function activeDropdown(event) {
  this.classList.toggle('active');
}

export function removeCard(event) {
  if (event.currentTarget === this) {
    event.currentTarget.closest('.card-content').remove();
    verifyHasItems();
  }
}

dropdownBtns.forEach((button) => button.addEventListener('click', activeDropdown));

trashBtns.forEach((button) => button.addEventListener('click', removeCard));
