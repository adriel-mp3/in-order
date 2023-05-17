import { getModalCardData, kanbanArray, kanbanData, updateData } from "./cards-data.js";
import { validateModal } from "./kanban-inputs-validation.js";
import { prepareBoard } from "./cards-functions.js";
import { closeKanbanModal } from "./kanban-modal.js";

export function createCardComponent({
  title,
  date,
  priorityClass,
  priorityName,
}) {
  const card = `
  <div class="card-wrapper b-r5" draggable="true" data-drag="item"> 
    <div class="card-config">
    <span class="card-status ${priorityClass} font-1-s b-r5">${priorityName}</span>
    <button class="open-btn" data-dropdown="open-btn">
      <img src="./img/trash.svg" alt="Edit button">
      <ul class="card-options b-r5" data-dropdown="content">
        <li>
          <a href="#" class="font-1-s color-red2" data-dropdown="trash-btn">Remove card</a>
        </li>
        <li>
          <a href="#" class="font-1-s color-p6">Cancel</a>
        </li>
      </ul>
    </button>
    </div>
    <p class="card-description font-1-m color-p2">${title}</p>
    <span class="card-date font-1-s color-p2">${date}</span> 
  </div>`;
  return card;
}

const kanbans = document.querySelectorAll(".cards-wrapper");

export function submitModal() {
  const kanbanIndexActive = [...kanbans].findIndex(wrapper => wrapper.hasAttribute('data-wrapper', 'active'));
  const isValidate = validateModal();
  const cardData = getModalCardData();
  
  if (isValidate) {
    kanbanArray[kanbanIndexActive].push(cardData);
    updateData();
    prepareBoard();
    closeKanbanModal();
  }
}
