import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';

const video = document.querySelector('video');
const player = new MediaPlayer({
  el: video,
  plugins: [ new AutoPlay()]
});
const button = document.querySelector('button');
const muteButton = document.getElementById('muteButton')




// Si hacemos directamente video.play(), este va a dar un error porque los navegadores no permiten ese comportamiento.
button.onclick = () => {
  player.toggleVideo();
}

muteButton.onclick = () => {
  player.toggleMute();
}