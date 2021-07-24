const imageArray = [
  "https://source.unsplash.com/1600x900/?cars",
  "https://source.unsplash.com/1600x900/?Women",
  "https://source.unsplash.com/1600x900/?tech",
  "https://source.unsplash.com/1600x900/?model",
  "https://source.unsplash.com/1600x900/?nature",
  "https://source.unsplash.com/1600x900/?grocery",
  "https://source.unsplash.com/1600x900/?hill",
  "https://source.unsplash.com/1600x900/?man",
  "https://source.unsplash.com/1600x900/?fashion",
];

// ------------------Adding images dynamically from array to DOM --------------

const container = document.querySelector(".container");
(function () {
  imageArray.forEach((image) => {
    container.innerHTML += `<div class="img">
          <img src=${image} alt="" />
        </div>`;
  });
})();
// addImages();

// --------------------------END--------------------------------------

const rightBtn = document.getElementById("btn-right");
const leftBtn = document.getElementById("btn-left");
const images = document.querySelectorAll(".img");
const heroBtns = document.querySelector(".herobtns");
let currentImageIndex = 0;

// --------------------------Slider Function--------------------------

const slide = () => {
  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  } else if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1;
  }
  let a = images.forEach((image, index) => {
    if (index === currentImageIndex) {
      image.classList.add("show-img");
      heroBtns.children[currentImageIndex].classList.add("fas");
      heroBtns.children[currentImageIndex].classList.remove("far");
    } else {
      image.classList.remove("show-img");
      heroBtns.children[index].classList.remove("fas");
      heroBtns.children[index].classList.add("far");
    }
  });
};

// -----------------Herobtn invoked function to go to a specific index-----------------

const gotoSpecific = (e) => {
  let index = e.target.id.split("_");
  currentImageIndex = Number(index[1]);
  slide();
};

// ---------------------------Right Slide-----------------------------

const right = () => {
  currentImageIndex++;
  slide();
};

// --------------------------------Left slide----------------------------

const left = () => {
  currentImageIndex--;
  slide();
};

// --------------------Adding Hero btns to DOM---------------------

images.forEach((image, index) => {
  heroBtns.innerHTML += `<i class="far fa-circle" id="herobtn_${index}"></i>`;
});

// ------------Initialising first image as default---------------------

slide();

// -----------------------Auto slide---------------------------

window.addEventListener("load", () => {
  setInterval(() => {
    right();
  }, 6000);
});

// ------------------ Event Listeners -------------------------

leftBtn.addEventListener("click", left);
rightBtn.addEventListener("click", right);
heroBtns.addEventListener("click", gotoSpecific);
