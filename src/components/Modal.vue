<template>
  <div class="modal">
    <div class="modal-content">
      <div class="close" @click="close"></div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
   close () {
     this.$emit('close')
   }
  }
}
</script>

<style lang="scss">

@import '@/assets/styles/vars.scss';
 .modal {
   position: fixed;
   top:0;
   left: 0;
   bottom:0;
   right: 0;
   background: rgba($dark-grey, 0.6);
   display: flex;
   justify-content: center;
   align-items: center;
   z-index: 1000;
   & .close {
     left: auto;
     right:30px;
     top:20px;
   }
 }
 .modal-content {
   background: #fff;
   position: relative;
   padding: 75px 61px 85px 61px;
 }
</style>
