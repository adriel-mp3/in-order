const kanbanContainer = document.querySelectorAll('[data-drag="zone"');
  
export function verifyHasCards() {
  kanbanContainer.forEach((kanban, index) => {
    const dropzoneItems = kanban.querySelectorAll('*');
    const dropzoneIsEmpty = dropzoneItems.length === 0;
    
    if (dropzoneIsEmpty) {
      addEmptyStateCard(index)
    }
    else {  
      removeEmptyStateCard(index);
    }  
  })
}

function addEmptyStateCard(index) {
  kanbanContainer[index].style.minWidth = '250px';
  kanbanContainer[index].style.padding = '20px 0';
}

function removeEmptyStateCard(index) {
  kanbanContainer[index].style.minWidth = 'initial';
  kanbanContainer[index].style.padding = '0';
}

