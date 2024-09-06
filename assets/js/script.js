let activeSlide = 0;
let slides = document.querySelectorAll('.slide');
let startX, endX;

// Select navigation buttons
let left = document.querySelector('#click-left');
let right = document.querySelector('#click-right');

left.onclick = function() {
  updatePrevSlide();
};

right.onclick = function() {
  updateNextSlide();
};

// Handle dragging functionality
function handleDragStart(event) {
  startX = event.pageX;
}

function handleDragEnd(event) {
  endX = event.pageX;
  const diffX = startX - endX;

  if (Math.abs(diffX) > 50) { // Adjust threshold as needed
    if (diffX > 0) {
      updateNextSlide();
    } else {
      updatePrevSlide();
    }
  }
}

// Attach mouse events for dragging
document.addEventListener('mousedown', handleDragStart);
document.addEventListener('mouseup', handleDragEnd);

// Update the slide to the next one
function updateNextSlide() {
  slides[activeSlide].classList.add("prev");
  let nextSlide = (activeSlide < slides.length - 1) ? activeSlide + 1 : 0;
  slides[nextSlide].classList.remove("prev");
  slides[nextSlide].classList.remove("next");
  slides[nextSlide].classList.add("active");

  if (nextSlide < slides.length - 1) {
    slides[nextSlide + 1].classList.add("next");
    slides[nextSlide + 1].classList.remove("prev");
  } else {
    slides[0].classList.remove("prev");
    slides[0].classList.add("next");
  }
  activeSlide = nextSlide;
}

// Update the slide to the previous one
function updatePrevSlide() {
  slides[activeSlide].classList.add("next");
  let prevSlide = (activeSlide > 0) ? activeSlide - 1 : slides.length - 1;
  slides[prevSlide].classList.remove("next");
  slides[prevSlide].classList.remove("prev");
  slides[prevSlide].classList.add("active");

  if (prevSlide > 0) {
    slides[prevSlide - 1].classList.add("prev");
    slides[prevSlide - 1].classList.remove("next");
  } else {
    slides[slides.length - 1].classList.remove("next");
    slides[slides.length - 1].classList.add("prev");
  }

  console.log(`Current Slide Index (Prev): ${prevSlide}`);
  activeSlide = prevSlide;
}

// Handle image changes
let allChangeImg = document.querySelectorAll('.change_on_hover');
let activeSlideImage = null;

// Function to find and update the currently active slide's image
function updateActiveSlideImage() {
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

function handleMouseOver(event) {
  updateActiveSlideImage();
  changeActiveSlideImage(event.target.src);
  event.target.classList.add('hovered'); // Add the border
}

function handleMouseOut(event) {
  event.target.classList.remove('hovered'); // Remove the border
}

updateActiveSlideImage();

allChangeImg.forEach((element) => {
  element.addEventListener('click', () => {
    updateActiveSlideImage();
    changeActiveSlideImage(element.src);
  });
  
  element.addEventListener('mouseover', handleMouseOver);
  element.addEventListener('mouseout', handleMouseOut);
});

function updateSlide(newActiveIndex) {
  document.querySelector(".slide.active").classList.remove("active");
  
  let sld = document.querySelectorAll(".slide");
  sld[newActiveIndex].classList.add("active");
  
  updateActiveSlideImage();
}













// popup code
 function MyPopup() {

    const popupOverlay = document.getElementById('popupOverlay');

    const popup = document.getElementById('popup');

    const closePopup = document.getElementById('closePopup');

    // Function to open the popup

    function openPopup() {

        popupOverlay.style.display = "block";
    }

    // Function to close the popup

    function closePopupFunc() {

        popupOverlay.style.display = 'none';

    }


    // Trigger the popup to open (you can call this function on a button click or any other event)

    openPopup();

    // Close the popup when the close button is clicked

    closePopup.addEventListener('click', closePopupFunc);

    // Close the popup when clicking outside the popup content

    popupOverlay.addEventListener('click', function (event) {

        if (event.target === popupOverlay) {

            closePopupFunc();

        }

    });

};

// Get elements by ID and class
let k1 = document.getElementById("kilOne");
let k2 = document.getElementById("kilTwo");
let acc1 = document.querySelectorAll(".acc1");
// let b4 = document.getElementsByClassName("bef4");
// let b5 = document.getElementsByClassName("bef5");

// Add click event listeners to each element with the class 'acc1'
acc1.forEach((e) => {
  e.addEventListener("click", function() {
    // Check the innerHTML of the clicked element
    if (e.innerHTML === "Express") {
      // Show k1 and hide k2
      k1.style.display = "block";
      k2.style.display = "none";

      // Remove class 'beforeAfter' from all elements with class 'bef5'
      // b5.forEach(el => el.classList.remove('beforeAfter'));

      // Add class 'beforeAfter' to clicked element and to all elements with class 'bef4'
      // e.classList.add('beforeAfter');
      // b4.forEach(el => el.classList.add('beforeAfter'));
    } else if (e.innerHTML === "Standard") {
      // Show k2 and hide k1
      k1.style.display = "none";
      k2.style.display = "block";

      // Remove class 'beforeAfter' from all elements with class 'bef4'
      // b4.forEach(el => el.classList.remove('beforeAfter'));

      // Add class 'beforeAfter' to clicked element and to all elements with class 'bef5'
      // e.classList.add('beforeAfter');
      // b5.forEach(el => el.classList.add('beforeAfter'));
    }
  });
});


















