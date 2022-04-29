/* eslint-disable camelcase */

// const commentButton = document.querySelector('#commentButton');
const routeList = document.querySelector('body');
const sortBtn = document.querySelector('.form-check');
const cards = document.querySelector('.cards');
const father = document.querySelector('.father');

// console.log(routeList);

routeList.addEventListener('click', async (e) => {
  console.log(e.target.tagName);
  if (e.target.tagName === 'H6') {
    const { id } = e.target.dataset;
    // console.log(id);
    const response = await fetch(`/addRoute/${id}`, { method: 'POST' });
    const route = await response.json();

    console.log(route.start, route.end);
    createMap(route.start, route.end);
  }
});

function addSort(arr) {
  let result = '';
  for (let i = 0; i < arr.length; i++) {
    result += (`<div class="cards">
    <div class="list-group-item list-group-item-action d-flex gap-3 py-3">
  
        <img name="like" id="like" src="/pictures/logo/like1btn.png" alt="like" width="32" height="32"
          class="rounded-circle flex-shrink-0">
  
        <div class="d-flex gap-2 w-100 justify-content-between">
          <div>
      <h6 class="mb-0" data-id="${arr[i].id}" style="cursor:pointer">${arr[i].title}</h6>
            <p class="mb-0 opacity-75">Start: ${arr[i].start}<span style="padding-left: 30px">Finish: ${arr[i].end}
              </span> </p>
            <p class="mb-0 opacity-75">${arr[i].description}</p>
             <p><a href="http://localhost:3000/addRoute/{{id}}">See more</a></p>
          </div>
          
          <small class="opacity-50 text-nowrap">${arr[i].rating} likes</small>
        </div>
      </div>
    </div>`);
  }
  return result;
}

sortBtn.addEventListener('click', async (e) => {
  e.preventDefault();
  const response = await fetch('/main', { method: 'POST' });
  console.log(response);
  const jsonresponse = await response.json();
  console.log(jsonresponse);
  cards.remove();
  father.innerHTML = addSort(jsonresponse.routes);
});
