class MediaPlayer {
  media: HTMLMediaElement;
  plugins: Array<any>;
  constructor(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];

    this.initPlugins();
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