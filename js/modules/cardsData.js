export const newCardData = {
  index: 0,
  date: `0000/00/00`,
  title: "",
  priorityClass: "",
  priorityName: "",
};

const now = new Date();
const month = now.getMonth();
const day = now.getUTCDate();
const year = now.getFullYear();
const cardTitleElementInput = document.querySelector("#card-name");
const cardPriorityElementInput = document.querySelector("#card-priority");

export function getNewCardData() {
  newCardData.date = `${year}/${month}/${day}`;
  newCardData.title = cardTitleElementInput.value;
  newCardData.priorityClass = cardPriorityElementInput.value;
  newCardData.priorityName =
    newCardData.priorityClass.charAt(0).toUpperCase() +
    newCardData.priorityClass.slice(1);
  return newCardData;
}
