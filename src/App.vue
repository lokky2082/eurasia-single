<template>
  <div id="app">
    <Menu :show="showMenu" @close="toggleMenu(false)"/>
    <Main @show-menu="toggleMenu(true)"/>
    <ParalaxBlock/>
  </div>
</template>

<script>
import Main from "./components/Main.vue";
import Menu from "./components/Menu.vue";
import ParalaxBlock from "./components/ParalaxBlock.vue";
export default {
  name: "app",
  components: {
    Main,
    Menu,
    ParalaxBlock
  },
  data() {
    return {
      showMenu: false
    }
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
</style>
