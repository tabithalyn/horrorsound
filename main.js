const SOUND_KEYS = ['a', 's', 'd', 'f', 'g', 'h', 'z', 'x', 'c', 'v', 'b', 'n'];
const keys = document.querySelectorAll('.key');

keys.forEach(key => {
  key.addEventListener('click', () => playSound(key));
});

document.addEventListener('keydown', e => {
  if (e.repeat) return;
  const key = e.key;
  const keyIndex = SOUND_KEYS.indexOf(key);

  if (keyIndex > -1) playSound(keys[keyIndex]);
});


function playSound(key) {
  const soundAudio = document.getElementById(key.dataset.sound);
  soundAudio.currentTime = 0;
  soundAudio.play();
  key.classList.add('active');
  soundAudio.addEventListener('ended', () => {
    key.classList.remove('active');
  });
}