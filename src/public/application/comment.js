const { commentForm } = document.forms;
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
