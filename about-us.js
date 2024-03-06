const body = document.body;
const navToggleBtn = document.querySelector('.navbar-toggler');
const navbar = document.getElementById('navbar');
const navbarCollapse = document.querySelector('.collapse');

navToggleBtn.addEventListener('click', () => {
    if (navToggleBtn.classList.contains('collapsed')) {
      body.style.overflowY = 'auto';
    } else {
      body.style.overflowY = 'hidden';
    }
  });

const interchangingWords = document.getElementById('interchanging-words');
const wordOptions = ["hard-working", "encouraging", "friendly", "curious", "family"];
let currentIndex = 0;

const changeLastWord = () => {
  interchangingWords.textContent = wordOptions[currentIndex];
  currentIndex = (currentIndex + 1) % wordOptions.length;
};

setInterval(changeLastWord, 1000);