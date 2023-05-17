import { prepareBoard, removeCard } from './cards-functions.js';
import { activeDropdown } from './cards-functions.js';
import { kanbanArray, updateData } from './cards-data.js';

const dragItems = document.querySelectorAll('[data-drag="item"]');
const dragZones = document.querySelectorAll('[data-drag="zone"]');

// drag items callbacks and listeners 
export function handleDragStart() {
  this.setAttribute('data-drag', 'dragging');
};

export function handleDrag() {
  
};

export function handleDragEnd() {
  this.removeAttribute('data-drag', 'dragging');
  updateData();
  prepareBoard();
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
  event.preventDefault();
}

function handleDragLeave() {

}
  

function handleDragDrop(event) {
  event.stopPropagation();
  const cardDragging = document.querySelector('[data-drag="dragging"]');
  const kanbanActiveIndex = parseInt(cardDragging.closest('.cards-wrapper').dataset.kanban);
  const kanbanTargetIndex = [...kanbans].indexOf(this.closest('.cards-wrapper'))
  const cardsInKanban = document.querySelectorAll(`[data-kanban="${kanbanActiveIndex}"] .card-wrapper`);
  const cardIndexDragging = [...cardsInKanban].indexOf(cardDragging)
  
  const droppedItem = kanbanArray[kanbanActiveIndex].splice(cardIndexDragging, 1);
  kanbanArray[kanbanTargetIndex].push(droppedItem[0]);
  updateData();
  prepareBoard();
}

const kanbans = document.querySelectorAll('.cards-wrapper');

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
  element.addEventListener('dragover', handleDragOver);
  element.addEventListener('dragend', handleDragEnd);
  element.addEventListener('dragleave', handleDragLeave);
  element.addEventListener('dragenter', handleDragEnter);
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





