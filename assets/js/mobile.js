let body = document.getElementById("body");
let allCode = document.getElementById("allCode");

// Function to handle media query changes
function handleMediaQueryChange(event) {
    if (event.matches) {
      body.innerHTML = `
     <div id="wellDef">
        <div class="slider-container">
        <div class="slider">
            <div class="slide active">
                <img src="assets/img/35477907-4d58-4da1-949a-19e4c8c94fe8.webp" alt="Slide 1">
            </div>
            <div class="slide">
                <img src="assets/img/3760d053-35d0-40a4-acf2-adc8273a9a8f.webp" alt="Slide 2">
            </div>
            <div class="slide">
                <img src="assets/img/26501d7c-db84-4c72-bb52-2c108bf53ea4.webp" alt="Slide 3">
            </div>
        </div>
        <button class="control prev" id="prev-slide" style="opacity:0;">&#10094;</button>
        <button class="control next" id="next-slide" style="opacity:0;">&#10095;</button>
    </div>
    </div>



     <div class="product_detail_card" id="mobTxt">
            <!-- Exclusive code start here -->
            <div class="Exclusive">
                <div class="check_product"><img src="assets/img/status.png" alt="" width="18px"> <span>Free shipping
                        special for you</span></div>
                <span class="ofer">Exclusive offer</span>
            </div>
            <!-- Exclusive code end here -->
            <!-- share product code start -->
            <div class="share_product">
                <span class="arm">1/3 Cooling Arm Sleeves for Men and Women - UV Protection for Golf, Cycling, Running,
                    and Driving - Polyester Material <div class="mystr"> <p> <span class="sold">475 sold</span> | <span class="providedBy"> Provided by 
                        <img src="assets/img/5c4459ad-1f69-42d3-96f0-9ece3251e2f3_300x300.webp" class="img" width="15px" alt=""> <a
                            href="#"> (100k + solid)</a></span></p> 
                            <div class="star">
                                <span>4.7</span>
                               <img src="assets/img/strFull.svg" width="20px" alt="rate product">
                               <img src="assets/img/strFull.svg" width="20px" alt="rate product">
                               <img src="assets/img/strFull.svg" width="20px" alt="rate product">
                               <img src="assets/img/strFull.svg" width="20px" alt="rate product">
                               <img src="assets/img/strHalf.svg" width="20px" alt="rate product">
                            </div> </div></span>
                <img src="assets/img/share.svg" width="40px" class="thitha" alt="Share">
            </div>
            <!-- share product code ended -->
             <!-- Last Day code start here -->
              <div class="lastDay">
                <!-- <h2 class="last">Last day</h2>-->
                <img src="assets/img/1fa1b771-c651-4d7c-8f6a-4f42fa50f66f.png.slim.webp" width="18px" alt="">
                <h3 class="dollor">$</h3>
                <h1 class="discount_price">0</h1>
                <h4 class="float_Val">.87%</h4>
                <span class="count_label">-55% ending soon</span>
                <del class="del_price">$1.97</del>
                <span class="del_qus">?</span>
              </div>
             <!-- Last Day code end here -->
              <!-- timer code start here -->
                <div class="product_timer">
                   <div class="box">
                    <h5 class="light_deal">Lightning deal |</h5>
                   <img src="assets/img/time.webp" width="60px" alt="timer">
                   <h5 class="end_timer">Ends in 03:00:35</h5>
                   </div>
                   <div class="pro_end">
                      <img src="assets/img/fb824bc5-51db-46f0-9010-de85bee89368.png.slim.webp" width="46px" alt="lightining">
                      <img src="assets/img/g2.svg" width="20px" alt="icon">
                   </div>
                </div>
              <!-- timer code end  here -->
               <!-- product sell details start here -->
                <div class="product_box">
                    <h5>Color</h5>
                    <div class="product_img">
                        <div class="product_card">
                            <span class="layer"></span>
                            <img src="assets/img/120143b2-d26a-46a5-be1a-2cb2b46988ad.webp" class="change_on_hover" alt="">
                          <!--  <div class="product_txt">
                               <label>white</label>
                            </div>-->
                        </div>
                        <div class="product_card">
                            <span class="layer"></span>
                            <img src="assets/img/oneOne.webp" class="change_on_hover" alt="">
                          <!--  <div class="product_txt">
                               <label>white</label>
                            </div>-->
                        </div>
                        <div class="product_card">
                            <span class="layer"></span>
                            <img src="assets/img/twotwo.webp" class="change_on_hover" alt="">
                            <!--  <div class="product_txt">
                               <label>white</label>
                            </div>-->
                        </div>
                        
                    </div>
                    <div class="product_quantity">
                        <label for="">Qty</label>
                        <div class="quantity">
  <button class="minus" aria-label="Decrease">&minus;</button>
  <input type="number" class="input-box" value="1" min="1" max="10">
  <button class="plus" aria-label="Increase">&plus;</button>
</div>
                    </div>

                </div>
               <!-- product sell details end here -->
                <!-- Add to card button code start -->
                 <div class="add_card_btn" >
                    <div class="chep_price">
                        <h4>Add to cart</h4>
                        <p>Lowest price ever</p>
                    </div>
                 </div>
                <!-- Add to card button code ended -->
                 <div id="myUp">
                    <div class="box">
                    <img src="assets/img/download (3).svg" alt="" width="20px">
                    <p  onclick="MyPopup()">Ships From Temu</p>
                    </div>
                    <img src="assets/img/g2.svg" alt="" width="20px">
                 </div>
                <div id="mobSld">
                <div class="kio">
                 <div class="slideBox">
                  <p>Standard: FREE</p>
                  <span>Delivery:<h6> %-10 business days, 70% within 8 business days</h6></span>
                  <span>Get a $5.00 credit for late delivery</span>
                  <span>Courier company: <h6><img src="assets/img/pay14.webp" width="18px">DHL eCommerence...</h6></span>
                 </div>
                 <div class="slideBox">
                  <p>FREE (orders >$129.00)</p>
                  <span>Delivery:<h6> 3-7 business days, 72.9% within 7 business days</h6></span>
                  <span>Get a $5.00 credit for late delivery</span>
                  <span>Courier company: <h6><img src="assets/img/pay13.webp" width="18px">FedEx <img src="assets/img/pay15.webp" width="18px">DHL</h6></span>
                 </div>
                 </div>
                </div>
                <!--ship retrn-->
                <div id="myUp">
                    <div class="box">
                    <img src="assets/img/g1.webp" alt="" width="20px">
                    <p >Free retruns . Price adjustment</p>
                    </div>
                    <img src="assets/img/g2.svg" alt="" width="20px">
                 </div>
                 <div class="xamp"></div>
                <!--ship retrn-->
                <div id="myUp">
                    <div class="box" style="align-items:center;">
                    <img src="assets/img/g3.webp" alt="">
                    <p >Temu's Tree Planting <br> Program</p>
                    </div>
                    <span class="gill">14M + trees <img src="assets/img/g2.svg" alt="" width="20px"></span>
                 </div>
                 <div class="xamp2"></div>
                
                 <div id="myUp">
                    <div class="box">
                    <img src="assets/img/download (1).svg" alt="" width="10px">
                    <p >Shoping security</p>
                    </div>
                    <img src="assets/img/g2.svg" alt="" width="20px">
                 </div>
                   <div class="xamp2"></div>
                   <div id="mobStr">
                     <span>4.7</span>
                     <span class="img">
                     <img src="assets/img/strFull.svg" alt="" width="16px">
                     <img src="assets/img/strFull.svg" alt="" width="16px">
                     <img src="assets/img/strFull.svg" alt="" width="16px">
                     <img src="assets/img/strFull.svg" alt="" width="16px">
                     <img src="assets/img/strFull.svg" alt="" width="16px">
                     </span>
                     <sup>(20)<span class="qto">?</span></sup>
                   </div>

                   <div id="myUp">
                    <div class="box">
                    <p style="color:black; font-weight:600;">Reviews</p>
                    </div>
                     <span class="gill">See all <img src="assets/img/g2.svg" alt="" width="20px"></span>
                 </div>
                 <div id="hubGm">
                 <img src="assets/img/varified.png" width="16px">
                 <span>All reviews are from varified purchases</span>
                 </div>

                  <!-- coding of revievs start here -->
                  <div id="mobCom">
     <div class="reviews_nav">
        <ul>
            <li><a href="#" id="spacic"><img src="assets/img/flag.png" width="30px" alt=""> <span>(23)</span></a></li>
           <!-- <li><a href="#">Good(5)</a></li>
            <li><a href="#">Excellent(4)</a></li>
            <li><a href="#">Loved it(2)</a></li>
            <li><a href="#">Practical(2)</a></li>-->
        </ul>
     </div>
     <!-- Preople comment code -->
    <div class="mai_comment">
        <div class="people_comment">
            <img src="assets/img/user.webp" alt="" width="40px" class="userIcon">
            <a href="#">gabeey wedon</a>
            <span>in <img src="assets/img/flag.png" width="20px" alt=""> on Sep 1, 2024</span>
        </div>
        <p class="pillo">Purchased: Mixed Color triple Pair</p>
        <!-- code of star -->
         <div class="comment_str">
            <img src="assets/img/strFull.svg" width="25px" alt="">
            <img src="assets/img/strFull.svg" width="25px" alt="">
            <img src="assets/img/strFull.svg" width="25px" alt="">
            <img src="assets/img/strFull.svg" width="25px" alt="">
            <img src="assets/img/strFull.svg" width="25px" alt="">
         </div>
         <!-- The comment txt -->
          <div class="comment_txt">
            <span>fit my boyfriend nicely he gives it a 100% love it 5 stars</span>
          </div>
            <div class"combo" id="global">
           <span><img src="assets/img/globel.png" width="15px"> <span>See original</span></span>
           <span><img src="assets/img/share.svg" width="16px"> <span>| Share <img src="assets/img/likes.png"  width="15px"> Helpful</span> ...</span>
          </div>
    </div>
     <!-- Preople comment code -->
     <div>
    <div class="mai_comment">
        <div class="people_comment">
            <img src="assets/img/user.webp" alt="" width="40px" class="userIcon">
            <a href="#">Yotas123</a>
            <span>in <img src="assets/img/zimbawa.jpeg" width="20px" alt=""> on Sep 1, 2024</span>
        </div>
        <p class="pillo">Purchased: Mixed Color triple Pair</p>
        <!-- code of star -->
         <div class="comment_str">
            <img src="assets/img/strFull.svg" width="25px" alt="">
            <img src="assets/img/strFull.svg" width="25px" alt="">
            <img src="assets/img/strFull.svg" width="25px" alt="">
            <img src="assets/img/strFull.svg" width="25px" alt="">
            <img src="assets/img/strFull.svg" width="25px" alt="">
         </div>
         <!-- The comment txt -->
          <div class="comment_txt">
            <span>fit my boyfriend nicely he gives it a 100% love it 5 stars</span>
          </div>
            <div class"combo" id="global">
           <span><img src="assets/img/globel.png" width="15px"> <span>See original</span></span>
           <span><img src="assets/img/share.svg" width="16px"> <span>| Share <img src="assets/img/likes.png"  width="15px"> Helpful</span> ...</span>
          </div>
    </div>
     <!-- Preople comment code -->
    <div class="mai_comment">
        <div class="people_comment">
            <img src="assets/img/user.webp" alt="" width="40px" class="userIcon">
            <a href="#">Joao Junior</a>
            <span>in <img src="assets/img/flag.png" width="20px" alt=""> on Sep 1, 2024</span>
        </div>
        <p class="pillo">Purchased: 1 Pair of black</p>
        <!-- code of star -->
         <div class="comment_str">
            <img src="assets/img/strFull.svg" width="25px" alt="">
            <img src="assets/img/strFull.svg" width="25px" alt="">
            <img src="assets/img/strFull.svg" width="25px" alt="">
            <img src="assets/img/strFull.svg" width="25px" alt="">
            <img src="assets/img/strFull.svg" width="25px" alt="">
         </div>
         <!-- The comment txt -->
          <div class="comment_txt">
            <span>nice gives my tattoos protection from the sun.</span>
          </div>
            <div class"combo" id="global">
           <span><img src="assets/img/globel.png" width="15px"> <span>See original</span></span>
           <span><img src="assets/img/share.svg" width="16px"> <span>| Share <img src="assets/img/likes.png"  width="15px"> Helpful</span> ...</span>
          </div>
    </div>
    
    </div>
    </div>
        </div>
      `;
    }
    else{
      document.getElementById('body').innerHTML = allCode.innerHTML;
    }
  
  }
  
  // Define the media query
  const mediaQuery = window.matchMedia("(max-width: 576px)");
  
  // Initial check
  handleMediaQueryChange(mediaQuery);
  
  // Add listener to handle changes
  mediaQuery.addEventListener("change", handleMediaQueryChange);

// script.js

let currentSlide = 0;
const slides1 = document.querySelectorAll('.slide');
const totalSlides1 = slides1.length; // Changed variable name to totalSlides1
const slider = document.querySelector('.slider');
const prevButton = document.getElementById('prev-slide');
const nextButton = document.getElementById('next-slide');

let isDragging = false;
let startX1;
let startTransformX;

function updateSlide(index) {
    slider.style.transform = `translateX(${-index * 100}%)`;
    currentSlide = index;
}

function nextSlide() {
    const nextIndex = (currentSlide + 1) % totalSlides1; // Updated to use totalSlides1
    updateSlide(nextIndex);
}

function prevSlide() {
    const prevIndex = (currentSlide - 1 + totalSlides1) % totalSlides1; // Updated to use totalSlides1
    updateSlide(prevIndex);
}

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

function handleDragStart(event) {
    isDragging = true;
    startX1 = event.pageX || event.touches[0].pageX;
    const transformMatrix = getComputedStyle(slider).transform;
    startTransformX = transformMatrix === 'none' ? 0 : parseInt(transformMatrix.split(',')[4]);
    slider.style.transition = 'none';
}

function handleDragMove(event) {
    if (!isDragging) return;

    const currentX = event.pageX || event.touches[0].pageX;
    const dx = currentX - startX1;
    slider.style.transform = `translateX(${startTransformX + dx}px)`;
}

function handleDragEnd(event) {
    if (!isDragging) return;
    isDragging = false;

    slider.style.transition = 'transform 0.3s ease';

    const dx = (event.pageX || (event.changedTouches && event.changedTouches[0].pageX)) - startX1;
    const slideWidth = slider.offsetWidth / totalSlides1; // Updated to use totalSlides1
    if (dx < -slideWidth / 3) {
        nextSlide();
    } else if (dx > slideWidth / 3) {
        prevSlide();
    } else {
        updateSlide(currentSlide);
    }
}

slider.addEventListener('mousedown', handleDragStart);
window.addEventListener('mousemove', handleDragMove);
window.addEventListener('mouseup', handleDragEnd);
window.addEventListener('mouseleave', handleDragEnd);

slider.addEventListener('touchstart', handleDragStart);
slider.addEventListener('touchmove', handleDragMove);
slider.addEventListener('touchend', handleDragEnd);


// Quantity btn
(function () {
    const quantityContainer = document.querySelector(".quantity");
    const minusBtn = quantityContainer.querySelector(".minus");
    const plusBtn = quantityContainer.querySelector(".plus");
    const inputBox = quantityContainer.querySelector(".input-box");
  
    updateButtonStates();
  
    quantityContainer.addEventListener("click", handleButtonClick);
    inputBox.addEventListener("input", handleQuantityChange);
  
    function updateButtonStates() {
      const value = parseInt(inputBox.value);
      minusBtn.disabled = value <= 1;
      plusBtn.disabled = value >= parseInt(inputBox.max);
    }
  
    function handleButtonClick(event) {
      if (event.target.classList.contains("minus")) {
        decreaseValue();
      } else if (event.target.classList.contains("plus")) {
        increaseValue();
      }
    }
  
    function decreaseValue() {
      let value = parseInt(inputBox.value);
      value = isNaN(value) ? 1 : Math.max(value - 1, 1);
      inputBox.value = value;
      updateButtonStates();
      handleQuantityChange();
    }
  
    function increaseValue() {
      let value = parseInt(inputBox.value);
      value = isNaN(value) ? 1 : Math.min(value + 1, parseInt(inputBox.max));
      inputBox.value = value;
      updateButtonStates();
      handleQuantityChange();
    }
  
    function handleQuantityChange() {
      let value = parseInt(inputBox.value);
      value = isNaN(value) ? 1 : value;
  
      // Execute your code here based on the updated quantity value
      console.log("Quantity changed:", value);
    }
  })();
  
