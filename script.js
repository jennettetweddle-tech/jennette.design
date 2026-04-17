window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

// Contact modal
const overlay = document.getElementById("contactModal");
const openBtn = document.getElementById("openContact");
const closeBtn = document.getElementById("modalClose");
const form = document.getElementById("contactForm");

function openModal() {
  overlay.classList.add("is-open");
  document.body.style.overflow = "hidden";
  setTimeout(() => closeBtn.focus(), 50);
}

function closeModal() {
  overlay.classList.remove("is-open");
  document.body.style.overflow = "";
}

openBtn.addEventListener("click", (e) => {
  e.preventDefault();
  openModal();
});

closeBtn.addEventListener("click", closeModal);

overlay.addEventListener("click", (e) => {
  if (e.target === overlay) closeModal();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && overlay.classList.contains("is-open")) closeModal();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = form.name.value.trim();
  const message = form.message.value.trim();
  const interest = form.interest.value;
  const subject = interest === "work" ? "Work enquiry from " + name : "Hello from " + name;
  window.location.href = `mailto:jennette.tweddle@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
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
