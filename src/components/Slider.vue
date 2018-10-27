<template>
  <section class="slider">
    <div class="slider-back">
      <img src="../assets/slider-back.svg" alt="Башни Евразия"/>
    </div>
    <swiper :options="swiperOption" ref="mySwiper" @slideChange="showContent">
       <swiper-slide v-for="(slide, index) in list" :key="index">
         <div class="slider_content">
          <div class="slider_img">
             <ImgDeco :img="slide.src"/>
          </div>
           <div class="slider_text">
             <h4>{{slide.title}}</h4>
              <p>{{slide.text}}</p>
            </div>
         </div>
       </swiper-slide>
       <div class="nav-holder" slot="scrollbar">
         <div class="arrow-left"></div>
         <div class="nav-holder_number">
           {{active+1}}/{{list.length}}
         </div>
         <div class="arrow-right"></div>
       </div>
    </swiper>
  </section>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import ImgDeco from './ImgDeco.vue'
export default {
  props: {
    list: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOption: {
        navigation: {
          nextEl: '.arrow-right',
          prevEl: '.arrow-left'
        }
      },
      active: 0
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  components: {
    swiper,
    swiperSlide,
    ImgDeco
  },
  mounted () {
    console.log('this is current swiper instance object', this.swiper)
  },
  methods: {
    showContent () {
      this.active = this.swiper.activeIndex
      console.log('show')
    }
  }
}
</script>

<style lang="scss">
.slider {
  position: relative;
  width:100%;
}
.slider-back {
  position: absolute;
  top: -20%;
  display: flex;
  align-items: center;
  justify-content: center;
  width:100%;
  & img {
    width: 100%;
  }
}
.nav-holder {
  position: absolute;
  right:20px;
  top:30px;
  width: 150px;
}
.slider_img{
  padding: 50px 0;
  opacity: 0;
  transform: translateY(-100%);
  transition: all 1s ease;
  transition-delay: 0.3s;
}
.slider_text {
width:400px;
margin-left: 30px;
opacity: 0;
transition: all 1s ease;
transform: translateY(100%);
  transition-delay: 0.3s;
}
.slider_content {
   position: relative;
   display: flex;
   justify-content: space-between;
   align-items: center;
}
.nav-holder {
  display: flex;
  align-items: center;
}
.nav-holder_number {
  margin: 0 20px;
}
.swiper-slide-active {
  .slider_img {
    opacity: 1;
    transform: translateY(0);
  }
  .slider_text {
    opacity: 1;
    transform: translateY(0);
  }   
}

</style>
