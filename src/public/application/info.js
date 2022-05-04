/* eslint-disable camelcase */

// const commentButton = document.querySelector('#commentButton');
const routeList = document.querySelector('body');
console.log(routeList);

routeList.addEventListener('click', async (e) => {
  if (e.target.tagName === 'H6') {
    const { id } = e.target.dataset;
    const response = await fetch(`/route/${id}`, { method: 'POST' });
    const route = await response.json();

    console.log(route.start, route.end);
    createMap(route.start, route.end);
  }
});
