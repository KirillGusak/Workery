const inputStart = document.getElementsByName('start')[0];
const inputEnd = document.getElementsByName('end')[0];
const inputCity = document.getElementsByName('city')[0];
// console.log(inputStart);
// console.log(inputEnd);

// inputStart.value = 'braa';
// inputEnd.value = 'braa';
// console.log(inputStart.value);

ymaps.ready(init);

function init() {
  let myPlacemark;
  const myMap = new ymaps.Map('map', {
    center: [55.753994, 37.622093],
    zoom: 9,
  }, {
    searchControlProvider: 'yandex#search',
  });

  // Слушаем клик на карте.
  myMap.events.add('click', (e) => {
    const coords = e.get('coords');

    // Если метка уже создана – просто передвигаем ее.
    if (myPlacemark) {
      myPlacemark.geometry.setCoordinates(coords);
    }
    // Если нет – создаем.
    else {
      myPlacemark = createPlacemark(coords);
      myMap.geoObjects.add(myPlacemark);
      // Слушаем событие окончания перетаскивания на метке.
      myPlacemark.events.add('dragend', () => {
        getAddress(myPlacemark.geometry.getCoordinates());
      });
    }
    getAddress(coords);
  });

  // Создание метки.
  function createPlacemark(coords) {
    return new ymaps.Placemark(coords, {
      iconCaption: 'поиск...',
    }, {
      preset: 'islands#violetDotIconWithCaption',
      draggable: true,
    });
  }

  // Определяем адрес по координатам (обратное геокодирование).
  function getAddress(coords) {
    myPlacemark.properties.set('iconCaption', 'поиск...');
    ymaps.geocode(coords).then((res) => {
      const firstGeoObject = res.geoObjects.get(0);
      const address = firstGeoObject.getAddressLine();

      myPlacemark.properties
        .set({
          // Формируем строку с данными об объекте.
          iconCaption: [
            // Название населенного пункта или вышестоящее административно-территориальное образование.
            firstGeoObject.getLocalities().length ? firstGeoObject.getLocalities() : firstGeoObject.getAdministrativeAreas(),
            // Получаем путь до топонима, если метод вернул null, запрашиваем наименование здания.
            firstGeoObject.getThoroughfare() || firstGeoObject.getPremise(),
          ].filter(Boolean).join(', '),
          // В качестве контента балуна задаем строку с адресом объекта.
          balloonContent: address,
        });
      // myInput.value = address;
      inputStart.value = address;

      multiRoute = new ymaps.multiRouter.MultiRoute({
        referencePoints: [
          address,
          pointB,
        ],
        params: {
          // Тип маршрутизации - пешеходная маршрутизация.
          routingMode: 'bicycle',
        },
      }, {
        // Автоматически устанавливать границы карты так, чтобы маршрут был виден целиком.
        boundsAutoApply: true,
      });
    });
  }
}
