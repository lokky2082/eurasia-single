<template>
   <div class="img-deco" ref="img">
    <div class="img-deco_strips" :class="stripsPosition">
        <span></span>
        <span></span>
        <span></span>
    </div>
      <LazyImg :img="{src: img, title:alt}"/>
  </div>
</template>

<script>
import LazyImg from './LazyImg.vue'
export default {
  name: 'img-deco',
  props: {
    img: {
      type: String
    },
    alt: {
      type: String
    },
    stripsPosition: {
       type: String,
       default () {
         return 'left'
       }
    }
  },
  data () {
    return {
      observer: null,
      src: ''
    }
  },
  components: {
    LazyImg
  },
  created () {
    const config = {
      rootMargin: '-200px',
      threshold:  [0, 0.5, 0.5, 0.75, 1]
    };
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
          entry.target.classList.add('grow');
        } else {
          entry.target.classList.remove('grow');
        }
      });
    }, config);
   
  },
  mounted () {
    let img = this.$refs.img
    this.observer.observe(img);
  },
  methods: {
    
  }
}
</script>

<style lang="scss">
   @import '@/assets/styles/vars.scss';
  .img-deco {
    position: relative;
     &.grow {
       .img-deco_strips span {
          animation: grow 1.5s  1 ease forwards
       }
     }
  }
  .img-deco_strips {
     display: flex;
     align-items: center;
     justify-content: space-between;
     width: 60px;
     position: absolute;
     bottom: -20%;
     z-index: 10;
     span {
       width: 10px;
       background: $middle-grey;
       transform: scaleY(0);
     }
     &.left {
       left: 40px;
       span {
        height: 180px;
       }
       span:nth-child(2) {
         height: 300px;
       }
      span:nth-child(1) {
         background: $accent;
       }
       span:nth-child(3) {
        z-index: -1;
       }
     }
     &.right {
       right: 40px;
       span {
        height: 180px;
       }
       span:nth-child(1) {
        z-index: -1;
       }
       span:nth-child(2) {
         height: 300px;
       }
      span:nth-child(3) {
         background: $accent;
       }
     }
    
   }
@keyframes grow {
  to {
    transform: scaleY(1)
  }
}
</style>