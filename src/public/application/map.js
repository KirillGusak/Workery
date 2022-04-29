// function init() {
//   // Задаём точки мультимаршрута.
//   const pointA = 'красная площадь';
//   const pointB = 'тверская 7';
//   /**
//        * Создаем мультимаршрут.
//        * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/multiRouter.MultiRoute.xml
//        */
//   const multiRoute = new ymaps.multiRouter.MultiRoute({
//     referencePoints: [
//       pointA,
//       pointB,
//     ],
//     params: {
//       // Тип маршрутизации - пешеходная маршрутизация.
//       routingMode: 'bycicle',
//     },
//   }, {
//     // Автоматически устанавливать границы карты так, чтобы маршрут был виден целиком.
//     boundsAutoApply: true,
//   });

//   // Создаем кнопку.
//   const changePointsButton = new ymaps.control.Button({
//     data: { content: 'Поменять местами точки А и В' },
//     options: { selectOnClick: true },
//   });

//   // Объявляем обработчики для кнопки.
//   changePointsButton.events.add('select', () => {
//     multiRoute.model.setReferencePoints([pointB, pointA]);
//   });

//   changePointsButton.events.add('deselect', () => {
//     multiRoute.model.setReferencePoints([pointA, pointB]);
//   });

//   // Создаем карту с добавленной на нее кнопкой.
//   const myMap = new ymaps.Map('map', {
//     center: [55.739625, 37.54120],
//     zoom: 12,
//     controls: [changePointsButton],
//   }, {
//     buttonMaxWidth: 300,
//   });

//   // Добавляем мультимаршрут на карту.
//   myMap.geoObjects.add(multiRoute);
// }

// ymaps.ready(init);

