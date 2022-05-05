// const routeContainer = document.querySelector('.routeContainer');

// routeContainer.addEventListener('click', async (event) => {
//   // event.preventDefault();

//   if (event.target.name === 'submit_param') {
//     const article = event.target.closest('article');
//     const { id } = article.dataset;
//     console.log(id, 'wwww');
//     const response = await fetch(`/${id}/vote`, {
//       method: 'post',
//       headers: {
//         'Content-type': 'application/json',
//       },
//       body: JSON.stringify({ id }),
//     });

//     if (response.ok) {
//       const result = await response.json();

//       const points = article.querySelector('.votes');
//       const like = result.addedLike.votes;
//       points.innerText = `${like}`;

//       // event.target.style = "color: green";

//       event.target.classList.add('green');

//       // у article.querySelector('.points)
//       // points меняешь innerText
//       // addLike(result.submit_value.votes);
//     } else {
//       console.log('oooooooooopssssss');
//     }
//   }
// });

// const forLike = document.querySelector('.forLike');
// // console.log(forLike);

// forLike.addEventListener('click', async (event) => {
//   if (event.target.name === 'like') {
//     const { id } = event.target.dataset;
//     console.log(id, 'wwww');
//     const response = await fetch('/like', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ id }),
//     });

//     if (response.ok) {
//       const result = await response.json();
//       // console.log(result.addedLike.rating, 'rrrrr');
//       const likesCount = document.querySelector('.likesCount');
//       likesCount.innerText = `${result.addedLike.rating} likes`;
//       event.target.style = 'background-color: green';
//     }
//   }
// });

const likesCount = document.querySelectorAll('.likesCount');

father.addEventListener('click', async (event) => {
  // console.log(typeof likesCount, );
  if (event.target.name === 'like') {
    console.log(`${event.currentTarget}aaaaaaaaaaaaaaaa`);
    // console.log(event.target);
    const { id } = event.target.dataset;
    // console.log(id, 'wwww');
    const response = await fetch('/like', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    });
    if (response.ok) {
      const result = await response.json();
      for (let i = 0; i < likesCount.length; i++) {
        // console.log(result);
        // console.log(likesCount[i].dataset.id);
        // console.log(result.addedLike.id);
        // console.log(result.addedLike.rating, 'rrrrr');
        // console.log(likesCount[i]);
        if (likesCount[i].dataset.id === id) {
          likesCount[i].innerHTML = `
          <small class='opacity-50 text-nowrap'>${result.addedLike.rating}
                        likes</small>`;
          event.target.style = 'background-color: red; color: white';
        }
      }
    }
  }
});
