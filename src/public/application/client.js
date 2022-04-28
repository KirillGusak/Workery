<<<<<<< HEAD
const routeList = document.querySelector('.route-list');

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
=======
1;
>>>>>>> 3eb691532d2f1028a61aab4103a35ee89d2cc76b
