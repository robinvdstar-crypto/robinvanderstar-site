const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const year = document.querySelector("[data-year]");
const profileImage = document.querySelector("[data-profile-image]");

function syncHeader() {
  header?.classList.toggle("is-scrolled", window.scrollY > 12);
}

navToggle?.addEventListener("click", () => {
  const isOpen = nav?.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(Boolean(isOpen)));
});

nav?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    nav.classList.remove("is-open");
    navToggle?.setAttribute("aria-expanded", "false");
  }
});

window.addEventListener("scroll", syncHeader, { passive: true });
syncHeader();

if (year) {
  year.textContent = new Date().getFullYear();
}

profileImage?.addEventListener("error", () => {
  profileImage.closest(".hero-photo-card")?.setAttribute("hidden", "");
});
