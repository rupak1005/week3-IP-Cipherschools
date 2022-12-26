// Single Line comment

/*Multi 
line
comment*/

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navlinks = document.querySelectorAll(".nav-links");
  burger.addEventListener("click",() =>{
  //Toggle Nav
  nav.classList.toggle("nav-active");)}
};
