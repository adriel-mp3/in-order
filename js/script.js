import { validateKanbanTitleInput } from "./modules/kanbanTitleValidation.js";
import { createGreetingMessage } from "./modules/displayGreetingMessage.js";
import { kanbanDragAndDrop } from "./modules/kanbanDragNDrop.js";

validateKanbanTitleInput();
createGreetingMessage();
kanbanDragAndDrop();
