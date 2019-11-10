const html = document.documentElement;

const body = document.body;
const div = document.querySelector("div");
const button = document.querySelector("button");

function test(event) {
  if (event.target.classList.contains("first")) {
    paragraph.textContent = "You clicked First button";
    console.log("capturing", this.tagName);
  } else if (event.target.classList.contains("second")) {
    paragraph.textContent = "You clicked Second button";
    console.log("capturing", this.tagName);
  } else if (event.target.classList.contains("third")) {
    paragraph.textContent = "You clicked Third button";
    console.log("capturing", this.tagName);
  }
}

html.addEventListener("click", test, true);
body.addEventListener("click", test, true);
div.addEventListener("click", test, true);
btn.addEventListener("click", test, true);
html.addEventListener("click", test);
body.addEventListener("click", test);
div.addEventListener("click", test);
