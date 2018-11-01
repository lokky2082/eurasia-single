<template>
  <div class="sticky-menu">
    <div class="humburger-holder"  @click="showMenu">
       <div class="humburger">
          <span></span>
          <span></span>
          <span></span>
      </div>
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
   position: fixed;
   top:0;
   display: flex;
   justify-content: space-between;
   padding: 10px;
   overflow: hidden;
   align-items: center;
   z-index: 1000;
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
 .humburger-holder {
   background: #fff;
   width: 60px;
   height: 60px;
   border-radius: 50%;
   padding: 15px 10px;
   box-shadow: 0 0 5px 0px rgba(0, 0, 0, 0.2);
 }
</style>
