<template>
  <div class="menu" :class="{active: show}">
    <div class="menu_close" @click="close">
       <div class="close"></div>
    </div>
    <ul class="menu-list">
      <li class="active" ><span >О жилых башнях</span></li>
      <li><span>Квартиры</span></li>
      <li><span>Подъезды</span></li>
      <li><span>Паркинг</span></li>
      <li><span>Инфраструктура</span></li>
      <li><span>Контакты</span></li>
    </ul>
    <div class="menu_bot">
      <p>Отдел продаж</p>
      <a class="fs32" href="tel:+73433003146">+7 (343) 3003-146</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default () {
        return false
      }
    }
  },
  methods: {
    close() {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/vars.scss';
.menu {
  position: fixed;
  width: 420px;
  height: 100vh;
  color: #fff;
  background: $accent;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px 40px;
  transition: transform 1s ease;
  transform: translateX(-100%);
  &.active {
    transform: translateX(0);
  }
}
.menu_close {
  position: relative;
}
.menu-list {
  list-style: none;
  font-size: 14px;
  color: #fff;
}
.menu-list li {
  padding: 15px 0;
  cursor: pointer;
  & span {
    // background: red;
    transition: transform 0.5s ease;
    transform-origin: (0 0);
  }
  &:hover{
    span {
      display: block;
     transform: scale(1.5);
    }
  }
  &.active {
    color: $dark-grey;
    span {
     display: block;
     transform: scale(1.5);
    }
  }
}
.menu_bot {
  p {
    color: $dark-grey
  }
  a {
    color: #fff;
    text-decoration: none;
  }
}
</style>
