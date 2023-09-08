let counter = 0;

if (localStorage.getItem('counter')) {
  counter = parseInt(localStorage.getItem('counter'));
  document.getElementById('counter').innerText = counter;
}

function increment() {
  counter++;
  updateCounter();
}

function decrement() {
  counter--;
  updateCounter();
}

function reset() {
  counter = 0;
  updateCounter();
}

function updateCounter() {
  document.getElementById('counter').innerText = counter;
  localStorage.setItem('counter', counter);
}
