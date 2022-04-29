const { commentForm } = document.forms;
const commentContainer = document.querySelector('.commentContainer');
const toClear = document.querySelector('.toClear');

commentForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const inputedText = document.querySelector('[data-inputtype]');
  const route_id = inputedText.dataset.inputtype;
  console.log('eewerggg');
  const response = await fetch(`/route/${route_id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ body: inputedText.value, route_id }),
  });

  console.log(response, 'ddd');

  if (response.ok) {
    const data = await response.json();
    console.log(data, 'dadadada');

    commentContainer.innerHTML += createComment(data);
    toClear.value = '';
  }
});

function createComment(data) {
  return `<div class="list-group-item list-group-item-action d-flex gap-3 py-3">

  <img name="like" id="like" src="/pictures/logo/like1btn.png" alt="like" width="32" height="32"
    class="rounded-circle flex-shrink-0">
<p>${data.user_id}</p>
  <div class="d-flex gap-2 w-100 justify-content-between">
    <div>
      <p class="mb-0 opacity-75">${data.body}<span style="padding-left: 30px"> 
        </span> </p>

    </div>
    
  </div>
</div>`;
}
