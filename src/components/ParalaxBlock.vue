<template>
  <div class="with-paralax">
    <parallax :speedFactor="0.15">
      <img src="./../assets/bg.png"/>
    </parallax>
    <div class="with-paralax_content">
      
    </div>
  </div>
</template>

<script>
import Parallax from 'vue-parallaxy'
export default {
  components: {
    Parallax
  }
}
</script>

<style>

</style>
