// Initialize counter
let counter = localStorage.getItem('counter3') || 0;
document.getElementById('counter').innerText = counter;

// Initialize color
let color = localStorage.getItem('color3') || '#00ff00';
document.getElementById('colorPicker').value = color;
document.getElementById('colorPicker').style.backgroundColor = color;
document.getElementById('titleInput').style.backgroundColor = color;
document.querySelector('.widget-container').style.backgroundColor = color;
document.querySelectorAll('.slot').forEach(slot => {
  slot.style.borderRight = `1px solid ${color}`;
});


// Initialize title
let title = localStorage.getItem('title3') || '';
document.getElementById('titleInput').value = title;
document.title = title;

// Generate slots for the progress bar
const initialNumSlots = localStorage.getItem('numSlots3') || 21;
document.getElementById('slotInput').value = initialNumSlots;
changeSlots();

// Update progress bar based on counter
function updateProgressBar() {
  const slots = document.querySelectorAll('.slot');
  slots.forEach((slot, index) => {
    if (index < counter) {
      slot.style.backgroundColor = 'darkgreen';
      slot.style.borderRight = `1px solid ${color}`;
    } else {
      slot.style.backgroundColor = 'lightgreen';
      slot.style.borderRight = `1px solid ${color}`;
    }
  });
}

function changeSlots() {
  const numSlots = parseInt(document.getElementById('slotInput').value);
  const progressBar = document.querySelector('.progress-bar');
  progressBar.innerHTML = ''; // Clear existing slots

  for (let i = 0; i < numSlots; i++) {
    const slot = document.createElement('div');
    slot.className = 'slot';
    progressBar.appendChild(slot);
  }

  updateProgressBar();
  localStorage.setItem('numSlots3', numSlots); // Save the number of slots
}

function increment() {
  counter++;
  document.getElementById('counter').innerText = counter;
  localStorage.setItem('counter3', counter);
  updateProgressBar();
}

function decrement() {
  counter--;
  document.getElementById('counter').innerText = counter;
  localStorage.setItem('counter3', counter);
  updateProgressBar();
}

function reset() {
  counter = 0;
  document.getElementById('counter').innerText = counter;
  localStorage.setItem('counter3', counter);
  updateProgressBar();
}

function changeColor() {
  color = document.getElementById('colorPicker').value;
  document.querySelector('.widget-container').style.backgroundColor = color;
  document.getElementById('colorPicker').style.backgroundColor = color;
  document.getElementById('titleInput').style.backgroundColor = color;
	document.querySelectorAll('.slot').forEach(slot => {
	  slot.style.borderRight = `1px solid ${color}`;
	});
  localStorage.setItem('color3', color);
}


function changeTitle() {
  title = document.getElementById('titleInput').value;
  document.title = title;
  localStorage.setItem('title3', title);
}