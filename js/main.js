/*! EFEITO NAVBAR ESCONDENDO */
const nav = document.querySelector("#navbar");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  if (lastScrollY < window.scrollY) {
    nav.classList.add("nav--hidden");
  } else {
    nav.classList.remove("nav--hidden");
  }

  lastScrollY = window.scrollY;
});
/* console.log(lastScrollY); */

/*! SCROLLREVEAL */
window.effect = ScrollReveal({ reset: true });
effect.reveal(".image1", { duration: 2000, delay: 250 });
effect.reveal(".image2", { duration: 2000, delay: 250 });
effect.reveal(".image3", { duration: 2000, delay: 250 });
effect.reveal(".image4", { duration: 2000, delay: 250 });
effect.reveal(".image5", { duration: 2000, delay: 250 });
effect.reveal(".image6", { duration: 2000, delay: 250 });
/* DOCUMENTATION: https://scrollrevealjs.org/guide/whats-new.html */
/* interval, delay */

const btnClickTop = document.querySelector("#btnTop");
btnClickTop.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

const btnClickBottom = document.querySelector("#btnBottom");
btnClickBottom.addEventListener("click", () => {
  document.body.scrollTop = 99999999999999999999999999999;
  document.documentElement.scrollTop = 99999999999999999999999999999;
});

/* ESCONDER ÍCONE */
const showBtnTop = document.querySelector("#showBtnTop");
const showBtnBottom = document.querySelector("#showBtnBottom");
const showHomeBtn = document.querySelector("#showHomeBtn")
window.onscroll = () => {
  if (
    document.body.scrollTop >= 2000 ||
    document.documentElement.scrollTop >= 2000
  ) {
    showHomeBtn.style.display = "block";
    showBtnTop.style.display = "block";
    showBtnBottom.style.display = "block";
  } else {
    showHomeBtn.style.display = "none";
    showBtnTop.style.display = "none";
    showBtnBottom.style.display = "none";
  }
};

/* ESCONDER ÍCONE */
/* const showBtnBottom = document.querySelector("#showBtnBottom");
window.onscroll = () => {
  if (
    document.body.scrollTop >= 2000 ||
    document.documentElement.scrollTop >= 2000
  ) {
    showBtnBottom.style.display = "block";
  } else {
    showBtnBottom.style.display = "none";
  }
}; */
