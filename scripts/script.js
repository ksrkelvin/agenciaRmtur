// --------NAVBAR----------
// btn-menu

const btnMobile = document.getElementById("btn-mobile");

function toggleMenu(event){
  if(event.type === 'touchstart'){
    event.preventDefault();
  }
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
  const active = nav.classList.contains("active");
  event.currentTarget.setAttribute("aria-expanded", active);
  if(active){
    event.currentTarget.setAttribute("aria-label", "Fechar Menu");
  }else{
    event.currentTarget.setAttribute("aria-label", "Abrir Menu");
  }
}

const navlink = document.querySelectorAll(".navlink")

navlink.forEach(event=>{
  event.addEventListener("click", toggleMenu)
})



// ------MAIN-HOME-----

const translate = document.querySelectorAll(".translate");
const big_title = document.querySelector("#big-title");
const home = document.querySelector("main");
const shadow = document.querySelector(".shadow")
const content = document.querySelector(".content")
const section = document.querySelector("#about")
const image_container = document.querySelector(".imgContainer")
const opacity = document.querySelectorAll(".opacity")


let header_height = header.offsetHeight;
let section_height = section.offsetHeight;





function scrollHome(){
  let scroll = window.pageYOffset;
  let sectionY = section.getBoundingClientRect();

  translate.forEach(element =>{
    let speed = element.dataset.speed;
    element.style.transform = `translateY(${scroll * speed}px)`;
  })
    opacity.forEach(element=>{
      element.style.opacity = scroll / (sectionY.top + section_height)
    })

    big_title.style.opacity = - scroll / ((header_height) / .2) + 1
    shadow.style.height = `${scroll * 7 + 300}px`

    if( sectionY.top > 20){
      content.style.transform = `translateY(${scroll / (section_height + sectionY.top) * 50 - 50}px)`
      image_container.style.transform = `translateY(${scroll / (section_height + sectionY.top) * -40 + 50}px)`
  }
   
}

// ------POPULAR_CAROUSEL-----

let currentIndex = 0,
  popularImages = document.querySelectorAll("#popularItems img"),
  popularText = document.querySelectorAll(".popular-text"),
  max = popularImages.length;

  function nextImageAndText(){

   popularImages[currentIndex].classList.remove("selected");
   popularText[currentIndex].classList.remove("selected");
    currentIndex++;

    if(currentIndex >= max){
      currentIndex = 0
    }

    popularImages[currentIndex].classList.add("selected");
    popularText[currentIndex].classList.add("selected");

   
  }

  function start(){
    btnMobile.addEventListener("click", toggleMenu);
    btnMobile.addEventListener("touchstart", toggleMenu);
    window.addEventListener("scroll", scrollHome);
  }



  window.addEventListener("load", start)