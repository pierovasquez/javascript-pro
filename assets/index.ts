import MediaPlayer from './MediaPlayer';
import AutoPlay from './plugins/AutoPlay';
import AutoPause from './plugins/AutoPause';
import Ads from './plugins/Ads';


// When importing a class from a folder and this have an index.ts file, It will get the class declared inside of that file.
// 'Ads' is imported from the index.ts file which declared class has another name 'AdsPlugin'
const video = document.querySelector('video');
const player = new MediaPlayer({
  el: video,
  plugins: [ new AutoPlay(), new AutoPause(), new Ads()]
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

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch(error => {
    console.log(error.message);
  })
}