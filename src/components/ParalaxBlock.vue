<template>
  <div class="with-paralax">
    <div class="with-paralax-parallax">
      <!--<img src="./../assets/bg.png"/>-->
    </div>
    <div class="with-paralax_content">
       <slot></slot>
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

<style lang="scss">
.with-paralax {
  position: relative;
  padding: 1px 0;
  background: url(./../assets/bg.png);
  background-attachment: fixed;
}
.with-paralax-parallax {
  position: absolute;
  top:0;
  width: 100%;
  z-index: -1;
  & img {
    width:100%;
  }
}
.with-paralax_content {
  width: 100%;
}
</style>
