const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const planButton = Array.from(document.querySelectorAll('.button'));

window.addEventListener('click', (e) => {
  backdrop.style.display = 'none';
});

planButton.forEach(button => {
  button.addEventListener('click', (e) => {
    backdrop.style.display = 'block';
    modal.style.display = 'block';
    e.stopPropagation();
  });
});
