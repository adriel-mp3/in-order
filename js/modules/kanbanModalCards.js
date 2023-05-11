import { handleDragEnd, handleDrag, handleDragStart, verifyHasItems} from './kanbanDragNDrop.js';
import { activeDropdown, removeCard} from './cardDropdownOptions.js';

export function kanbanModalCards() {
  
}

const newCard = {};
const kanban = document.querySelectorAll('.cards-wrapper');
const modal = document.querySelector('[data-modal="content"]')
const addCardBtns = document.querySelectorAll('[data-modal="open"]');
const closeModalBtn = document.querySelector('[data-modal="close"]');
const submitModalBtn = document.querySelector('[data-modal="submit"]');
const cardTitleElement = document.querySelector('#card-name');
const inputSpanError = document.querySelector('.modal-error');

function openModal(index) {
  modal.classList.add('active');
  newCard.index = index;
}

function closeModal(event) {
  event.preventDefault();
  if(event.target === this) {
    modal.classList.remove('active');
    inputSpanError.classList.remove('active');
  }
}

function validateModal() {
  const titleContent = cardTitleElement.value
  
  if (titleContent.length >= 1 && titleContent !== undefined) {
    inputSpanError.classList.remove('active');
    addCardToKanban();
    addCardOptions();
    cardTitleElement.value = "";
  } else {
    inputSpanError.classList.add('active');
  }
}

function createCard() {  
  const newCardElement = document.createElement('div');
  newCardElement.classList.add('card-content','b-r5');
  newCardElement.setAttribute('draggable','true');
  newCardElement.setAttribute('data-drag','item');
  getCardData();
  addCardDragEvents(newCardElement);
  newCardElement.innerHTML = `
  <div class="card-config">
    <span class="card-status ${newCard.priorityClass} font-1-s b-r5">${newCard.priorityName}</span>
    <button class="open-btn" data-dropdown="open-btn">
      <img src="./img/trash.svg" alt="Edit button">
      <ul class="card-options b-r5" data-dropdown="content">
        <li>
        <a href="#" class="font-1-s color-red2" data-dropdown="trash-btn">Remove card<a>
        </li>
        <li>
        <a href="#" class="font-1-s color-p6">Cancel</a></li>
      </ul>
    </button>
  </div>
  <p class="card-description font-1-m color-p2">${newCard.title}</p>
  <span class="font-1-s color-p2">${newCard.date}</span> `;
 
  return newCardElement;
}

function getCardData() {
  const now = new Date();
  const month = now.getMonth();
  const day = now.getUTCDate();
  const year = now.getFullYear();
  const cardPriorityElement = document.querySelector('#card-priority');

  newCard.date = `${year}/${month}/${day}`;
  newCard.title = cardTitleElement.value;
  newCard.priorityClass = cardPriorityElement.value;
  newCard.priorityName = newCard.priorityClass.charAt(0).toUpperCase() + newCard.priorityClass.slice(1);
  return newCard;
}

function addCardDragEvents(element) {
  element.addEventListener('dragstart', handleDragStart);
  element.addEventListener('dragend', handleDragEnd);
  element.addEventListener('drag', handleDrag);
}

function addCardOptions() {
  const dropdownOptions = kanban[newCard.index].lastChild.querySelector('[data-dropdown="open-btn"]');
  const trashBtn = kanban[newCard.index].lastChild.querySelector('[data-dropdown="trash-btn"]');
  dropdownOptions.addEventListener('click', activeDropdown);
  trashBtn.addEventListener('click', removeCard);
}

function addCardToKanban() {
  const card = createCard();
  kanban[newCard.index].appendChild(card);
  verifyHasItems();
  modal.classList.remove('active');
}

addCardBtns.forEach((button, index) => button.addEventListener('click', () => openModal(index)));

closeModalBtn.addEventListener('click', closeModal);
modal.addEventListener('click', closeModal);
submitModalBtn.addEventListener('click', validateModal);
  