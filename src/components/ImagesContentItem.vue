<template>
  <div class="images-content-item" :class="{reverse: reverse}" ref="row">
    <div class="images-content-words accent-text-color">
      {{item.word}}
    </div>
    <div class="images-content-item_img" :class="{slider: item.slider}">
      <swiper v-if="item.slider" 
      :options="swiperOption" 
      ref="mySwiper"
      >
        <swiper-slide v-for="(slide, index) in item.slider" :key="index">
          <img :src="slide.src"/>
          <div class="images-content-item_img_text">
            <span>{{slide.rooms}}-комн. квартира <span>{{slide.area}} м<sup>2</sup></span></span>
            <span class="slider-price">{{slide.price}} руб.</span>
          </div>
        </swiper-slide>
        <div class="arrow-left" slot="button-prev">
          
        </div>
        <div class="arrow-right" slot="button-next">

        </div>
      </swiper>
       <ImgDeco v-else :img="item.src" :alt="item.title" :stripsPosition="reverse ? 'right': 'left'"/>
    </div>
    <div class="images-content-item_text">
      <h4>{{item.title}}</h4>
      <p>{{item.text}}</p>
      <a href="http://activ2003.ru/catalog/show_complex_5/show_turn_5/">
         <button v-if="item.button" class="button">
           <span>Выбрать квартиру</span>
         </button>
      </a>
     
    </div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import ImgDeco from './ImgDeco.vue'
import LazyImg from './LazyImg.vue'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { ObserverMix } from './mixins.js'

export default {
  mixins: [ObserverMix],
  props: {
    item: {
      type: Object
    },
    reverse: {
      type: Boolean
    }
  },
  data () {
    return {
      swiperOption: {
        loop: true,
        navigation: {
          nextEl: '.arrow-right',
          prevEl: '.arrow-left',
        },
      },
      active: 0
    }
  },
  components: {
    ImgDeco,
    swiper,
    swiperSlide,
    LazyImg
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  methods: {
    showContent (val) {
     this.active = val
     this.swiper.slideTo(val, 1000, false)
    },
    showmodal () {
      this.$emit('showmodal')
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/vars.scss';
 .images-content-item {
   position: relative;
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin-bottom: 80px;
   &.reverse {
     flex-direction: row-reverse;
   }
 }
 .images-content-words {
   position: absolute;
   font-size: 80px;
   opacity: 0.8;

 }
 .images-content-item_img .arrow-right {
   position: absolute;
   top: 50%;
   transform: translateY(-50%);
   right: 0;
 }
 .images-content-item_img .arrow-left {
   position: absolute;
   top: 50%;
   transform: translateY(-50%);
   left: 0;
 }
 .slider-price {
  color: $accent;
  font-size: 24px;
  font-weight: 700;
  padding-left: 20px;
 }
 .images-content-item_img {
   width:640px !important;
   position: relative;
   /* &:before {
     content: '';
     position: absolute;
     top: 0;
     width:100%;
     left: 0;
     right: 0;
     bottom: 0;
     z-index: 5;
     background: $accent;
     // mix-blend-mode: multiply;
     mix-blend-mode: color;
     transition: opacity 1s ease;
   }*/
   &:not(.slider) {
      img {
        max-width: 100%;
        transform: scaleX(0.8);
        transition: transform 1s ease;
     }
   }
   img {
     max-width: 100%;
   }
 }
 .images-content-item_text {
   width:400px;
   margin-left: 30px;
   transition: transform 1.3s ease;
   transform: translateY(200px);
   transition-delay: 0.3s;
 }
 .images-content-words {
   opacity:0.3;
   font-family: 'EB Garamond', serif;
 }
 .slider-pagination_cont, .slider-pagination_bullets {
   display:  flex;
   justify-content: center;
   align-items: center;
 }
 .slider-pagination {
   margin-top: 20px;
 }
 .slider-bullet {
   width: 32px;
   height: 32px;
   display: flex;
   align-items: center;
   justify-content: center;
   border-radius: 50%;
   border: 2px solid currentColor;
   margin-left: 10px;
   cursor: pointer;
   &.active {
     color: $accent;
   }
 }
 .images-content-item_img_text {
   margin-top: 30px;
   text-align: center;
 }
 .images-content-item_text {
   p {
     margin-bottom: 30px;
   }
 }
 .in-view {
   .images-content-item_text {
      transform: translateY(0);
   }
   .images-content-item_img {
     &:not(.slider) {
       img  {
        transform: scale(1.1);
       }
     }
   }
 }
</style>