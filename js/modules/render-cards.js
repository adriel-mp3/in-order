import { kanbanArray } from "./cards-data.js";
import { addCardDragEvents, addCardDropdownEvents } from "./kanban-cards-events.js";
import { createCardComponent } from "./create-card.js";

export function renderData() {
  const kanbans = document.querySelectorAll('.cards-wrapper');
  kanbanArray.forEach((subarray, index) => {
    kanbans[index].innerHTML = "";
    subarray.forEach((obj) => {
      kanbans[index].innerHTML += createCardComponent(obj);
    });
  });
}

export function addEvents() {
  const cards = document.querySelectorAll(".card-wrapper");
  cards.forEach((card) => {
    addCardDragEvents(card);
    addCardDropdownEvents(card);
  });
}

export function getKanbanData() {
  const kanbans = document.querySelectorAll(".cards-wrapper");
  const kanbanData = [];
  kanbans.forEach((kanban) => {
    const cards = kanban.querySelectorAll(".card-wrapper");
    const cardData = [];

    cards.forEach((card) => {
      const title = card.querySelector(".card-description").textContent;
      const date = card.querySelector(".card-date").innerText;
      const priorityClass = card.querySelector(".card-status").innerText.toLowerCase();
      const priorityName = card.querySelector(".card-status").innerText;
      cardData.push({ title, date, priorityClass, priorityName });
    });

    kanbanData.push(cardData);
  });
  return kanbanData;
}
