let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20;

function moveBackground(event) {
  const shapes = document.querySelectorAll(".shape");
  const x = event.clientX * scaleFactor;
  const y = event.clientX * scaleFactor;

  for (let i = 0; i < shapes.length; ++i) {
    const isOdd = i % 2 === 0;
    const boolInt = isOdd ? -1 : 1;
    shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`;
  }
}

function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
    document.body.classList += " dark-theme";
  } else {
    document.body.classList.remove("dark-theme");
  }
}

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";
  emailjs
    .sendForm(
      "service_sz89zkj",
      "template_6a5t7z5",
      event.target,
      "xSrf96z8wZJVPEI1y"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarily unavilable. Please contact me directly on, anthonycakin64@gmail.com"
      );
    });
}

function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open");
  }
  isModalOpen = true;
  document.body.classList += " modal--open";
}

//  loading screen
let loading = true;

// function handleLoadingScreen() {
//   const loadingScreen = document.getElementById("loading-page");
//   const mailBtn = document.querySelector(".mail__btn");
//   if (loading) {
//     document.body.style.overflow = "hidden";
//     mailBtn.classList.remove("mail__btn");
//     loadingScreen.classList.add("loading-screen");
//   }
//   // setTimeout(() => {
//   //   loading = false;
//   //   console.log(loading);
//   //   mailBtn.classList.add("mail__btn");
//   //   document.body.style.overflow = "auto";

//   //   loadingScreen.classList.remove("loading-screen");
//   // }, 4000);
// }
// document.addEventListener("DOMContentLoaded", handleLoadingScreen);

// document.addEventListener("DOMContentLoaded", () => {
// const progressBar = document.getElementsByClassName('loading-bar')[0]
// setInterval(() => {
//   const computeredStyle = getComputedStyle(progressBar)
//   const width = parseFloat(computeredStyle.getPropertyValue('--width')) || 0
// progressBar.style.setProperty('--width', width + .1)

// })
//   console.log(progressBar)
// });
