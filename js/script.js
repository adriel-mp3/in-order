import { createGreetingMessage } from "./modules/displayGreetingMessage.js";
import { validateKanbanTitleInput } from "./modules/kanbanInputsValidation.js";
import { kanbanModalCards } from "./modules/kanbanModalCards.js";
import { cardDropdownOptions } from "./modules/cardDropdownOptions.js";
import { verifyHasCards } from './modules/kanbanDragNDrop.js';

createGreetingMessage();
validateKanbanTitleInput();
verifyHasCards();
kanbanModalCards();
cardDropdownOptions();