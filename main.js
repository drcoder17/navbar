const elNavbar = document.querySelector('.sitenav__links');
const elBurgerNavbarToggler = document.querySelector('.sitenav__burger');

elBurgerNavbarToggler.addEventListener('click', navToggle);

function navToggle() {
	elNavbar.classList.toggle('mini-sitenav');
	elBurgerNavbarToggler.classList.toggle('toggler');
}
