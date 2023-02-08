var currentButton;
var audioPlaying = false;

var playAudio = function (filePath) {
  if (audioPlaying == false) {
    audio.src = "/Users/doom/Desktop/coding/projects/soundboard/" + filePath;
    // github.com/tabithalyn/horrorsound/sounds
    audioPlaying = true; 
  } else if (currentButton == this && audioPlaying == true) {
    audio.pause();
    audioPlaying = false;
  } else if (currentButton != this) {
    audio.src = "/Users/doom/Desktop/coding/projects/soundboard/" + filePath;
    currentButton.classList.toggle("paused");
    audioPlaying = true;
  }

  currentButton = this;
  currentButton.classList.toggle("paused");
}

audio.addEventListener("ended", function(){
  currentButton.classList.remove("paused");
});
