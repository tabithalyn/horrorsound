var currentButton;	// global scope track the song playing
var audioPlaying = false; // global scope toggle audio state on/off

var playAudio = function (filePath) {
  if (audioPlaying == false) {
    audio.src = "/horrorsound" + filePath;
    audioPlaying = true; 
  } else if (currentButton == this && audioPlaying == true) {
    audio.pause();
    audioPlaying = false;
  } else if (currentButton != this) {
    audio.src = "/horrorsound" + filePath;
    currentButton.classList.toggle("paused") 
    audioPlaying = true; 
  }

  currentButton = this;
  currentButton.classList.toggle("paused")    
} 
