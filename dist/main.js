let closeNav = document.getElementById("close-nav"),
  openNav = document.getElementById("open-nav"),
  navbar = document.getElementById("navbar"),
  img = document.getElementById("slider-img"),
  head = document.getElementById("slider-head"),
  btnLeft = document.getElementById("btn-left"),
  btnRight = document.getElementById("btn-right"),
  desc = document.getElementById("slider-desc"),
  count = 1,
  slider = [
    {
      sliderHead: "Discover innovative ways to decorate",
      sliderDesc: `We provide unmatched quality, comfort, and style for property owners across the country. Our
      experts combine form and function in bringing
      your vision to life. Create a room in your own style
      with our collection and make your property a reflection of you and what you love.`,
    },
    {
      sliderHead: "We are available all across the globe",
      sliderDesc: `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
      Locally, we're in most major cities throughout the country. Find the branch nearest you using our 
      store locator. Any questions? Don't hesitate to contact us today.`,
    },
    {
      sliderHead: "Manufactured with the best materials",
      sliderDesc: `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
      to ensure that every product is made as perfect and as consistent as possible. With three decades of 
      experience in this industry, we understand what customers want for their home and office.`,
    },
  ];

  if (window.matchMedia("(min-width: 600px)").matches) {
    img.src = "images/desktop-image-hero-"+count+".jpg"
  } else {
    img.src = "images/mobile-image-hero-"+count+".jpg"
  }
  
const goRight = () => {
  count++;
  if (count == 4) {
    count = 1;
  }
  if (window.matchMedia("(min-width: 600px)").matches) {
    img.src = "images/desktop-image-hero-"+count+".jpg"
  } else {
    img.src = "images/mobile-image-hero-"+count+".jpg"
  }
  head.textContent = slider[count - 1].sliderHead;
  desc.textContent = slider[count - 1].sliderDesc;
};
const goLeft = () => {
  count--;
  if (count == 0) {
    count = 3;
  }
  if (window.matchMedia("(min-width: 600px)").matches) {
    img.src = "images/desktop-image-hero-"+count+".jpg"
  } else {
    img.src = "images/mobile-image-hero-"+count+".jpg"
  }
  head.textContent = slider[count - 1].sliderHead;
  desc.textContent = slider[count - 1].sliderDesc;
};
btnRight.addEventListener("click", goRight);
btnLeft.addEventListener("click", goLeft);

const showNav = () => {
  navbar.classList.remove("hide-nav");
  navbar.classList.add("show-nav");
};
const hideNav = () => {
  navbar.classList.remove("show-nav");
  navbar.classList.add("hide-nav");
};
closeNav.addEventListener("click", hideNav);
openNav.addEventListener("click", showNav);
