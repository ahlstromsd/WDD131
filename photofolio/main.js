import { photos } from './photos.mjs';

// Tabs functionality
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    const tab = button.getAttribute('data-tab');

    // Activate the selected tab button
    tabButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    // Show the corresponding content
    tabContents.forEach(content => {
      content.classList.remove('active');
      if (content.id === tab) {
        content.classList.add('active');
      }
    });
  });
});

// Photo Album functionality
const photoGrid = document.getElementById('photo-grid');
const modal = document.getElementById('photo-modal');
const modalImg = document.getElementById('modal-img');
const closeModal = document.getElementById('close-modal');

// Populate photo grid
photos.forEach(photo => {
  const img = document.createElement('img');
  img.src = photo;
  img.alt = 'Photo';
  photoGrid.appendChild(img);

  // Open modal on image click
  img.addEventListener('click', () => {
    modal.style.display = 'flex';
    modalImg.src = photo;
  });
});

// Close modal
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close modal on clicking outside the image
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
