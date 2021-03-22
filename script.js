//play audio from keyboard
function playSoundKeyboard(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const piano__key = document.querySelector(
    `.piano-key[data-key="${e.keyCode}"]`
  );
  if (!audio) return; //stop the func
  audio.currentTime = 0;
  audio.play();
  piano__key.classList.add("piano-key-active");
}
//delete transition of keys
function removeTransition(e) {
  if (e.propertyName !== "transform") return; //skip if it's not a transform
  this.classList.remove("piano-key-active");
}
//eventListener of remove transition
const piano__keys = document.querySelectorAll(".piano-key");
piano__keys.forEach((piano__key) =>
  piano__key.addEventListener("transitionend", removeTransition)
);
//call the func playSoundKeyboard
window.addEventListener("keydown", playSoundKeyboard);
//////////////////////////////////////////////////////////////

//play audio from mouse
const keys = document.querySelectorAll(".piano-key");

let mouseDown = 0;
document.body.onmousedown = function () {
  mouseDown = 1;
};
document.body.onmouseup = function () {
  mouseDown = 0;
};

keys.forEach((key) => {
  key.addEventListener("mouseout", () => {
    key.classList.remove("piano-key-active");
  });
  key.addEventListener("mouseover", () => playNoteHover(key));
  key.addEventListener("click", () => playNote(key));
  key.addEventListener("mousedown", () => playNoteActive(key));
  key.addEventListener("mouseup", () => playNoteActiveUp(key));
});

function playNoteActive(key) {
  key.classList.add("piano-key-active");
}

function playNoteActiveUp(key) {
  key.classList.remove("piano-key-active");
}

function playNoteHover(key) {
  if (mouseDown) {
    key.classList.add("piano-key-active");
    const noteAudio = document.getElementById(key.dataset.note);
    noteAudio.currentTime = 0;
    noteAudio.play();
  }
}

function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note);
  noteAudio.currentTime = 0;
  noteAudio.play();
}

//////////////////////////////////////////////////////////////

//select Notes/Letters
const pianoKey = document.querySelectorAll(".piano-key");

const letters = document.getElementById("btn-letters");
letters.addEventListener("click", Letters);

const notes = document.getElementById("btn-notes");
notes.addEventListener("click", Notes);

function Letters() {
  letters.classList.add("btn-active");
  notes.classList.remove("btn-active");

  pianoKey.forEach((element) => {
    element.classList.add("piano-key-letter");
  });
}

function Notes() {
  notes.classList.add("btn-active");
  letters.classList.remove("btn-active");
  pianoKey.forEach((element) => {
    element.classList.remove("piano-key-letter");
  });
}
//////////////////////////////////////////////////////////////

//fullScreen
function fullscreen() {
  var isInFullScreen =
    (document.fullscreenElement && document.fullscreenElement !== null) ||
    (document.webkitFullscreenElement &&
      document.webkitFullscreenElement !== null) ||
    (document.mozFullScreenElement && document.mozFullScreenElement !== null) ||
    (document.msFullscreenElement && document.msFullscreenElement !== null);

  var docElm = document.documentElement;
  if (!isInFullScreen) {
    if (docElm.requestFullscreen) {
      docElm.requestFullscreen();
    } else if (docElm.mozRequestFullScreen) {
      docElm.mozRequestFullScreen();
    } else if (docElm.webkitRequestFullScreen) {
      docElm.webkitRequestFullScreen();
    } else if (docElm.msRequestFullscreen) {
      docElm.msRequestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  }
}
//////////////////////////////////////////////////////////////
