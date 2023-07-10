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
