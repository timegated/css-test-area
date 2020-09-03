const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const noModal = document.querySelector('.modal__action--negative');
const planButton = Array.from(document.querySelectorAll('.button'));
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');

console.dir(backdrop);
const closeModal = () => {
  backdrop.classList.remove('open')
  modal.classList.remove('open')
};
if (modalNoButton) {
  noModal.addEventListener('click', closeModal);
}

planButton.forEach(button => {
  button.addEventListener('click', (e) => {
    // backdrop.style.display = 'block';
    // modal.style.display = 'block';
    modal.classList.add('open');
    backdrop.classList.add('open');
    e.stopPropagation();
  });
});

toggleButton.addEventListener(('click'), () => {
  mobileNav.style.display = 'block';
  backdrop.style = 'block';
})
