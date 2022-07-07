$(document).ready(async function () {
  // await loadFull(tsParticles);

  $("#tsparticles")
    .particles()
    .ajax("particles.json", function (container) {
      // container is the particles container where you can play/pause or stop/start.
      // the container is already started, you don't need to start it manually.
    });

  });