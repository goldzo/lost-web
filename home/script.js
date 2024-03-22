document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".container");
  const startMessage = document.getElementById("startMessage");
  const backgroundAudio = document.getElementById("backgroundAudio");

  // Play background audio
  function playBackgroundAudio() {
    if (backgroundAudio) {
      backgroundAudio.play().catch((error) => {
        // Auto-play was prevented by the browser
        console.error("Auto-play prevented:", error);
      });
    }
  }

  // Trigger playBackgroundAudio() on initial user interaction
  document.addEventListener("click", playBackgroundAudio);

  // Additionally, hide elements when the page loads initially
  hideElements();
});

const invite = document.querySelector(".earn");
const help = document.querySelector(".help");
const cmd = document.querySelector(".cmds");

cmd.addEventListener("click", function () {
  window.location = "http://lostfr.vercel.app/cmds/";
});
invite.addEventListener("click", function () {
  window.location = "http://lostfr.vercel.app/buy/";
});
help.addEventListener("click", function () {
  window.location = "http://lostfr.vercel.app/help/";
});
