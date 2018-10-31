<template>
  <div class="slider-cubes">
     <div class="slider-back">
      <img src="../assets/slider-back.svg" alt="Башни Евразия"/>
    </div>
    <div class="nav-holder">
         <div class="arrow-left" :class="{inactive: active===0}" @click="changeSlide('decrease')"></div>
         <div class="nav-holder_number">
           {{active + 1}}/{{list.length}}
         </div>
         <div class="arrow-right" :class="{inactive: active===list.length - 1}" @click="changeSlide('increase')"></div>
    </div>
    <div class="slider-cubes_content">
       <div class="slider-cubes_item" v-for="(slide, index) in list" 
       :key="index" 
       :ref="'slide'+ index" 
       :class="{
         active: active === index,
         increase: direction === 'increase',
         decrease: direction === 'decrease',
         prev: direction === 'increase' ? active === index + 1 : active === index - 1 
         }"
       >
         <div class="slider-cubes_item_img">
           <img :src="slide.src" :alt="slide.title"/>
         </div>
         <div class="slider-cubes_item_text">
            <h4>{{slide.title}}</h4>
            <p>{{slide.text}}</p>
            <div class="slider-cubes_btn-holder">
              <button class="button" @click="showmodal">
                <span>Отправить заявку</span>
              </button>
            </div>
            
         </div>
       </div>
    </div>
  </div>
</template>

<script>
import { transitionEndEventName } from './../utils.js'
export default {
   props: {
    list: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data() {
    return {
      active: 0,
      direction: 'increase'
    }
  },
  methods:  {
    changeSlide (val) {
      this.direction = val
      if (val === 'increase' && this.active < this.list.length - 1) {
        this.active = this.active + 1
      }
      if (val === 'decrease' && this.active > 0) {
        this.active = this.active - 1
      }
    },
    showmodal () {
      this.$emit('showmodal')
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/vars.scss';
.arrow-left {
 color: $accent;
 &.inactive {
   color: $dark-grey;
 }
}
.arrow-right {
  color: $accent;
  &.inactive {
   color: $dark-grey;
 }
}
.slider-cubes {
  position: relative;
  width:100%;
  margin-top: 50px;
}
.slider-cubes_content {
  width:100%;
  height:500px;
}
.slider-cubes_item {
  position: absolute;
  top: 0;
  left:0;
  width:100%;
  height:400px;
}
.slider-cubes_item_img {
  position: absolute;
  left: 0;
  top:0;
  opacity: 1;
  img {
     max-width: 600px;
  }
}
.slider-cubes_item_text {
   position: absolute;
   left: 45%;
   top:55%;
   width: 500px;
   background: #fff;
   padding: 30px;
   box-shadow: 0 0 5px 0px rgba(0, 0, 0, 0.2);
   
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
.slider-cubes_btn-holder {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
.active {
   z-index: 100;
  .slider-cubes_item_text {
    animation: gotofirst 2.3s 0.5s cubic-bezier(.33,.49,.3,1.08) forwards;
  }
  .slider-cubes_item_img {
    animation: gotofirst 1.7s cubic-bezier(.33,.49,.3,1.08) forwards;
  }
}
.increase {
  .slider-cubes_item_text {
    transform: translate(500%, 150%) rotate(-45deg);
  }
  .slider-cubes_item_img {
    transform: translate(500%, -150%) rotate(-45deg);
  }
}
.decrease {
  .slider-cubes_item_text {
    transform: translate(-500%, -150%) rotate(45deg);
  }
  .slider-cubes_item_img {
    transform: translate(-500%, 150%) rotate(45deg);
  }
}
.increase.prev {
   .slider-cubes_item_img {
     transform: translate(0, 0) rotate(0);
     opacity: 1;
     animation: prevtop 1.7s cubic-bezier(.11,.44,.22,.94) forwards;
   }
   .slider-cubes_item_text{
     transform: translate(0, 0) rotate(0);
     opacity: 1;
     animation: prevbot 1.7s cubic-bezier(.11,.44,.22,.94) forwards;
   }
}
.decrease.prev {
   .slider-cubes_item_img {
     transform: translate(0, 0) rotate(0);
     opacity: 1;
     animation: deprevtop 1.7s cubic-bezier(.11,.44,.22,.94) forwards;
   }
   .slider-cubes_item_text{
     transform: translate(0, 0) rotate(0);
     opacity: 1;
     animation: deprevbot 1.7s cubic-bezier(.11,.44,.22,.94) forwards;
   }
}
.nav-holder {
  position: absolute;
  right:20px;
  top:30px;
  width: 150px;
  z-index: 200;
}
.nav-holder {
  display: flex;
  align-items: center;
}
.nav-holder_number {
  margin: 0 20px;
}
@keyframes  gotofirst {
  to {
    transform: translate(0, 0) rotate(0);
    opacity: 1;
  }
}
@keyframes  prevtop {
  to {
    transform: translate(-100%, -100%) rotate(-45deg);
    opacity: 0;
  }
}
@keyframes  prevbot {
  to {
    transform: translate(-100%, 100%) rotate(45deg);
    opacity: 0;
  }
}
@keyframes  deprevtop {
  to {
    transform: translate(200%, -100%) rotate(45deg);
    opacity: 0;
  }
}
@keyframes  deprevbot {
  to {
    transform: translate(200%, 100%) rotate(-45deg);
    opacity: 0;
  }
}
</style>
