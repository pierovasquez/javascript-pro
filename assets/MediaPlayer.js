function MediaPlayer(config) {
  this.media = config.el;
  this.plugins = config.plugins || [];

  this._initPlugins();
}

MediaPlayer.prototype._initPlugins = function() {
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
  }
  this.plugins.forEach(plugin => {
    plugin.run(player);
  })
}

MediaPlayer.prototype.mute = function() {
  this.media.muted = true;
}

MediaPlayer.prototype.unMute = function() {
  this.media.muted = false;
}
MediaPlayer.prototype.playVideo = function () {
  this.media.play();
}

MediaPlayer.prototype.pauseVideo = function () {
  this.media.pause();
}

MediaPlayer.prototype.toggleVideo = function () {
  if (this.media.paused) {
    this.playVideo();
  } else {
    this.pauseVideo();
  }
}

MediaPlayer.prototype.toggleMute = function() {
  if (this.media.muted) {
    this.media.muted = false;
  } else {
    this.media.muted = true;
  }
}

export default MediaPlayer;