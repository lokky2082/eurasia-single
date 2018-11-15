<template>
  <img :src="src" :alt="img.title">
</template>

<script>
export default {
  props: {
    img: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data () {
    return {
      src: '',
      observer: null
    }
  },
   created () {
    const config = {
      rootMargin: '300px'
    };
    if (!('IntersectionObserver' in window)) {
      console.log('не поддерживает IntersectionObserver')
    } else {
      this.observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.intersectionRatio > 0) {
            this.src = this.img.src
          } 
        });
      }, config)
    }
  },
  mounted () {
    if (!('IntersectionObserver' in window)) {
      this.src = this.img.src
    } else {
      this.observer.observe(this.$el)
    }
    
  }
}
</script>

<style>

</style>
