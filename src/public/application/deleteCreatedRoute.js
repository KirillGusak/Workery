const allRoutes = document.querySelector('.allRoutes');
const createdRoutelirofile = document.querySelector('.createdRoutelirofile');


allRoutes.addEventListener('click', async (event) => {
  // event.preventDefault();
  const { id } = event.target.dataset;
  const res = await fetch('/deleteRoute', {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id }),
  });
  // window.location = '/profile';

  if (res.status === 200) {
    document.querySelector(`.card-${id}`).remove();
  }
});
