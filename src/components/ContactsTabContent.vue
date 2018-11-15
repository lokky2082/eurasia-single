<template>
  <div class="contacts-tabs_content">
      <div class="contacts-tabs_info">
        <p>
          <span class="grey-text-color">Адрес: </span>
          {{tab.adress}}
        </p>
        <p>
          <span class="grey-text-color">E-mail: </span>
          {{tab.mail}}
        </p>
        <p>
          <span class="grey-text-color">Телефоны/факсы: </span>
          {{tab.phones}}
        </p>
      </div>
      <div class="contacts-tabs_map" id="map">

      </div>
    </div>
</template>

<script>

export default {
  props: {
    tab: {
      type: Object
    }
  },
  data () {
    return {
      map:null
    }
  },
  mounted () {
    let coords = this.tab.coords
    ymaps.ready(function () {
    let map = new ymaps.Map('map', {
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
            iconImageHref: 'map/map.png',
            // Размеры метки.
            iconImageSize: [65, 65],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-32, -32]
        })
        map.geoObjects.add(myPlacemark)
    });
  }
}
</script>

<style lang="scss">
  .contacts-tabs_info {
    padding: 30px 0;
  }
  .contacts-tabs_map {
    width:100%;
    height: 300px;
    padding-right: 20px;
  }
</style>
