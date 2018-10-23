<template>
  <div class="benefits-list">
    <div class="benefit" v-for="(el, i) in list" :key="'ben'+ i">
      <svg viewBox="0 0 60 60">
        <use viewBox="0 0 60 60" :xlink:href="'/sprite.svg#' + el.icon"></use>
      </svg>
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

</style>
