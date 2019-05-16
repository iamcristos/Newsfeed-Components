
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence. 
  menu.classList.toggle('menu--open');
  // console.log(menu.classList.contains())
  menu.classList[1] == 'menu--open' 
      ? TweenMax.to(menu,2,{delay:1,opacity:0.8, x:-1,width:'350px', display:'block'},'.3') 
      : TweenMax.to(menu ,2,{x:-1, delay:0, width:'0px', display: 'none'})
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.header .menu-button') ;
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', toggleMenu)
