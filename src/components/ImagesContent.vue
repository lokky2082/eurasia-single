<template>
  <div class="images-content">
     <ImagesContentItem v-for="(item, i) in list" :key="'item'+i" :item="item" :reverse="i===1"/>
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
  }
}
</script>

<style>
  .images-content {
    margin: 100px 0;
  }
</style>