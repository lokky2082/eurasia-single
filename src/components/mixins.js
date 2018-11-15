export const ObserverMix = {
  data() {
    return {
      observer: null
    }
  },
  created () {
    if (!('IntersectionObserver' in window)) {
      console.log('не поддерживает IntersectionObserver')
    } else {
      this.observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.intersectionRatio > 0) {
            entry.target.classList.add('in-view')
          } else {
            entry.target.classList.remove('in-view')
          }
        })
      })
    }
    
  },
  mounted () {
    if (!('IntersectionObserver' in window)) {
      console.log('123')
      this.$el.classList.add('in-view')
    } else {
      this.observer.observe(this.$el);
    }
    
  }
}