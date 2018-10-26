<template>
  <div id="app">
    <Menu :show="showMenu" @close="toggleMenu(false)"/>
    <Main @show-menu="toggleMenu(true)"/>
    <paralax-block>
       <div class="wr-content">
         <h2 class="grey-text-color">Квартиры,</h2>
         <h3 class="grey-text-color">созданные для комфорта и уюта</h3>
         <ImagesContent :list="comfortList"/>
       </div>
    </paralax-block>
  </div>
</template>

<script>
import { getComfort } from '@/actions.js'
import Main from "./components/Main.vue";
import Menu from "./components/Menu.vue";
import ParalaxBlock from "./components/ParalaxBlock.vue";
const ImagesContent = () => import(
  /* webpackChunkName: "ImagesContent" */ '@/components/ImagesContent.vue'
)

export default {
  name: "app",
  components: {
    Main,
    Menu,
    ParalaxBlock,
    ImagesContent
  },
  data() {
    return {
      showMenu: false,
      comfortList: null
    }
  },
  created () {
    getComfort().then(res => {
     this.comfortList = res
    })
  },
  methods: {
    toggleMenu(val) {
      console.log(val)
      this.showMenu = val
    }
  }
};
</script>

<style lang="scss">
@import '@/assets/styles/vars.scss';
@import '@/assets/styles/common.scss';
#app {
  font-family: 'Roboto', sans-serif;;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #5D5354;
}
.wr-content {
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 30px;
}
</style>
