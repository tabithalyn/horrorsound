var currentButton;
var audioPlaying = false;

var playAudio = function (filePath) {
  if (audioPlaying == false) {
    audio.src = "github.com/tabithalyn/horrorsound/sounds" + filePath;
    audioPlaying = true; 
  } else if (currentButton == this && audioPlaying == true) {
    audio.pause();
    audioPlaying = false;
  } else if (currentButton != this) {
<<<<<<< HEAD
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
=======
    audio.src = "github.com/tabithalyn/horrorsound/sounds" + filePath;
    currentButton.classList.toggle("paused") 
    audioPlaying = true; 
  }

  currentButton = this;
  currentButton.classList.toggle("paused")    
} 
>>>>>>> 37d0dad1e8c94de27ccf13a56970ba2e47b0100d
