// Initialize counter
let counter = localStorage.getItem('counter1') || 0;
document.getElementById('counter').innerText = counter;

// Initialize color
let color = localStorage.getItem('color1') || '#00ff00';
document.getElementById('colorPicker').value = color;
document.getElementById('colorPicker').style.backgroundColor = color;
document.getElementById('titleInput').style.backgroundColor = color;
document.querySelector('.widget-container').style.backgroundColor = color;
document.querySelectorAll('.slot').forEach(slot => {
  slot.style.borderRight = `1px solid ${color}`;
});


// Initialize title
let title = localStorage.getItem('title1') || '';
document.getElementById('titleInput').value = title;
document.title = title;

// Generate slots for the progress bar
const initialNumSlots = localStorage.getItem('numSlots1') || 21;
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
  localStorage.setItem('numSlots1', numSlots); // Save the number of slots
}

function increment() {
  counter++;
  document.getElementById('counter').innerText = counter;
  localStorage.setItem('counter1', counter);
  updateProgressBar();
}

function decrement() {
  counter--;
  document.getElementById('counter').innerText = counter;
  localStorage.setItem('counter1', counter);
  updateProgressBar();
}

function reset() {
  counter = 0;
  document.getElementById('counter').innerText = counter;
  localStorage.setItem('counter1', counter);
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
  localStorage.setItem('color1', color);
}


function changeTitle() {
  title = document.getElementById('titleInput').value;
  document.title = title;
  localStorage.setItem('title1', title);
}