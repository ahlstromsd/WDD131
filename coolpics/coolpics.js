// Toggle Menu visibility on small screens
const menuButton = document.getElementById('menuButton');

function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('hide');
}

menuButton.addEventListener('click', toggleMenu);

// Handle window resize to ensure menu visibility consistency
function handleResize() {
    const menu = document.querySelector('.menu');
    if (window.innerWidth > 1000) {
        menu.classList.remove('hide');
    } else {
        menu.classList.add('hide');
    }
}

handleResize();
window.addEventListener('resize', handleResize);

// Image Viewer Modal
function viewerTemplate(pic, alt) {
    return `
        <div class="viewer">
            <button class="close-viewer">X</button>
            <img src="${pic}" alt="${alt}">
        </div>`;
}

function closeViewer() {
    const viewer = document.querySelector('.viewer');
    if (viewer) {
        viewer.remove();
    }
}

function viewHandler(event) {
    const clickedImg = event.target;

    if (clickedImg.tagName.toLowerCase() === 'img') {
        const imgSrc = clickedImg.src.split('-')[0];
        const fullImgSrc = `${imgSrc}-full.jpeg`;

        const viewerHTML = viewerTemplate(fullImgSrc, clickedImg.alt);
        document.body.insertAdjacentHTML('afterbegin', viewerHTML);

        const closeButton = document.querySelector('.close-viewer');
        closeButton.addEventListener('click', closeViewer);
    }
}

// Add event listener to the gallery
const gallery = document.querySelector('.gallery');
gallery.addEventListener('click', viewHandler);