const navButton = document.querySelector('#nav-burger-button');
const menu = document.querySelector('#nav-menu');

navButton.addEventListener('click', ()=>{menu.classList.toggle('activate')});