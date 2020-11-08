 class AutoPause {
  constructor() {
    this.threshold = 0.25
    this.handleIntersection = this.handleIntersection.bind(this);
  }
  run(player) {
    this.player = player;
    const observer = new IntersectionObserver(this.handleIntersection, {
      threshold: this.threshold
    })

    observer.observe(player.media)
  }

  handleIntersection(entries) {
    const entry = entries[0]
    const isVisible = entry.intersectionRatio >= this.threshold
    if (isVisible) {
      this.player.playVideo();
    } else {
      this.player.pauseVideo();
    }
  }
}

export default AutoPause