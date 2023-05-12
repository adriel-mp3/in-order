import { createGreetingMessage } from "./modules/display-greetings.js";
import { validateKanbanTitleInput } from "./modules/kanban-inputs-validation.js";
import { verifyHasCards } from "./modules/cards-functions.js";

createGreetingMessage();
validateKanbanTitleInput();
verifyHasCards();