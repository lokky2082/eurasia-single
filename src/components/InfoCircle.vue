<template>
  <div class="info-circle">
    <svg viewBox="0 0 120 120" class="info-circle--img u-fit">
      <circle fill="none" stroke-width="5" stroke="#dfdcd5" cx="60" cy="60" r="45"></circle> 
      <circle fill="none" stroke-width="5"  cx="60" cy="60" r="45" ref="progress" class="info-circle--fill"></circle>
    </svg>
     <div class="info-circle--text __dark">
       <span>{{percent}}</span>%
    </div>
  </div>
</template>

<script>
export default {
  props: {
    percent: {
      type: Number
    }
  },
  mounted () {
    let c = Math.PI*(45*2)
    let pct = ((100 - this.percent) / 100)*c
    this.$refs.progress.setAttribute("stroke-dasharray", c)
    this.$refs.progress.setAttribute("stroke-dashoffset", pct)
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/vars.scss';
.info-circle {
  width:120px;
  height:120px;
  position:relative;
  left: 50%;
  transform: translateX(-50%);

}
.info-circle--img{
  transform: rotate(270deg);
}
.u-center {
  position:absolute;
  top:50%;
  left:50%;
  transform: translate(-50%, -50%);
}
.info-circle--text {
  position:absolute;
  top:50%;
  left:50%;
  transform: translate(-50%, -50%);
  & span {
    font-size: 32px;
  }
}
.info-circle--fill {
  stroke: $accent;
}

</style>
