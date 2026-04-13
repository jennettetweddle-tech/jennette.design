window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

const h1 = document.querySelector("h1");
let ticking = false;

window.addEventListener("scroll", () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      h1.style.transform = `translateY(${window.scrollY * 0.12}px)`;
      ticking = false;
    });
    ticking = true;
  }
});
