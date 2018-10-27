<template>
  <div class="contacts-tabs">
    <h3 class="contacts-tabs_title">Отделы продаж</h3>
    <div class="contacts-tabs_butons">
      <div class="contacts-tab" v-for="(tab, i) in tabs" 
      :key="i + 'tab'" 
      :class="{active: i===active}"
      @click="changeTab(i)"
      >
        <h4>{{tab.title}}</h4>
      </div>
    </div>
    <ContactsTabContent v-for="(tab, i) in tabs" 
      :key="i + 'content'"
       v-if="i===active"
       :tab="tab"
       />
  </div>
</template>

<script>
import ContactsTabContent from "@/components/ContactsTabContent.vue";
export default {
  props: {
    tabs: {
      type: Array,
      default() {
        return []
      } 
    }
  },
  components: {
   ContactsTabContent
  },
  data () {
    return {
      active: 0
    }
  },
  methods: {
    changeTab(i) {
      this.active = i
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/vars.scss';
  .contacts-tabs_butons {
    display: flex;
  }
  .contacts-tab {
    margin-right: 30px;
    cursor: pointer;
    &:after {
      content: '';
      display: block;
      background: $accent;
      margin-top: -15px;
      width: 36px;
      height: 3px;
      transform: scaleX(0);
      transform-origin: 0 0 0 0;
      transition: transform 0.7s ease;
    }
    &:hover {
      color: $accent;
      &:after {
        transform: scaleX(1)
      }
    }
    &.active {
      color: $accent;
      &:after {
        transform: scaleX(1)
      }
    }
  }
  .contacts-tabs_title {
    margin: 30px 0;
  }
</style>
