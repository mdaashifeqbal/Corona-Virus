let button = document.querySelector("#prepro");
let tag = document.querySelector(".loader");
button.addEventListener("click", () => {
  nextPage();
});

function nextPage() {
  tag.style.display = "flex";
  setTimeout(() => {
    window.location.href = "nextpage.html";
  }, 3000);
}
