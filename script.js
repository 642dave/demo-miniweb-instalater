document.addEventListener("DOMContentLoaded", () => {
  /* -------------------------------------------------
   Mobile nav (hamburger)
   ------------------------------------------------- */
  const nav = document.getElementById("site-nav");
  const navToggle = document.querySelector(".nav-toggle");

if (nav && navToggle) {
  const closeNav = () => {
    nav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Otevřít menu");
  };

  const openNav = () => {
    nav.classList.add("is-open");
    navToggle.setAttribute("aria-expanded", "true");
    navToggle.setAttribute("aria-label", "Zavřít menu");
  };

  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.contains("is-open");
    if (isOpen) closeNav();
    else openNav();
  });

  // Close menu when clicking a link (better UX)
  nav.addEventListener("click", (e) => {
    if (e.target.matches("a")) {
      closeNav();
    }
  });

  // Close when clicking outside
  document.addEventListener("click", (e) => {
    const clickedInside =
      nav.contains(e.target) || navToggle.contains(e.target);

    if (!clickedInside) {
      closeNav();
    }
  });

  // Close on ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeNav();
  });
}

  /* -------------------------------------------------
     Footer year (keeps demo up to date automatically)
     ------------------------------------------------- */
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* -------------------------------------------------
     Contact form demo handling
     ------------------------------------------------- */
  const form = document.querySelector(".contact-form");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Remove existing message if any
    const oldMessage = form.querySelector(".form-success");
    if (oldMessage) {
      oldMessage.remove();
    }

    // Create success message
    const message = document.createElement("p");
    message.className = "form-success";
    message.textContent = "Děkuji za zprávu. Ozvu se vám co nejdříve.";

    form.appendChild(message);

    // Reset form fields
    form.reset();

    // Scroll message into view
    message.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });

});


