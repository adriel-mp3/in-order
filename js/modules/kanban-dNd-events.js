import { verifyHasCards } from './cards-functions.js';

const dragItems = document.querySelectorAll('[data-drag="item"]');
const dragZones = document.querySelectorAll('[data-drag="zone"]');

export function addCardDragEvents(element) {
  element.addEventListener('dragstart', handleDragStart);
  element.addEventListener('dragend', handleDragEnd);
  element.addEventListener('drag', handleDrag);
}

// drag items calbacks

export function handleDragStart() {
  this.setAttribute('data-drag', 'dragging');
};

export function handleDrag() {
  verifyHasCards();
};

export function handleDragEnd() {
  this.removeAttribute('data-drag', 'dragging');
};

// drag items events

dragItems.forEach((dragItem) => {
  dragItem.addEventListener('dragstart', handleDragStart);
})

dragItems.forEach((dragItem) => {
  dragItem.addEventListener('dragend', handleDragEnd);
})

dragItems.forEach((dragItem) => {
  dragItem.addEventListener('drag', handleDrag);
})

// drag zone callbacks

function handleDragEnter() {
  console.log('dragEnter')
}

function handleDragOver(event) {
  event.preventDefault()
  console.log('over');
}

function handleDragLeave() {
  const elementDragged = document.querySelector('[data-drag="dragging"]');
  this.appendChild(elementDragged);
}

function handleDragDrop() {
  verifyHasCards();
}

// drag zone events

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





