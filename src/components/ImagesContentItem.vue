<template>
  <div class="images-content-item" :class="{reverse: reverse}" ref="row">
    <div class="images-content-words accent-text-color">
      {{item.word}}
    </div>
    <div class="images-content-item_img">
      <swiper v-if="item.slider" 
      :options="swiperOption" 
      ref="mySwiper"
      >
        <swiper-slide v-for="(slide, index) in item.slider" :key="index">
          <LazyImg :img="{src: slide, title:item.title}"/>
        </swiper-slide>
         <div class="slider-pagination" slot="pagination">
           <div class="slider-pagination_cont">
              <div class="slider-pagination_text">Комнат:</div>
              <div class="slider-pagination_bullets">
                  <div class="slider-bullet" 
                  v-for="(slide, index) in item.slider" 
                  :key="index+'bull'"
                  @click="showContent(index)"
                  :class="{active: active===index}"
                  >
                    {{index+1}}
                  </div>
              </div>
           </div>
         </div>
      </swiper>
       <ImgDeco v-else :img="item.src" :alt="item.title" :stripsPosition="reverse ? 'right': 'left'"/>
    </div>
    <div class="images-content-item_text">
      <h4>{{item.title}}</h4>
      <p>{{item.text}}</p>
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
        pagination: {
          el: '.swiper-pagination',
          
        },
        effect: 'fade',
        fadeEffect: {
          crossFade: true
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
 .images-content-item_img {
   width:640px;
   img {
     max-width: 100%;
   }
 }
 .images-content-item_text {
   width:400px;
   margin-left: 30px;
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
</style>