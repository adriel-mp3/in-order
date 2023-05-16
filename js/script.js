import { kanbanData } from "./modules/cards-data.js";
import { createGreetingMessage } from "./modules/display-greetings.js";
import { validateKanbanTitleInput } from "./modules/kanban-inputs-validation.js";
import { renderData, addEvents } from "./modules/render-cards.js";
import { verifyHasCards } from "./modules/cards-functions.js";

renderData();
addEvents();
verifyHasCards();
createGreetingMessage();
validateKanbanTitleInput();