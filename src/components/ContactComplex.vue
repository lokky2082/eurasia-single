<template>
  <div class="contacts-complex">
    <h3>
      Местоположение <br>
      {{complex.title}}
    </h3>
    <div class="contacts-complex_address">
      <span>{{complex.address}}</span>
    </div>
    <div id="map-complex" class="complex-map"></div>
  </div>
</template>

<script>
export default {
  props:{
    complex: {
      type: Object
    }
  },
   mounted () {
    let coords = this.complex.coords
    ymaps.ready(function () {
    let map = new ymaps.Map('map-complex', {
            center: coords,
            zoom: 16,
            controls: ['zoomControl']
        }, {
            searchControlProvider: 'yandex#search'
        }),
        myPlacemark = new ymaps.Placemark(map.getCenter(), {
            hintContent: 'Собственный значок метки',
            balloonContent: 'Это красивая метка'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'map/complex.png',
            // Размеры метки.
            iconImageSize: [65, 74],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-32, -74]
        })
        map.geoObjects.add(myPlacemark)
    });
  }
  
}
</script>

<style lang="scss">
  .contacts-complex {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 40px;
    max-width: 500px;
    width: 100%;
  }
  .contacts-complex_address {
    margin-top: 20px;
    display: flex;
    align-items: center;
    &:before {
      content: '';
      width: 20px;
      height: 14px;
      background: url(../assets/point.svg)no-repeat;
      background-size: contain;
      margin-right: 20px;
    }
  }
  .complex-map {
    width:100%;
    height:300px;
    margin-top: 50px;
    padding: 0 20px;
  }
</style>
