const allRoutes = document.querySelector('.createdRoutelirofile');
const buttonToDelete = document.querySelector('.buttonToDelete');



allRoutess.addEventListener('click', async (event) => {
  event.preventDefault();
  const { id } = event.target.dataset;
  console.log(id, 'siiiiiiiii');
  const res = await fetch('/ deleteRoute', {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id }),
  });
});
