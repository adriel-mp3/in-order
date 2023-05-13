import { verifyHasCards } from './cards-functions.js';

const dragItems = document.querySelectorAll('[data-drag="item"]');
const dragZones = document.querySelectorAll('[data-drag="zone"]');

// drag items callbacks and listeners 

export function handleDragStart() {
  this.setAttribute('data-drag', 'dragging');
};

export function handleDrag() {
  verifyHasCards();
};

export function handleDragEnd() {
  this.removeAttribute('data-drag', 'dragging');
};

dragItems.forEach((dragItem) => {
  dragItem.addEventListener('dragstart', handleDragStart);
})

dragItems.forEach((dragItem) => {
  dragItem.addEventListener('dragend', handleDragEnd);
})

dragItems.forEach((dragItem) => {
  dragItem.addEventListener('drag', handleDrag);
})

// drag zone callbacks and listeners 

function handleDragEnter() {
}

function handleDragOver(event) {
  event.preventDefault()
}

function handleDragLeave() {
  const elementDragged = document.querySelector('[data-drag="dragging"]');
  this.appendChild(elementDragged);
}

function handleDragDrop() {
  verifyHasCards();
}

dragZones.forEach((dragZone) => {
  dragZone.addEventListener('dragenter', handleDragEnter);
})

dragZones.forEach((dragZone) => {
  dragZone.addEventListener('dragleave', handleDragLeave);
})

dragZones.forEach((dragZone) => {
  dragZone.addEventListener('dragover', handleDragOver);
})

dragZones.forEach((dragZone) => {
  dragZone.addEventListener('drop', handleDragDrop);
})

export function addCardDragEvents(element) {
  element.addEventListener('dragstart', handleDragStart);
  element.addEventListener('dragend', handleDragEnd);
  element.addEventListener('drag', handleDrag);
  element.addEventListener('drop', handleDragDrop);
}

// dropdown callbacks and listeners 

export function addCardDropdownEvents(element) {
  const dropdownOptions = element.querySelector('[data-dropdown="open-btn"]');
  const trashBtn = element.querySelector('[data-dropdown="trash-btn"]');
  dropdownOptions.addEventListener("click", activeDropdown);
  trashBtn.addEventListener("click", removeCard);
}





