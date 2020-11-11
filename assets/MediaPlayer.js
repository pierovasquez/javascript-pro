class MediaPlayer {
  constructor(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];

    this._initPlugins();
  }
  _initPlugins() {
    const player = {
      playVideo: () => this.playVideo(),
      pauseVideo: () => this.pauseVideo(),
      media: this.media,
      get muted() {
        return this.media.muted;
      },
      set muted(value) {
        this.media.muted = value;
      }
    };
    this.plugins.forEach(plugin => {
      plugin.run(player);
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