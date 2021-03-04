document.addEventListener(
  "DOMContentLoaded",
  () => {
    function animateSVG(id, delay = 0, delayIncrement) {
      const logo = document.getElementById(id);
      const logoPaths = document.querySelectorAll(`#${id} path`);
      logo.style.animation = `fill 0.5s ease forwards ${delayIncrement * (logoPaths.length + 2.5)}s`;
      for (let i = 0; i < logoPaths.length; i++) {
        logoPaths[i].style.strokeDasharray = logoPaths[i].getTotalLength();
        logoPaths[i].style.strokeDashoffset = logoPaths[i].getTotalLength();
        logoPaths[i].style.animation = `line-anim 2s ease forwards ${delay}s`;
        delay += delayIncrement;
      }
    }
    // Set the id of SVG, delay time in seconds to start animation and delay between each animation
    animateSVG("kang", 0, 0.4);
  },
  false
);
