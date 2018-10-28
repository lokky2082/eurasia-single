export const ObserverMix = {
  data() {
    return {
      observer: null
    }
  },
  created () {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
          entry.target.classList.add('in-view');
        } else {
          entry.target.classList.remove('in-view');
        }
      })
    })
  },
  mounted () {
    this.observer.observe(this.$el);
  }
}