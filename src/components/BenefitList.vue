<template>
  <div class="benefits-list">
    <div class="benefit" v-for="(el, i) in list" :key="'ben'+ i">
      <div class="benefit-ico">
         <svg viewBox="0 0 60 60">
           <use viewBox="0 0 60 60" :xlink:href="'/sprite.svg#' + el.icon"></use>
        </svg>
      </div>
      <span>{{el.text}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style>
  .benefits-list {
    padding: 50px 30px;
  }
  .benefit {
    display:flex;
    align-items: center;
    
  }
  .benefit-ico {
    width:60px;
    height: 60px;
   margin-right: 25px;
  }
  .benefit-ico  svg {
    width:100%;
  }
</style>
