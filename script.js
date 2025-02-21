document.addEventListener("DOMContentLoaded", function () {
  let sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    section.style.opacity = 0;
    section.style.transform = "translateY(20px)";
  });

  function fadeInSections() {
    sections.forEach((section, index) => {
      setTimeout(() => {
        section.style.transition =
          "opacity 0.6s ease-out, transform 0.6s ease-out";
        section.style.opacity = 1;
        section.style.transform = "translateY(0)";
      }, index * 200);
    });
  }

  fadeInSections();
});
