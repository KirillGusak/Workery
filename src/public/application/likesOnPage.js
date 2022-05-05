const infoAboutRoute = document.querySelector('.infoAboutRoute');
const likesCount = document.querySelectorAll('.likesCount');

infoAboutRoute.addEventListener('click', async (event) => {
  if (event.target.name === 'like') {
    const { id } = event.target.dataset;
    const response = await fetch('/likesOnPage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    });
    if (response.ok) {
      const result = await response.json();
      for (let i = 0; i < likesCount.length; i++) {
        // console.log(likesCount[i].dataset.id, 'ppppp');
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
