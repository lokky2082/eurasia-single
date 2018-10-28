<template>
  <div class="contacts" v-if="contacts">
     <ContactTabs :tabs="contacts.officess"/>
     <ContactComplex :complex="contacts.complex"/>
  </div>
</template>

<script>
import { getContacts } from '@/actions.js'
import ContactTabs from "@/components/ContactTabs.vue"
import ContactComplex from "@/components/ContactComplex.vue";
export default {
  data () {
    return  {
      contacts: null
    }
  },
  components: {
    ContactTabs,
    ContactComplex
  },
  created () {
    getContacts().then(res => {
      console.log(res)
      this.contacts = res
    })
  }
}
</script>

<style lang="scss">
  .contacts {
    display: flex;
    padding-bottom: 50px;
  }
  @supports (display: grid) {
  .contacts {
    display: grid;
    grid-template-columns: 1.4fr 1fr;
    grid-gap: 150px;
    align-content: end;
   }
  }
</style>
