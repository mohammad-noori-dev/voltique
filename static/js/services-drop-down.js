  const dropdown = document.querySelector(".dropdown");
  const trigger = dropdown.querySelector(".nav-link");

  trigger.addEventListener("click", function (e) {
    e.preventDefault();
    dropdown.classList.toggle("open");
  });

  document.addEventListener("click", function (e) {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove("open");
    }
  });