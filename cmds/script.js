document.addEventListener("DOMContentLoaded", function () {
  const home = document.querySelector(".home");

  home.addEventListener("click", function () {
    window.location.replace("http://lostfr.vercel.app/home/");
  });
});
