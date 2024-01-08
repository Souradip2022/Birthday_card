let book = document.querySelector(".book");
let paper = document.querySelector(".paper");
let front = document.querySelector(".front")
let back = document.querySelector(".back");
let p2Front = document.querySelector("#p2 .front");
let addExtra = document.querySelector("#p2 #front2");
let timeOutId;

front.addEventListener("mouseover", glowCard);
function glowCard() {
  front.classList.add("glow-front");
  back.classList.add("glow-front");
  paper.style.transform = "scale(1.1)";

 }

book.addEventListener("mousedown", openCard)
function openCard(event) {
  // Clear any existing timeout
  clearTimeout(timeOutId);

  // Apply the "flipped" class to all children elements after a slight delay
  timeOutId = setTimeout(() => {
    book.firstElementChild.classList.add("flipped");
    p2Front.style.transform = "scale(1.1)";
    p2Front.style.transformOrigin = "center"
    // p2Front.style.transform = "scale(1.2)";
    p2Front.style.transition = "transform 0s";

    book.style.transform = "translateX(50%)";
    paper.classList.add("inner-glow");
    back.classList.add("inner-glow");
    back.classList.add("back-border-radius");
    addExtra.classList.add("add-extra");

  }, 200);// Adjust the delay as needed
}

book.addEventListener("mouseleave", closeCard);
function closeCard(event) {
  clearTimeout(timeOutId);

  timeOutId = setTimeout(() => {
    book.firstElementChild.classList.remove("flipped");
    book.style.transform = "translateX(0%)";

    paper.style.transform = "scale(1)";
    p2Front.style.transform = "scale(1)"
    p2Front.style.transition = "transform 0.5s";

    front.classList.remove("glow-front");
    back.classList.remove("glow-front");
    back.classList.remove("inner-glow")
    paper.classList.remove("inner-glow");
    back.classList.remove("back-border-radius");
    addExtra.classList.remove("add-extra");
  }, 200);
}