import { createGreetingMessage } from "./modules/displayGreetingMessage.js";
import { validateKanbanTitleInput } from "./modules/kanbanTitleValidation.js";
import { kanbanDragAndDrop } from "./modules/kanbanDragNDrop.js";
import { kanbanModalCards } from "./modules/kanbanModalCards.js";

createGreetingMessage();
validateKanbanTitleInput();
kanbanDragAndDrop();
kanbanModalCards();
