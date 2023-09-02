const openAnnouncementBar = document.querySelector('.utility-bar');
const closeAnnouncementBar = document.querySelector('.close-announcement-modal-button');
const announcementModal = document.querySelector('.announcement-modal');
const announcementModalContent = document.querySelector('.announcement-modal--content');
const body = document.querySelector('.my-body');

openAnnouncementBar.addEventListener('click', () => {
    if (announcementModal.classList.contains('inactive')) {
        announcementModal.classList.remove('inactive');
        announcementModal.classList.add('active');
    }
    body.classList.add('disable-scroll')
})

closeAnnouncementBar.addEventListener('click', () => {
    if (announcementModal.classList.contains('active')) {
        announcementModal.classList.remove('active');
        announcementModal.classList.add('inactive');
    }
    body.classList.remove('disable-scroll')
})

document.addEventListener('click', (e) => {
    if (announcementModal.classList.contains('active') && !announcementModalContent.contains(e.target) && !openAnnouncementBar.contains(e.target)) {
        announcementModal.classList.remove('active');
        announcementModal.classList.add('inactive');
    }
})
