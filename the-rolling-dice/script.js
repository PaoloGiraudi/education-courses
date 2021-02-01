/*
In this challenge a casino has asked you to make an online dice that works just like 
it would in real life. Using the pre-made dice face that represents ‘one’, make the 
faces for ‘two’, ‘three’, ‘four’, ‘five’ and ‘six’. Now when the users clicks the 
dice on the screen the dice is expected to show one of the faces randomly.
*/

const dice = document.querySelector(".dice");
const dots = document.querySelectorAll(".dot");

dice.addEventListener("click", showDiceFace);

function showDiceFace() {
  dots.forEach((item) => item.classList.remove("show"));

  switch (Math.floor(Math.random() * 6) + 1) {
    case 1:
      dots[4].classList.add("show");
      break;
    case 2:
      dots[0].classList.add("show");
      dots[8].classList.add("show");
      break;
    case 3:
      dots[0].classList.add("show");
      dots[4].classList.add("show");
      dots[8].classList.add("show");
      break;
    case 4:
      dots[0].classList.add("show");
      dots[2].classList.add("show");
      dots[6].classList.add("show");
      dots[8].classList.add("show");
      break;
    case 5:
      dots[0].classList.add("show");
      dots[2].classList.add("show");
      dots[4].classList.add("show");
      dots[6].classList.add("show");
      dots[8].classList.add("show");
      break;
    case 6:
      dots[0].classList.add("show");
      dots[1].classList.add("show");
      dots[2].classList.add("show");
      dots[6].classList.add("show");
      dots[7].classList.add("show");
      dots[8].classList.add("show");
      break;
  }
}
