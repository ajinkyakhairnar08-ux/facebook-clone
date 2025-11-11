const navLinks = document.querySelectorAll(".centernav .nav-link");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    // remove active from all
    navLinks.forEach(l => l.classList.remove("active"));
    // add active only to clicked link
    link.classList.add("active");
  });
});
