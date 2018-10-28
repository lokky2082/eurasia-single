<template>
  <div class="sticky-menu">
   <div class="humburger" @click="showMenu">
      <span></span>
      <span></span>
      <span></span>
  </div>
  <div class="sticky-menu_logo">
     <img src="./../assets/logo_eur.svg" alt="Башни Евразия">
  </div>
  </div>
</template>

<script>

export default {
  methods: {
    showMenu () {
      this.$emit('show-menu')
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss">
 .sticky-menu {
   width:100%;
   position: absolute;
   top:0;
   display: flex;
   justify-content: space-between;
   padding: 10px;
   overflow: hidden;
   align-items: center;
   &.in-view {
      position: fixed;
      background: rgba(255, 255, 255, 0.6);
      z-index: 1000;
   }
 }
 .sticky-menu_logo {
   & img {
  max-width: 100px;
   }
 }
</style>
