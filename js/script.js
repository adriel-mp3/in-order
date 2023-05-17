import { createGreetingMessage } from "./modules/display-greetings.js";
import { validateKanbanTitleInput } from "./modules/kanban-inputs-validation.js";
import { kanbanData } from "./modules/cards-data.js";
import { prepareBoard } from "./modules/cards-functions.js";

const localStorageKanbanData = localStorage.getItem('kanbans');

const newkanbanData = JSON.stringify({
  toDoCards: [
  ],
  
  pendingCards: [
   
  ],
  doneCards: [
  
  ],
});

if (localStorageKanbanData === null) {
  localStorage.setItem('kanbans', newkanbanData);  
}

prepareBoard();
createGreetingMessage();
validateKanbanTitleInput();
