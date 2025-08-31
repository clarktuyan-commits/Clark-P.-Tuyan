
function changeText() {
  const paragraph = document.getElementById('description');
  paragraph.textContent = '3 hours of basketball can transform your skills and boost endurance.';
}

function addListItem() {
  const ul = document.getElementById('basketballList');
  const newItem = document.createElement('li');
  newItem.textContent = 'Cool down & stretches';
  ul.appendChild(newItem);
}

function removeElement() {
  const paragraph = document.getElementById('description');
  if (paragraph) {
    paragraph.remove(); 
  } else {
    const ul = document.getElementById('basketballList');
    if (ul && ul.lastElementChild) {
      ul.lastElementChild.remove(); 
    }
  }
}
