export function validateKanbanTitleInput() {
  const inputKanbanName = document.querySelector('[data-input="kanban"]');
  const errorSpan = document.createElement("span");
  const initialContent = inputKanbanName.innerHTML.replace(/&nbsp;/g, "");;
  
  function handleUserType() {
    const inputText = inputKanbanName.innerHTML.replace(/&nbsp;/g, "");
    const inputLength = inputText.length;
    const minLength = 1;
  
    if (inputLength < minLength) {
      resetInputAndAddError(minLength);
    }
  }
  
  function resetInputAndAddError(minLength) {
    inputKanbanName.innerHTML = initialContent;
    addSpanError(minLength);
  }
  
  function addSpanError(minLength) {
    errorSpan.style.opacity = 1;
    errorSpan.style.transition = ".3s";
    errorSpan.classList.add("font-1-s", "color-red1");
    errorSpan.textContent = `Your Kanban Title has a minimum of ${minLength} character.`;
    inputKanbanName.insertAdjacentElement("afterend", errorSpan);
    setTimeout(() => {
      removeSpanError()
    }, 2500);
  }
  
  function removeSpanError() {
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


