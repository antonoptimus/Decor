const infoBtns = document.querySelectorAll(".info-dot");
const infoHints = document.querySelectorAll(".info-hint");

// клик по кнопкам с подсказками

for (let btn of infoBtns) {
  btn.addEventListener("click", function (e) {
    e.stopPropagation();
    this.parentNode.querySelector(".info-hint").classList.toggle("none");
  });
}

// закрытие подсказок при клике по всему документу

document.addEventListener("click", () => {
  for (let hint of infoHints) {
    hint.classList.add("none");
  }
});

// запрет на всплытие события при клике на подсказку

for (let hint of infoHints) {
  hint.addEventListener("click", (e) => e.stopPropagation());
}
