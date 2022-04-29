const commentButton = document.querySelector('#commentButton');
const routeList = document.querySelector('.list-group');

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

commentButton.addEventListener('submit', async (event) => {
  event.preventDefault();
});
