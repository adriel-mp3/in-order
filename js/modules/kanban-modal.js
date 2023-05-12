import { newCardData } from "./cards-data.js";
import { removeModalTitleSpanError } from "./kanban-inputs-validation.js";

const modal = document.querySelector('[data-modal="content"]');
const closeModalBtn = document.querySelector('[data-modal="close"]');
const addCardBtns = document.querySelectorAll('[data-modal="open"]');

function openModal(index) {
  modal.classList.add("active");
  newCardData.index = index;
}

export function closeKanbanModal() {
  modal.classList.remove("active");
}

function handleClickCloseModal(event) {
  event.preventDefault();
  if (event.target === this) {
    removeModalTitleSpanError();
    closeKanbanModal();
  }
}

closeModalBtn.addEventListener("click", handleClickCloseModal);
modal.addEventListener("click", handleClickCloseModal);
addCardBtns.forEach((button, index) =>
  button.addEventListener("click", () => openModal(index))
);
