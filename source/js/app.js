const navigation = document.querySelector('.main-nav');
const toggleNavigation = navigation.querySelector('.main-nav__toggle');

navigation.classList.remove('main-nav--nojs');

toggleNavigation.addEventListener('click', () => {
  if (navigation.classList.contains('main-nav--closed')) {
    navigation.classList.remove('main-nav--closed');
    navigation.classList.add('main-nav--open');
  } else {
    navigation.classList.remove('main-nav--open');
    navigation.classList.add('main-nav--closed');
  }
})

