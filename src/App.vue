<template>
  <div id="app">
    <div id="home"></div>
    <Menu :show="showMenu" @close="toggleMenu(false)"/>
    <Main @show-menu="toggleMenu(true)"/>
    <div id="flats"></div>
    <paralax-block>
       <div class="wr-content">
         <h2 class="grey-text-color">Квартиры,</h2>
         <h3 class="grey-text-color">созданные для комфорта и уюта</h3>
         <ImagesContent :list="comfortList"/>
       </div>
    </paralax-block>
     <div id="entrance"></div>
    <section class="grey-bg pd-tb-50">
      <div class="wr-content">
        <h2 class="grey-text-color">Современные подъезды</h2>
        <Slider :list="sliderEntrance"/>
      </div>
    </section>
     <div id="security"></div>
     <paralax-block>
       <div class="wr-content">
         <h2 class="grey-text-color">Безопасная</h2>
         <h3 class="grey-text-color">придомовая территория</h3>
         <ImagesContent :list="securityList"/>
       </div>
    </paralax-block>
     <div id="parking"></div>
     <section class="grey-bg pd-tb-50">
      <div class="wr-content">
        <h2 class="grey-text-color">Большой и удобный паркинг </h2>
        <Slider :list="parkingList"/>
      </div>
    </section>
     <div id="contacts"></div>
     <paralax-block>
       <div class="wr-content">
         <div class="contact-button">
           <button class="button" @click="showmodal=true">
             <span>Отправить заявку</span>
             </button>
         </div>
         <modal @close="modalClose" v-if="showmodal">
           <OrderForm @close="modalClose"/>
         </modal>
         <h2 class="grey-text-color">Контакты</h2>
         <Contacts/>
       </div>
    </paralax-block>
     <div id="infra"></div>
  </div>
</template>

<script>
import { getComfort, getEntrance,  getSecurity, getParking } from '@/actions.js'
import Main from "./components/Main.vue";
import Menu from "./components/Menu.vue";
import ParalaxBlock from "./components/ParalaxBlock.vue";
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
    OrderForm
  },
  data() {
    return {
      showMenu: false,
      comfortList: null,
      sliderEntrance: null,
      securityList: null,
      parkingList: null,
      showmodal: false
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
  },
  methods: {
    toggleMenu(val) {
      console.log(val)
      this.showMenu = val
    },
    modalClose () {
     this.showmodal = false
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
.contact-button {
  padding: 20px 0;
  display: flex;
  justify-content: flex-end;
}
</style>
