<template>
  <div class="triple-slider">

    <div class="triple-slider_container" ref="container" :class="direction">
      <div class="triple-slider_item prev extra" >
       <img :src="list[list.length - 1]" alt="Жилые башни Евразия" />
      </div>
      <div class="triple-slider_item" 
      v-for="(item, i) in list" 
      :key="i+'foto'"
      :class="{
          prev: i < active,
          next: i > active,
          active: i === active
        }"
       >
        <div class="triple-slider_deco"></div>
        <img 
        :src="item" 
        alt="Жилые башни Евразия" 
        />
      </div>
      <div class="triple-slider_item next extra">
       <img :src="list[0]" alt="Жилые башни Евразия" />
      </div>
    </div>
    <div class="triple-slider_nav-conteiner">
    <div class="triple-slider_nav-holder">
         <div class="arrow-left" :class="{inactive: active===0}" @click="changeSlide('decrease')"></div>
         <div class="nav-holder_number">
           {{active + 1}}/{{list.length}}
         </div>
         <div class="arrow-right" :class="{inactive: active===list.length - 1}" @click="changeSlide('increase')"></div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array
    }
  },
  data() {
    return {
      active: 1,
      direction: ''
    }
  },
  computed: {
    prevIndex () {
      return this.active - 1
    },
    nextIndex () {
      return this.active + 1
    }
  },
  mounted () {
   let container = this.$refs.container
   let items = container.querySelectorAll('.triple-slider_item')
   container.insertBefore(items[items.length - 1], container.firstChild)
   container.appendChild(items[0])
  },
  methods: {
    changeSlide (val) {
      this.direction = val
      if (val === 'increase' && this.active < this.list.length - 1) {
        this.active = this.active + 1
      }
      if (val === 'decrease' && this.active > 0) {
        this.active = this.active - 1
      }
    },
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/vars.scss';
 .triple-slider {
   position: relative;
   width: 100%;
   overflow: hidden;
   height:60vh;
   display: flex;
   //background: $blue;
   background: $dark-grey;
   box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.3);
   .arrow-left {
     color: #fff;
   }
   .arrow-right {
     color: #fff;
   }
   .nav-holder_number {
     color: #fff;
   }
 }
 @media (orientation: portrait) {
  .triple-slider {
    height: 16vh;
  }
}
 .triple-slider_container {
   position: relative;
   width:100%;
 }

 .triple-slider_item {
   position: absolute;
   height: 100%;
   opacity: 1;
   top: 50%;
   left: 50%;
   transition: all 1.7s ease;
   transform: translate(-50%, -50%);
   overflow: hidden;
   width:60%;
   //box-shadow: 0px 0px 10px 0px $accent;
   &:after {
     content: '';
     opacity:0;
      width:100%;
       position: absolute;
       top:0;
       left: 0;
       bottom:0;
       transition: all 2s ease;
  }
   img {
     width: 100%;
     transition: transform 4s ease;
     transition-delay: 1.6s;
     transform: scale(1.2);
     object-fit: contain;
   }
   &.prev {
     transform: translate(-111%, -50%);
     opacity: 1;
     z-index: 3;
     &:after {
       background: rgb(0, 0, 0);
       //mix-blend-mode: multiply;
       opacity: 0.85;
     }
   }
   &.next {
     transform: translate(30%, -50%);
      &:after {
        background: rgb(0, 0, 0);
       //mix-blend-mode: multiply;
       opacity: 0.85;
     }
   }
   &.nextf {
     opacity: 1;
     z-index: 10;
    } 
  &.nexts {
     opacity: 1;
     &:after {
       background: $accent;
       mix-blend-mode: multiply;
       opacity: 1;
     }
    }
  &.extra {
    z-index: 1;
  }
   &.active {
     top: 50%;
     left: 50%;
     transform: translate(-50%, -50%) scale(1);
     opacity: 1;
     z-index: 10;
     & img {
       transform: scale(1);
     }
     .triple-slider_deco {
       &:after {
          transform: scaleY(1);
        }
        &:before {
          transform: scaleY(1);
        }
     }
   }
 }

.triple-slider_nav-holder {
  display: flex;
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
   z-index: 20;
}
.triple-slider_deco {
  position: absolute;
  top:0;
   bottom: 0;
    left: 0;
    right: 0;
  &:after {
    content: '';
    width: 6px;
    background: $accent;
    position: absolute;
    top: 0;
    bottom: 0;
    right: -2px;
    z-index: 10;
    transform-origin: top;
    transform: scaleY(0);
    transition: transform 1.5s ease;
    transition-delay: 1s;
  }
  &:before {
    content: '';
    width: 6px;
    background: $accent;
    position: absolute;
    top: 0;
    bottom: 0;
    left: -2px;
    z-index: 10;
    transform-origin: bottom;
    transform: scaleY(0);
    transition: transform 1.5s ease;
    transition-delay: 1s;
  }
}

@keyframes slideActiveDecrease {
  to {
     transform: translate(50%, 0);
  }
}
@keyframes slideActiveIncrease {
  to {
     transform: translate(-50%, -50%);
  }
}

</style>
