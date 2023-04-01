var currentButton;
var audioPlaying = false;

var playAudio = function (filePath) {
  if (audioPlaying == false) {
    audio.src = "./sounds" + filePath;
    audioPlaying = true; 
  } else if (currentButton == this && audioPlaying == true) {
    audio.pause();
    audioPlaying = false;
  } else if (currentButton != this) {
    audio.src = "./sounds" + filePath;
    currentButton.classList.toggle("paused");
    audioPlaying = true;
  }

  currentButton = this;
  currentButton.classList.toggle("paused");
}

audio.addEventListener("ended", function(){
  currentButton.classList.remove("paused");
});