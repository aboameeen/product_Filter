let switcherlis = document.querySelectorAll(".switcher li");
let imgs = Array.from(document.images);

switcherlis.forEach((li) => {
  li.addEventListener("click", removeactive);
  li.addEventListener("click", manigeimage);
});

function removeactive() {
  switcherlis.forEach((li) => {
    li.classList.remove("active");
    this.classList.add("active");
  });
}

//image
function manigeimage() {
  imgs.forEach((img) => {
    img.style.display = "none";
  });
  document.querySelectorAll(this.dataset.cat).forEach((e) => {
    e.style.display = "block";
  });
}
