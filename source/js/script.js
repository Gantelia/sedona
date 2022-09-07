const navigation = document.querySelector('.main-nav');
const toggleNavigation = navigation.querySelector('.main-nav__toggle');
const form = document.querySelector('.form');
const modal = document.querySelector('.page__modal-container');
const closeModalButton = modal?.querySelector('.modal__button');

navigation.classList.remove('main-nav--nojs');

// Управление навигацией

toggleNavigation.addEventListener('click', () => {
  if (navigation.classList.contains('main-nav--closed')) {
    navigation.classList.remove('main-nav--closed');
    navigation.classList.add('main-nav--open');
  } else {
    navigation.classList.remove('main-nav--open');
    navigation.classList.add('main-nav--closed');
  }
})


// Управление модальным окном (демоверсия)

form?.addEventListener('submit', (evt) => {
  evt.preventDefault();
  modal.classList.add('page__modal-container--open');
})

closeModalButton?.addEventListener('click', () => {
  modal.classList.remove('page__modal-container--open');
})
