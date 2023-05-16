import { removeModalTitleSpanError } from "./kanban-inputs-validation.js";

const modal = document.querySelector('[data-modal="content"]');
const closeModalBtn = document.querySelector('[data-modal="close"]');
const addCardBtns = document.querySelectorAll('[data-modal="open"]');
const cardWrappers = document.querySelectorAll('.cards-wrapper');

function openModal(index) {
  modal.classList.add("active");
  cardWrappers.forEach((wrapper) => wrapper.removeAttribute('data-wrapper','active'))
  cardWrappers[index].setAttribute('data-wrapper','active');
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
