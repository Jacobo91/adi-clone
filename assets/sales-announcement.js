const salesAnnouncement = document.querySelector('.sales-announcement');
const closeButton = document.querySelector('.sales-announcement__button');

closeButton.addEventListener('click', () => {
    salesAnnouncement.classList.add('closed')
})