<template>
  <section class="main">
    <article class="main_text">
       <h3>Жилые башни</h3>
       <h1>Евразия</h1>
       <BenefitList :list="list"/>
    </article>
    <aside class="main_img">
       
    </aside>
  </section>
</template>

<script>
import { getMainBenefits } from '@/actions.js'
const BenefitList = () => import(
  /* webpackChunkName: "BenefitList" */ '@/components/BenefitList.vue'
)

export default {
  components: {BenefitList},
  data () {
    return {
      list: {

      }
    }
  },
  created () {
   getMainBenefits().then(res => {
     this.list = res
   })
  }
}
</script>

<style lang="scss">
 @import "@/assets/styles/vars.scss";
 .main {
  display: flex;
  justify-content: space-between;
 }
 .main_text {
   width: 30%;
 }
 .main_img {
   width: 70%;
 }
</style>
