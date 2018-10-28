<template>
  <div class="infra" ref="infra">
    <div class="infra-back">
      <img src="./../assets/infra_back.jpg" alt="Инфраструктура"/>
    </div>
     <div class="infra-clouds infra_abs" >
         <img  class="infra-clouds1" src="./../assets/cloud1.png" alt="Инфраструктура"/>
         <img class="infra-clouds2" src="./../assets/cloud2.png" alt="Инфраструктура"/>
         <img class="infra-clouds3" src="./../assets/cloud1.png" alt="Инфраструктура"/>
     </div>
    <div class="infra-middle infra_abs"  >
      <div class="infra-middle_cont" ref="benefits" :style="benefitScroll">
        <div class="infra-benefit" v-if="infra" v-for="(item, i) in infra" 
         :key="i+'infra'">
         <h4>{{item.title}}</h4>
         <p>
           {{item.text}}
          </p>
        </div>
      </div>
     
    </div>
    <div class="infra-front infra_abs">
       <img src="./../assets/infra_front.png" alt="Инфраструктура"/>
    </div>
    <footer class="footer">
      <div class="footer_column phoenix">
        <div>
          <p>Разработано студией</p> 
          <p><a href="https://phoenix-cg.ru/">«Креативная группа «Феникс»</a></p>
        </div> 
          <div>
            <img src="./../assets/phoenix_logo.png" alt="Креативная группа Феникс" class="phoenix_logo">
          </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { getInfra } from '@/actions.js'
import { ObserverMix } from './mixins.js'
export default {
  mixins: [ObserverMix],
  data() {
    return {
      infra: null,
      scroll: 0,
      benefitsHeight: null
    }
  },
  mounted () {
   this.$el.addEventListener('wheel', this.animateImg)
   getInfra().then(res => {
     this.infra = res
   })
   this.benefitsHeight = this.$refs.benefits.scrollHeight
  },
  beforeDestroy() {
    this.$el.removeEventListener('wheel', this.animateImg)
  },
  computed: {
    benefitScroll() {
      if (this.scroll) {
        return {transform: 'translateY(-' + this.scroll + 'px)'}
      }
    }
  },
  methods: {
    animateImg () {
      let deltaY = event.deltaY
      let height = this.$refs.benefits.scrollHeight
      if (deltaY > 0 && this.scroll < height) {
        this.scroll = this.scroll + 10
      } else if (deltaY < 0) {
        this.scroll = 0
      } else {

      }
    }
  }
}
</script>

<style lang="scss">
.infra {
  position: relative;
}
.infra_abs {
  position: absolute;
  top:0;
  left:0;
  width:100%;
  bottom:0;
}
.infra-back {
  width:100%;
  & img {
    width:100%;
  }
}
.infra-front {
  width:100%;
  & img {
    width:100%;
  }
}
.infra-middle {
  position: absolute;
  left: 12%;
  top: 40%;
  width: 400px;
  height: 190px;
  overflow: hidden;
}
.infra-benefit {
  margin-bottom: 30px;
}
.infra-clouds1 {
   position: absolute;
   top:10%;
   right: 1%;
  
}
.infra-clouds2 {
   position: absolute;
   top:3%;
   right: 20%;
  
}
.infra-clouds3 {
   position: absolute;
   top:25%;
   right: 40%;
   

}
.in-view {
  .infra-clouds1 {
    animation: go 80s linear forwards;
    animation-delay: 0.5s;
  }
  .infra-clouds2 {
    animation: go 60s linear forwards;
    animation-delay: 0.5s;
  }
  .infra-clouds3 {
    animation: go 100s linear forwards;
    animation-delay: 0.5s;
  }
}
.infra-middle_cont {
  position: absolute;
  top:0;
  left: 0;
  width:100%;
  transition:transform 0.5s ease;
}
@keyframes go {
  to {
    transform: translateX(-500%);
  }
}
</style>
