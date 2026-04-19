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

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const submitBtn = form.querySelector(".form-submit");
  submitBtn.textContent = "Sending…";
  submitBtn.disabled = true;

  const data = {
    name: form.name.value.trim(),
    interest: form.interest.value,
    message: form.message.value.trim(),
  };

  try {
    const res = await fetch("https://formspree.io/f/mqewblye", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      form.innerHTML = `<p class="form-success">Thanks, ${data.name}. I'll be in touch soon.</p>`;
    } else {
      throw new Error();
    }
  } catch {
    submitBtn.textContent = "Send it";
    submitBtn.disabled = false;
    const err = document.createElement("p");
    err.className = "form-error";
    err.textContent = "Something went wrong. Try again?";
    form.appendChild(err);
  }
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
