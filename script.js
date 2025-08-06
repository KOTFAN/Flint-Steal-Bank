'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const learnMoreBtn = document.querySelector('.btn--scroll-to');

const navLinks = document.querySelectorAll('.nav__link');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//scroll
//=========================================
learnMoreBtn.addEventListener('click', () => {
  const featuresSection = document.querySelector('#section--1');
  featuresSection.scrollIntoView({
    behavior: 'smooth',
  });
});

navLinks.forEach(navLink => {
  navLink.addEventListener('click', e => {
    e.preventDefault();

    const section = document.querySelector(navLink.hash);
    section.scrollIntoView({
      behavior: 'smooth',
    });
  });
});
//==============================================
