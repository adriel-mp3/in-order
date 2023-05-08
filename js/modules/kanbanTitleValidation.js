export function validateKanbanTitleInput() {
  const inputKanbanName = document.querySelector('[data-input="kanban"]');
  const initialContent = inputKanbanName.innerHTML.replace(/&nbsp;/g, "");
  
  function handleUserType() {
    const inputText = inputKanbanName.innerHTML.replace(/&nbsp;/g, "");
    const inputLength = inputText.length;
    const minLength = 1;
  
    if (inputLength < minLength) {
      resetInputAndAddError();
    }
  }
  
  function resetInputAndAddError() {
    inputKanbanName.innerHTML = initialContent;
    addSpanError();
  }

  function addSpanError() {
    const errorSpan = createErrorSpan();
    inputKanbanName.insertAdjacentElement("afterend", errorSpan);
    setTimeout(() => {
      removeSpanError(errorSpan)
    }, 2500);
  }

  function createErrorSpan() {
    const errorSpan = document.createElement("span");
    errorSpan.style.opacity = 1;
    errorSpan.style.transition = ".3s";
    errorSpan.classList.add("font-1-s", "color-red1");
    errorSpan.textContent = `Your Kanban Title has a minimum of 1 character.`;
    return errorSpan
  }
  
  function removeSpanError(errorSpan) {
    errorSpan.style.opacity = 0;
  }
  
  function handleKeyInput(event) {
    if (event.code === 'Enter') {
      event.preventDefault()
    }
  }
  
  inputKanbanName.addEventListener("blur", handleUserType);
  inputKanbanName.addEventListener('keydown', handleKeyInput);
}
