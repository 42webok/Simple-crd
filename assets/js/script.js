

let activeSlide = 0;
const slides = document.querySelectorAll('.slide');

let left = document.querySelector('#click-left');

left.onclick = function() {
  updatePrevSlide()
}


let right = document.querySelector('#click-right');

right.onclick = function() {
  updateNextSlide();
}

function updateNextSlide() {
  slides[activeSlide].classList.add("prev");
  let nextSlide = ( activeSlide < slides.length -1) ? activeSlide+1 : 0; 
  slides[nextSlide].classList.remove("prev");
  slides[nextSlide].classList.remove("next");
  slides[nextSlide].classList.add("active");
  
  if(nextSlide < slides.length -1){
    slides[nextSlide+1].classList.add("next");
    slides[nextSlide+1].classList.remove("prev");
  }  
  else {
    slides[0].classList.remove("prev");
    slides[0].classList.add("next");
  }
  activeSlide = nextSlide;
}

var prevSlide;
function updatePrevSlide() {
  slides[activeSlide].classList.add("next");
   prevSlide = ( activeSlide > 0) ? activeSlide-1 : slides.length-1; 
  slides[prevSlide].classList.remove("next");
  slides[prevSlide].classList.remove("prev");
  slides[prevSlide].classList.add("active");
  
  if(prevSlide > 0){
     slides[prevSlide-1].classList.add("prev");
    slides[prevSlide-1].classList.remove("next");
  }
  else {
     slides[slides.length-1].classList.remove("next");
    slides[slides.length-1].classList.add("prev");   
  }
  
  console.log(`Current Slide Index (Prev): ${prevSlide}`);
  activeSlide = prevSlide;
}




let allChangeImg = document.querySelectorAll('.change_on_hover');
let activeSlideImage = null;

// Function to find and update the currently active slide's image
function updateActiveSlideImage() {
    // Get all slides
    let sld = document.querySelectorAll(".slide");
  
    sld.forEach((slide) => {
      if (slide.classList.contains('active')) {
        activeSlideImage = slide.children[0]; 
      }
    });
  }
  
  function changeActiveSlideImage(src) {
    if (activeSlideImage) {
      activeSlideImage.src = src;
    }
  }
  
  updateActiveSlideImage();
  
  allChangeImg.forEach((element) => {
    element.addEventListener('click', () => {
      updateActiveSlideImage(); 
      changeActiveSlideImage(element.src); 
    });
  });

  function updateSlide(newActiveIndex) {

    document.querySelector(".slide.active").classList.remove("active");
    
    let sld = document.querySelectorAll(".slide");
    sld[newActiveIndex].classList.add("active");
    
    updateActiveSlideImage();
  }
  

