const jsConfetti = new JSConfetti();

function triggerConfetti() {
  jsConfetti.addConfetti({
    emojis: ["❤️", "❤️", "❤️"],
    confettiNumber: 100,
    confettiRadius: 6,
  });
}

let slideIndex = 1;
showSlides(slideIndex);

// Automatic slideshow
function startAutoSlide() {
  setInterval(() => {
    changeSlide(1); // Move to next slide
  }, 5000); // Change slide every 5 seconds
}

function changeSlide(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  let slides = document.getElementsByClassName("slide");
  if (n > slides.length) slideIndex = 1; // Loop back to first slide
  if (n < 1) slideIndex = slides.length; // Loop to last slide
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

function showLoveLetter() {
  document.getElementById("loveLetterModal").style.display = "flex";
}

function closeLoveLetter() {
  document.getElementById("loveLetterModal").style.display = "none";
}

// Countdown to July 27, 2025, 12:00 AM CAT
function updateCountdown() {
  const now = new Date();
  const birthday = new Date("2025-07-27T00:00:00+02:00"); // CAT is UTC+2
  const diff = birthday - now;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  document.getElementById("countdown" ).textContent = `Days until your birthday: ${days}`;
}

setInterval(updateCountdown, 1000); // Update every second
window.onload = function () {
  triggerConfetti();
  updateCountdown();
  startAutoSlide(); // Start the automatic slideshow
};
