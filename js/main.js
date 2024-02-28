const infoBtns = document.querySelectorAll(".info-dot");
const infoHints = document.querySelectorAll(".info-hint");

// клик по кнопкам с подсказками

for (let btn of infoBtns) {
  btn.addEventListener("click", function (e) {
    e.stopPropagation();
    for (let hint of infoHints) {
      hint.classList.add("none");
    }
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

// swiper

const swiper = new Swiper(".swiper", {
  // loop: true,
  // freeMode: true,

  slidesPerView: 4,
  spaceBetween: 42,

  breakpoints: {
    600: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    920: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1230: {
      slidesPerView: 4,
      spaceBetween: 42,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: "#sliderNext",
    prevEl: "#sliderPrev",
  },
});

// tabs

const tabsBtns = document.querySelectorAll("[data-tab]");
const tabsProducts = document.querySelectorAll("[data-tab-value]");

for (let btn of tabsBtns) {
  btn.addEventListener("click", function () {
    for (let btn of tabsBtns) {
      btn.classList.remove("tab-controls__btn--active");
    }

    this.classList.add("tab-controls__btn--active");

    // отобразить нужные товары и скрыть остальные

    for (let product of tabsProducts) {
      // если дата атрибут продукта равен дата атрибуту таба...
      if (this.dataset.tab === "all") {
        product.classList.remove("none");
      } else {
        if (this.dataset.tab === product.dataset.tabValue) {
          product.classList.remove("none");
        } else {
          product.classList.add("none");
        }
      }
    }

    swiper.update();
  });
}

// mobile nav

const mobileBtn = document.querySelectorAll("#mobile-btn");
const mobileMenu = document.querySelector(".mobile-nav-wrapper");

for (let btn of mobileBtn) {
  btn.addEventListener("click", () => {
    mobileMenu.classList.toggle("mobile-nav-wrapper--open");
  });
}
