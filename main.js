function playAudio(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
}
function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");

keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playAudio);

keys.forEach((key) =>
  key.addEventListener("click", function (e) {
    let value = key.getAttribute("data-key");
    const audio = document.querySelector(`audio[data-key="${value}"]`);
    const keyAudio = document.querySelector(`div[data-key="${value}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    keyAudio.classList.add("playing");
  })
);
