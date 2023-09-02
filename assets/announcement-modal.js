const openAnnouncementBar = document.querySelector('.utility-bar');
const closeAnnouncementBar = document.querySelector('.close-announcement-modal-button');
const announcementModal = document.querySelector('.announcement-modal');

openAnnouncementBar.addEventListener('click', () => {
    if (announcementModal.classList.contains('inactive')) {
        announcementModal.classList.remove('inactive');
        announcementModal.classList.add('active');
    }
})

closeAnnouncementBar.addEventListener('click', () => {
    if (announcementModal.classList.contains('active')) {
        announcementModal.classList.remove('active');
        announcementModal.classList.add('inactive');
    }
})