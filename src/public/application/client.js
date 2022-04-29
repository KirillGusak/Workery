const routeList = document.querySelector('.route-list');
const commentButton = document.querySelector('#commentButton');

routeList.addEventListener('click', async (e) => {
  if (e.target.tagName === 'BUTTON') {
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
