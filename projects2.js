const modal = document.querySelector('.modal')
const modalImage = document.querySelector('.modalImage')
const thumbnails = document.querySelectorAll('.thumbnail');

thumbnails.forEach(thumbnail => {
	thumbnail.addEventListener('click', evt => {
  	modal.classList.remove('hidden');
    modalImage.setAttribute('src', evt.target.getAttribute('src'));
  })
});

modal.addEventListener('click', evt => {
	modal.classList.add('hidden');
});