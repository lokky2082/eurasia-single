<template>
  <div class="images-content-item" :class="{reverse: reverse}" ref="row">
    <div class="images-content-words accent-text-color">
      {{item.word}}
    </div>
    <div class="images-content-item_img">
       <ImgDeco :img="item.src" :alt="item.title" :stripsPosition="reverse ? 'right': 'left'"/>
    </div>
    <div class="images-content-item_text">
      <h4>{{item.title}}</h4>
      <p>{{item.text}}</p>
    </div>
  </div>
</template>

<script>
import ImgDeco from './ImgDeco.vue'
export default {
  props: {
    item: {
      type: Object
    },
    reverse: {
      type: Boolean
    }
  },
  data () {
    return {
      observer: null
    }
  },
  created () {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
          console.log('in')
          entry.target.classList.add('in-view');
        } else {
          console.log('out')
          entry.target.classList.remove('in-view');
        }
      });
    });
  },
  mounted () {
    let row = this.$refs.row
    this.observer.observe(row);
  },
  components: {
    ImgDeco
  }
}
</script>

<style lang="scss">
 .images-content-item {
   position: relative;
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin-bottom: 80px;
   &.reverse {
     flex-direction: row-reverse;
   }
 }
 .images-content-words {
   position: absolute;
   font-size: 80px;
   opacity: 0.8;

 }
 .images-content-item_img {
   width:640px;
   img {
     max-width: 100%;
   }
 }
 .images-content-item_text {
   width:400px;
   margin-left: 30px;
 }
 .images-content-words {
   opacity:0.4;
 }
</style>