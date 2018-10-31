<template>
  <div class="images-content">
     <ImagesContentItem 
     v-for="(item, i) in list" 
     :key="'item'+i" 
     :item="item" 
     :reverse="i===1"
     @showmodal="showmodal"
     />
  </div>
</template>

<script>
import ImagesContentItem from './ImagesContentItem.vue'
export default {
  props: {
    list: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    ImagesContentItem
  },
  methods: {
    showmodal () {
      console.log('modal')
      this.$emit('showmodal')
    }
  }
}
</script>

<style lang="scss">
  .images-content {
    margin: 100px 0;
  }
  .images-content-words {
    transition: transform 1s ease;
  }
  .images-content-item:nth-child(1) .images-content-words{
     top: -100px;
     transform: translate(-150%, -10%);
  }
  .images-content-item:nth-child(2) .images-content-words{
     bottom: 0;
     left:0;
     transform: translate(50%, 100%);
  }
   .images-content-item:nth-child(3) .images-content-words{
     bottom: 0;
     right:0;
     transform: translate(-100%, -80%);
  }
  .images-content-item.in-view {
     .images-content-words {
       animation: transformnone 2.5s 0.3s 1 ease-in-out forwards;
     }
  }
  @keyframes transformnone {
    to {
      transform: translate(0, 0);
    }
  }
</style>