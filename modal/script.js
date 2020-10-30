'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpen = document.querySelectorAll('.show-modal')

const openModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}


for (let eachBtn of btnsOpen) {
  (eachBtn.addEventListener('click', () => {
    openModal();
  }));
}

btnCloseModal.addEventListener('click', () => {
  closeModal();
})

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});