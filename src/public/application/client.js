// const routeList = document.querySelector('.route-list');

// routeList.addEventListener('click', async (e) => {
//   if (e.target.tagName === 'BUTTON') {
//     const { id } = e.target.dataset;
//     // console.log(id);
//     const response = await fetch(`/addRoute/${id}`, { method: 'POST' });
//     const route = await response.json();
//     ymaps.ready(init(route));
//     console.log(route);
//   }
// });

const routeList = document.querySelector('.list-group');
// console.log(routeList);

routeList.addEventListener('click', async (e) => {
  console.log(e.target.tagName);
  if (e.target.tagName === 'H6') {
    const { id } = e.target.dataset;
    // console.log(id);
    const response = await fetch(`/addRoute/${id}`, { method: 'POST' });
    const route = await response.json();

    ymaps.ready(init(route));
    console.log(route);
  }
});
