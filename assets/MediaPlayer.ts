class MediaPlayer {
  media: HTMLMediaElement;
  plugins: Array<any>;
  container: HTMLDivElement ;
  constructor(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];
    this.initPlayer();
    this.initPlugins();
  }

  private initPlayer() {
    this.container = document.createElement('div');
    this.container.style.position = 'relative';
    // There we are putting the container div just before the video and after that, the video inside the container div.
    this.media.parentNode.insertBefore(this.container, this.media);
    this.container.appendChild(this.media);
  }
  private initPlugins() {
    this.plugins.forEach(plugin => {
      plugin.run(this);
    });
  }
  mute() {
    this.media.muted = true;
  }
  unMute() {
    this.media.muted = false;
  }
  playVideo() {
    this.media.play();
  }
  pauseVideo() {
    this.media.pause();
  }
  toggleVideo() {
    if (this.media.paused) {
      this.playVideo();
    } else {
      this.pauseVideo();
    }
  }
  toggleMute() {
    if (this.media.muted) {
      this.media.muted = false;
    } else {
      this.media.muted = true;
    }
  }
}







export default MediaPlayer;