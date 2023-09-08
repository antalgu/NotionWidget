// Initialize counter
let counter = localStorage.getItem('counter1') || 0;
document.getElementById('counter').innerText = counter;

// Initialize color
let color = localStorage.getItem('color1') || '#00ff00';
document.getElementById('colorPicker').value = color;
document.getElementById('colorPicker').style.backgroundColor = color;
document.getElementById('titleInput').style.backgroundColor = color;
document.querySelector('.widget-container').style.backgroundColor = color;


// Initialize title
let title = localStorage.getItem('title1') || 'Button';
document.getElementById('titleInput').value = title;
document.title = title;

function increment() {
  counter++;
  document.getElementById('counter').innerText = counter;
  localStorage.setItem('counter1', counter);
}

function decrement() {
  counter--;
  document.getElementById('counter').innerText = counter;
  localStorage.setItem('counter1', counter);
}

function reset() {
  counter = 0;
  document.getElementById('counter').innerText = counter;
  localStorage.setItem('counter1', counter);
}

function changeColor() {
  color = document.getElementById('colorPicker').value;
  document.querySelector('.widget-container').style.backgroundColor = color;
  document.getElementById('colorPicker').style.backgroundColor = color;
  document.getElementById('titleInput').style.backgroundColor = color;
  localStorage.setItem('color1', color);
}


function changeTitle() {
  title = document.getElementById('titleInput').value;
  document.title = title;
  localStorage.setItem('title1', title);
}
