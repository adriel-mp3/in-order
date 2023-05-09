export function kanbanDragAndDrop() {
  
}

const dragItems = document.querySelectorAll('[data-drag="item"]');
const dragZones = document.querySelectorAll('[data-drag="zone"');
  
  function verifyHasItems() {
    dragZones.forEach((dropzone, index) => {
      const dropzoneItems = dropzone.querySelectorAll('*');
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
    dragZones[index].style.minWidth = '250px';
    dragZones[index].style.padding = '20px 0';
  }
  
  function removeEmptyStateCard(index) {
    dragZones[index].style.minWidth = 'initial';
    dragZones[index].style.padding = '0';
  }
  
  // drag items calbacks
  
  export function handleDragStart() {
    this.setAttribute('data-drag', 'dragging');
  }
  
  export function handleDrag() {
    verifyHasItems()
  }
  
  export function handleDragEnd() {
    this.removeAttribute('data-drag', 'dragging');
    verifyHasItems()
  }
  
  // drag zone callbacks
  
  function handleDragEnter() {}
  
  function handleDragOver() {}
  
  function handleDragLeave() {
    const elementDragged = document.querySelector('[data-drag="dragging"]');
      this.appendChild(elementDragged);
  }
  
  function handleDragDrop() {}
  
  // drag items events
  
  dragItems.forEach((dragItem) => {
    dragItem.addEventListener('dragstart', handleDragStart)
  })
  
  dragItems.forEach((dragItem) => {
    dragItem.addEventListener('dragend', handleDragEnd)
  })
  
  dragItems.forEach((dragItem) => {
    dragItem.addEventListener('drag', handleDrag)
  })
  
  // drag zone events
  
  dragZones.forEach((dragZone) => {
    dragZone.addEventListener('dragenter', handleDragEnter)
  })
  
  dragZones.forEach((dragZone) => {
    dragZone.addEventListener('dragleave', handleDragLeave)
  })
  
  dragZones.forEach((dragZone) => {
    dragZone.addEventListener('dragover', handleDragOver)
  })
  
  dragZones.forEach((dragZone) => {
    dragZone.addEventListener('drop', handleDragDrop)
  })