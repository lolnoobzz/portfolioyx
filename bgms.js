const audio = document.getElementById('background-music');


if (localStorage.getItem("musicPlaying") === "true") {
  audio.muted = false;
  audio.play();
}


const lastTime = localStorage.getItem('background-music-time');
if (lastTime) {
  audio.currentTime = parseFloat(lastTime);
}


audio.addEventListener('play', () => {
  localStorage.setItem("musicPlaying", "true");
  audio.muted = false;
});

audio.addEventListener('pause', () => {
  localStorage.setItem("musicPlaying", "false");
});


window.addEventListener('beforeunload', () => {
  localStorage.setItem('background-music-time', audio.currentTime);
});
