
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence. 
  menu.classList.toggle('menu--open');
  menu.className != 'menu--open' 
    ? TweenMax.staggerFrom('.menu--open',2,{delay:1,opacity:0.8, x:-50, width:0},'.3') 
    : TweenMax.staggerTo('.menu--open',2,{x:0, delay:1,display:'none'})
  
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.header .menu-button') ;
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', toggleMenu)
