document.addEventListener("DOMContentLoaded", function () {
  const home = document.querySelector(".home");

  home.addEventListener("click", function () {
    window.location.replace("http://127.0.0.1:5500/home/index.html");
  });
});
