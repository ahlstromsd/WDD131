import { photos } from './photos.mjs';

// Elements for tab functionality
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

// Handle tab switching
tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    const tab = button.getAttribute('data-tab');

    // Update active tab button
    tabButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    // Show corresponding tab content
    tabContents.forEach(content => {
      content.classList.remove('active');
      if (content.id === tab) {
        content.classList.add('active');
      }
    });
  });
});

// Photo album functionality
const photoGrid = document.getElementById('photo-grid');
const modal = document.getElementById('photo-modal');
const modalImg = document.getElementById('modal-img');
const closeModal = document.getElementById('close-modal');

// Populate the photo grid dynamically
photos.forEach(photo => {
  const img = document.createElement('img');
  img.src = photo;
  img.alt = 'Photo';
  img.classList.add('grid-photo');
  photoGrid.appendChild(img);

  // Add click event to open modal
  img.addEventListener('click', () => {
    modal.style.display = 'flex';
    modalImg.src = photo;
  });
});

// Close modal on clicking the close button
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Optional: Close modal on clicking outside the image
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
