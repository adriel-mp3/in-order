// export const newCardData = {
//   title: "",
//   date: `0000/00/00`,
//   priorityClass: "",
//   priorityName: "",
// };

export const kanbanData = {
  toDoCards: [
    {
      title: "Card 1",
      date: `0000/00/00`,
      priorityClass: "high",
      priorityName: "Low",
    },
    {
      title: "Card 1",
      date: `0000/00/00`,
      priorityClass: "high",
      priorityName: "Low",
    }
  ],
  pendingCards: [
    {
      title: "Card 2",
      date: `0000/00/00`,
      priorityClass: "medium",
      priorityName: "Low",
    },
  ],
  doneCards: [
    {
      title: "Card 3",
      date: `0000/00/00`,
      priorityClass: "low",
      priorityName: "Low",
    },
  ],
};

const now = new Date();
const month = now.getMonth();
const day = now.getUTCDate();
const year = now.getFullYear();
const cardTitleElementInput = document.querySelector("#card-name");
const cardPriorityElementInput = document.querySelector("#card-priority");

export function getModalCardData() {
  newCardData.date = `${year}/${month}/${day}`;
  newCardData.title = cardTitleElementInput.value;
  newCardData.priorityClass = cardPriorityElementInput.value;
  newCardData.priorityName =
  newCardData.priorityClass.charAt(0).toUpperCase() +
  newCardData.priorityClass.slice(1);
  return newCardData;
}
