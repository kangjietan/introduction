const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  // Toggle Nav
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    // Animate Links
    navLinks.forEach((link, idx) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${idx / 7 + 0.5 }s`;
      }
    });

    // Burger animation
    burger.classList.toggle('toggle');
  });
};

navSlide();
