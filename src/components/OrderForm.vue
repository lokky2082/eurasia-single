<template>
  <div class="order-form">
    <h4 class="center-text">Отправить заявку</h4>
    <p class="center-text mg-b-20">Для того, чтобы получить консультацию наших специалистов или забронировать квартиру, необходимо заполнить поля ниже</p>
    <form @submit.prevent="close">
    <div class="order-form_body">
      <div>
        <input name="name" class="input" placeholder="Имя и отчество" type="text"/>
        <input name="phone" class="input" placeholder="Телефон" type="text"/>
        <input name="mail" class="input" placeholder="E-mail" type="text"/>
        <p>Первоначальный взнос, руб.</p>
        <input name="pay" class="input" placeholder="Введите сумму" type="text"/>
      </div>
      <div>
        <p class="mg-b-20">Способы оплаты:</p>
        <label class="control control--checkbox">Собственные средства
          <input type="checkbox" value="Собственные средства" name="own"/>
          <div class="control__indicator"></div>
        </label>
         <label class="control control--checkbox">Материнский капитал
          <input type="checkbox" value="Материнский капитал" name="maternity"/>
          <div class="control__indicator"></div>
        </label>
        <label class="control control--checkbox">Ипотека
          <input type="checkbox" value="Ипотека" name="mortgagr"/>
          <div class="control__indicator"></div>
        </label>
         <label class="control control--checkbox">Государственный Жилищный Сертификат (ГЖС)
          <input type="checkbox" value="Государственный Жилищный Сертификат (ГЖС)" name="gos"/>
          <div class="control__indicator"></div>
        </label>
      </div>
    </div>
     <div class="form-button">
       <button class="button __invert"><span>Отправить</span></button>
     </div>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    close() {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss">
   .order-form {
     width: 600px;
   }
   .order-form_body {
     display: grid;
     grid-template-columns: 1fr 1fr;
     grid-gap: 50px;
   }
   .form-button {
     display: flex;
     justify-content: center;
     margin-top: 30px;
   }
</style>
