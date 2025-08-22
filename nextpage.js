let returnButton = document.getElementById("returnbutton");
let loader = document.querySelector(".loader");
returnButton.addEventListener("click", () => {
    nextPage();
});

function nextPage() {
   
  setTimeout(() => {
    window.location.href = "index.html";
  }, 3000);
  loader.style.display = "flex";
}
