<template>
  <section class="main full-screen" >
    <div class="main-left">
      <header class="main_header" @click="showMenu">
        <div class="humburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <a href="tel:+73433003146">+7 (343) 3003-146</a>
      </header>
      <div class="main_title">
         <span>ЕВР</span><span class="main_title_big">А</span><span>ЗИЯ</span>
      </div>
      <MainBenefits/>
      <div class="main-left_bot">
        <p>Срок сдачи: 2 квартал 2020 года</p>
        <h3>От <span class="accent-text-color">2 145 000</span> рублей</h3>
        <div class="main-left_arr">
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
        <p>Всё, что нужно для <span class="accent-text-color">счастливой</span> семейной жизни в мегаполисе</p>
      </div>
    </div>
  </section>
</template>

<script>
import MainBenefits from "@/components/MainBenefits.vue";
export default {
  components: {
     MainBenefits
  },
  methods: {
    showMenu() {
      console.log('test')
      this.$emit('show-menu')
    }
  }
}
</script>

<style lang="scss">
  .main  {
    display: flex;
    justify-content: space-between;
    & > * {
      height: 100%;
    }
  }
  .main_title {
    width:423px;
    height:205px;
    margin: 48px auto 26px auto;
    background: url(../assets/logo_bg.svg);
    background-size: contain;
  }
  .main-left {
    width: 35%;
    background: url(../assets/white_plaster.png);
  }
  .main-left_bot {
    position: relative;
  }
  .main-left_arr {
    position: relative;
    margin-top: 60px;
    height: 30px;
  }
  .main-left_bot {
    padding: 30px 40px;
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
      animation: showImg 4s ease 1.5s 1 forwards;
    }
  }
  .main_title {
    display: flex;
    color: #fff;
    font-weight: 700;
    align-items: center;
    justify-content: center;
    font-size: 45px;
    text-shadow: #DAB73C 0px 0px 10px, #DAB73C 0px 0px 20px, #DAB73C 0px 0px 30px, #DAB73C 0px 0px 40px,  2px 2px 2px rgba(28,110,164,0);
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
  @keyframes showImg {
    to {
      opacity: 1;
    }
  }
</style>
