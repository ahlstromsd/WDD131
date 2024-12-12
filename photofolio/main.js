// Tab Navigation
const albumTab = document.getElementById('album-tab');
const shotTab = document.getElementById('shot-tab');
const albumSection = document.getElementById('album-section');
const shotSection = document.getElementById('shot-section');

albumTab.addEventListener('click', () => {
  // Show album section and hide shot section
  albumSection.style.display = 'block';
  shotSection.style.display = 'none';
  // Update active tab styles
  albumTab.classList.add('active');
  shotTab.classList.remove('active');
});

shotTab.addEventListener('click', () => {
  // Show shot section and hide album section
  shotSection.style.display = 'block';
  albumSection.style.display = 'none';
  // Update active tab styles
  shotTab.classList.add('active');
  albumTab.classList.remove('active');
});

import { photos } from './photos.mjs';

const photoGrid = document.getElementById('photo-grid');

// Populate the photo grid dynamically
photos.forEach(photo => {
  const img = document.createElement('img');
  img.src = `photos/${photo}.jpg`;
  img.alt = photo; // Use the photo name as the alt text
  img.classList.add('photo-thumbnail'); // Optional: Add a class for additional styling
  photoGrid.appendChild(img);
});
