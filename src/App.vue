<template>
  <div id="app">
    <div id="home"></div>
    <Menu :show="showMenu" @close="toggleMenu(false)"/>
    <Main @show-menu="toggleMenu(true)" v-if="main" :main="main"/>
    <div id="flats"></div>
    <paralax-block>
      <StickyMenu @show-menu="toggleMenu(true)"/>
       <div class="wr-content">
         <h2 class="grey-text-color">Квартиры,</h2>
         <h3 class="grey-text-color">созданные для комфорта и уюта</h3>
         <ImagesContent @showmodal="modal" :list="comfortList"/>
       </div>
    </paralax-block>
     <div id="entrance"></div>
    <section class="grey-bg pd-tb-50">
      <div class="wr-content">
        <h2 class="grey-text-color">Современные подъезды</h2>
        <SliderCubes v-if="sliderEntrance" :list="sliderEntrance" @showmodal="showmodal=true"/>
      </div> 
    </section>
     <div id="security"></div>
     <paralax-block>
       <div class="wr-content">
         <h2 class="grey-text-color">Безопасная</h2>
         <h3 class="grey-text-color">придомовая территория</h3>
         <ImagesContent @showmodal="modal" :list="securityList"/>
       </div>
    </paralax-block>
     <div id="parking"></div>
     <section class="grey-bg pd-tb-50">
      <div class="wr-content">
        <h2 class="grey-text-color">Большой и удобный паркинг </h2>
        <SliderCubes v-if="parkingList" :list="parkingList" @showmodal="showmodal=true"/>
      </div>
    </section>
     <div id="contacts"></div>
     <paralax-block>
       <div class="wr-content">
         <h2 class="grey-text-color">Контакты</h2>
         <Contacts/>
       </div>
    </paralax-block>
    <Infra/>
    <modal @close="modalClose" v-if="showmodal">
        <OrderForm @close="modalClose"/>
    </modal>
  </div>
</template>

<script>
import { getComfort, getMain, getEntrance,  getSecurity, getParking } from '@/actions.js'
import Main from "./components/Main.vue"
import Menu from "./components/Menu.vue"
import ParalaxBlock from "./components/ParalaxBlock.vue"
import StickyMenu from "./components/StickyMenu.vue"
const ImagesContent = () => import(
  /* webpackChunkName: "ImagesContent" */ '@/components/ImagesContent.vue'
)
const Slider = () => import(
  /* webpackChunkName: "Slider" */ '@/components/Slider.vue'
)
const Contacts = () => import(
  /* webpackChunkName: "Slider" */ '@/components/Contacts.vue'
)
const Modal = () => import(
  /* webpackChunkName: "Modal" */ '@/components/Modal.vue'
)
const OrderForm = () => import(
  /* webpackChunkName: "OrderForm" */ '@/components/OrderForm.vue'
)
const Infra = () => import(
  /* webpackChunkName: "Infra" */ '@/components/Infra.vue'
)
const SliderCubes = () => import(
  /* webpackChunkName: "SliderCubes" */ '@/components/SliderCubes.vue'
)
export default {
  name: "app",
  components: {
    Main,
    Menu,
    ParalaxBlock,
    ImagesContent,
    Slider,
    Contacts,
    Modal,
    OrderForm,
    Infra,
    StickyMenu,
    SliderCubes
  },
  data() {
    return {
      showMenu: false,
      comfortList: null,
      sliderEntrance: null,
      securityList: null,
      parkingList: null,
      showmodal: false,
      main: null
    }
  },
  created () {
    
    getComfort().then(res => {
     this.comfortList = res
    })
    getEntrance().then(res => {
     this.sliderEntrance = res
    })
    getSecurity().then(res => {
     this.securityList = res
    })
    getParking().then(res => {
     this.parkingList = res
    })
    getMain().then(res => {
     this.main = res
    })
  },
  mounted () {
    setTimeout(()=>{
      let preloder = document.getElementById('preloader')
      preloader.classList.add('hide')
    }, 500)
    setTimeout(()=>{
      let preloder = document.getElementById('preloader')
      preloader.style.display = 'none'
    }, 700)
  },
  methods: {
    toggleMenu(val) {
      console.log(val)
      this.showMenu = val
    },
    modalClose () {
     this.showmodal = false
    },
    modal () {
      console.log('app')
      this.showmodal = true
    }
  }
};
</script>

<style lang="scss">
@import '@/assets/styles/vars.scss';
@import '@/assets/styles/common.scss';
body {
  
}
#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #5D5354;
  width: 100%;
  overflow: hidden;
}
.wr-content {
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 30px;
}
.contact-button {
  padding: 20px 0;
  display: flex;
  justify-content: flex-end;
}
</style>
