<template>
  <section class="main full-screen grey-bg" >
    <div class="main-left">
      <header class="main_header">
        <div class="humburger" @click="showMenu">
         
        </div>
        <a v-if="main" :href="'tel:'+ main.phonerobot">{{main.phone}}</a>
      </header>
      <div class="main_title">
         <p>Жилые башни</p>
         <p><span>ЕВР</span><span class="main_title_big">А</span><span>ЗИЯ</span></p>
      </div>
      <BenefitList :list="list"/>
      <div class="main-left_bot">
        <div class="main-left_ready">
           <div>
              <p>Срок сдачи: {{main.ready}}</p>
              <h3>От <span class="accent-text-color">{{main.priceFrom}}</span> рублей</h3>
           </div>
           <div>
             <InfoCircle :percent="main.readyPercent"/>
           </div>
        </div>
        <div class="main-left_arr">
            <a :href="main.logoLink" class="main-logo">
              <img src="./../assets/logo-01.svg" alt="Актив строй"/>
            </a>
           <div class="scroll-down"></div>
        </div>
      </div>
    </div>
    <div class="main-right">
      <div class="main-right_imgs">
        <img class="main-img __day" src="../assets/01_day.jpg"/>
        <img class="main-img __night" src="../assets/01_night.jpg"/>
      </div>
      <div class="main-img_text">
        <p>Стираем границы между природой и центром</p>
      </div>
    </div>
  </section>
</template>

<script>
import { getMainBenefits } from '@/actions.js'
import { ObserverMix } from './mixins.js'

const BenefitList = () => import(
  /* webpackChunkName: "BenefitList" */ '@/components/BenefitList.vue'
)
const InfoCircle = () => import(
  /* webpackChunkName: "InfoCircle" */ '@/components/InfoCircle.vue'
)
export default {
  props: {
    main: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  mixins: [ObserverMix],
  components: {
     BenefitList,
     InfoCircle
  },
   data () {
    return {
      list: null
    }
  },
  created () {
   getMainBenefits().then(res => {
     this.list = res
   })
  },
  methods: {
    showMenu() {
      this.$emit('show-menu')
    }
  }
}
</script>

<style lang="scss">
  .main  {
    display: flex;
    justify-content: space-between;
    min-height: 900px;
    & > * {
      height: 100%;
    }
  }
  @media (orientation: portrait) {
  .main {
     min-height: 300px;
  }
}
  .main_title {
    width:423px;
    height:205px;
    margin: 48px auto 26px auto;
    background: url(../assets/logo_bg.svg);
    background-size: contain;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-weight: 700;
    align-items: center;
    justify-content: center;
    position: relative;
    transition: text-shadow 5s ease;
    text-shadow: rgba(236, 204, 17, 0.4) 0px 0px 0, 
    rgba(236, 204, 17, 0.5) 0px 0px 0,
    rgba(236, 204, 17, 0.5) 0px 0px 0,
     rgba(236, 204, 17, 0.5) 0px 0px 0,
     2px 2px 2px rgba(0,0,0,0.8);
     p {
       margin: 0;
     }
     p:nth-child(1) {
       position: absolute;
       top: 20px;
       left: 62px;
       font-size: 32px;
     }
     p:nth-child(2) {
      display: flex;
      font-size: 48px;
      align-items: center;
      justify-content: center;
     }
  }
  .in-view .main_title {
     text-shadow: rgba(236, 204, 17, 0.4) 0px 0px 10px, 
    rgba(236, 204, 17, 0.5) 0px 0px 20px,
    rgba(236, 204, 17, 0.5) 0px 0px 30px,
     rgba(236, 204, 17, 0.5) 0px 0px 40px,
     2px 2px 2px rgba(0,0,0,0.8);
  }
  
  .main-left {
    width: 35%;
    background: url(../assets/white_plaster.png);
  }
  .main-left_bot {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  .main-left_arr {
    position: relative;
    height: 120px;
    display: flex;
    margin-top: 20px;
  }
  .main-left_bot {
    padding: 10px 40px;
  }
  .main-right {
    width:65%;
    position: relative;
  }
  .main-img_text {
    position: absolute;
    bottom: 30px;
    right: 30px;
    max-width: 400px;
    color: #fff;
    font-size: 32px;
    font-weight: 700;
  }
  .main-right_imgs {
    height:100%;
    width: 100%;
    position: relative;
    & img {
      object-fit: cover;
    }
  }
  .main-img {
    width: 100%;
    height:100%;
    &.__night {
      position: absolute;
      top: 0;
      left:0;
      right:0;
      bottom:0;
      opacity: 0;
    }
  }
  .in-view {
    .main-img.__night {
       animation: showImg 5s ease 2s infinite alternate;
    }
  }
  .main_title_big {
    font-size: 300%;
    margin: 20px -10px 0 -10px;
  }
  .main_header {
    display: flex;
    font-size: 24px;
    font-weight: 700;
    padding: 20px 30px;
    & a {
      color: inherit;
      text-decoration: none;
    }
    //color: $dark-grey;
  }
  .main-logo {
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
    img {
      width: 120px;
    }
  }
  .main-left_ready {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  @keyframes showImg {
    to {
      opacity: 1;
    }
  }
</style>
