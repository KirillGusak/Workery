/* eslint-disable camelcase */
const { commentForm } = document.forms;
// const commentButton = document.querySelector('#commentButton');
const routeList = document.querySelector('.list-group');
console.log(routeList);

console.log(routeList);

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

console.log(commentForm);

commentForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const inputedText = document.querySelector('[data-inputtype]');
  const route_id = inputedText.dataset.inputtype;

  console.log(inputedText);
  // это  будет рут айди
  // user id iz beka взять, отсюла не передавать

  const response = await fetch(`/route/${route_id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ body: inputedText.value, route_id }),
  });
});
