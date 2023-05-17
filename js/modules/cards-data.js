export const kanbanData = {
  toDoCards: [
  
  ],
  
  pendingCards: [
   
  ],
  doneCards: [
  
  ],
};

const kanbansKeys = Object.keys(kanbanData);

export const kanbanArray = kanbansKeys.map((kanban) => kanbanData[kanban]);
export const kanbans = document.querySelectorAll('.cards-wrapper');
export const cards = document.querySelectorAll('.card-wrapper');

const now = new Date();
const month = now.getMonth() + 1;
const day = now.getUTCDate();
const year = now.getFullYear();

export function getModalCardData() {
  const cardTitleElementInput = document.querySelector("#card-name");
  const cardPriorityElementInput = document.querySelector("#card-priority");
  const date = `${year}/${month}/${day}`;
  const title = cardTitleElementInput.value;
  const priorityClass = cardPriorityElementInput.value;
  const priorityName = priorityClass.charAt(0).toUpperCase() + priorityClass.slice(1);

  return {
    title,
    date,
    priorityClass,
    priorityName,
  };
}

export function getCardData(element) {
  const title = element.querySelector('.card-description').innerText;
  const date = element.querySelector('.card-date').innerText;
  const priorityName = element.querySelector('.card-status').innerText;
  const priorityClass = priorityName.toLowerCase();
  return {
    title,
    date,
    priorityName,
    priorityClass
  };
}