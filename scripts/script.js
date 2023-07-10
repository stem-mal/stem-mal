const text = "STEM Model Arab League is the first Arab debating model in the STEM community.";
const h2Element = document.getElementById("auto-type");
let index = 0;
function typeWriter() {
  if (index < text.length) {
    h2Element.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 50);
  }
}

typeWriter();
let slideIndex = 1;
showSlides(slideIndex);
var timeout
// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function pause() {
    clearTimeout(timeout)
    document.getElementById("pause").style.display = "none";
    document.getElementById("play").style.display = "inline";
}
function play() {
    automatic()
    document.getElementById("pause").style.display = "inline";
    document.getElementById("play").style.display = "none";
}
// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function automatic() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    showSlides(slideIndex)
    timeout = setTimeout(automatic, 4000)
}

automatic()





