// /* eslint-disable camelcase */

const container = document.querySelector('.greatContainer');
// console.log(container);

window.addEventListener('DOMContentLoaded', async () => {
  const { id } = container.dataset;
  // console.log(id);
  const response = await fetch(`/addRoute/${id}`, { method: 'POST' });
  const route = await response.json();
  // console.log(route.start, route.end);
  createMap(route.start, route.end);
});
