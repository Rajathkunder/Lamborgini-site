document.addEventListener("DOMContentLoaded", function () {
    const navbarToggle = document.getElementById("navbarToggle");
    const navbarCollapse = document.getElementById("navbarButtonsExample");

    navbarToggle.addEventListener("click", function () {
      if (navbarCollapse.classList.contains("show")) {
        navbarCollapse.classList.remove("show");
      } else {
        navbarCollapse.classList.add("show");
      }
    });
  });