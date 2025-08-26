const slides = [
  "./images/home-slide-002.jpg",
  "./images/home-slide-003.jpg",
  "./images/home-slide-004.jpg",
  "./images/home-slide-005.jpg",
];

const header = document.querySelector(".header");

let slideIndex = 0;
const changeBackground = () => {
  header.style.backgroundImage = `linear-gradient(to right bottom,
        #28a745,
        rgba(0, 0, 0, 0.5)
        ),
        url("${slides[slideIndex]}")`;
  slideIndex = (slideIndex + 1) % slides.length;
};
setInterval(changeBackground, 5000);
changeBackground();
