const leftButton = document.querySelector(".slideLeft");
const rightButton = document.querySelector(".slideRight");
const sliderWindow = document.querySelector(".sliderWindow");
const card = document.querySelector(".card");

const cards = document.querySelectorAll(".card");
const cardsLength = cards.length;

var transform = 0;

leftButton.addEventListener("click", () => {
  transform += 360;
  if (transform >= 0) {
    leftButton.classList.add("hidden");
  } else if (-(card.clientWidth * cardsLength) < transform) {
    rightButton.classList.remove("hidden");
  }

  sliderWindow.style.transform = "translateX(" + transform + "px)";
  console.log(transform);
});

rightButton.addEventListener("click", () => {
  transform -= 360;
  if (transform < 0) {
    leftButton.classList.remove("hidden");
    if (-(card.clientWidth * cardsLength) + 360 > transform) {
      rightButton.classList.add("hidden");
    }
  }

  sliderWindow.style.transform = "translateX(" + transform + "px)";
  console.log(-(card.clientWidth * cardsLength));
  console.log(transform);
});
