const themeSelector = document.querySelector('#theme-select');
const logo = document.querySelector('#byui-logo');

function changeTheme() {
    const selectedTheme = themeSelector.value;
    
    if (selectedTheme === 'dark') {
        document.body.classList.add('dark');
        logo.src = 'byui-logo-white.png';
    } else {
        document.body.classList.remove('dark');
        logo.src = 'byui-logo.png';
    }
}

themeSelector.addEventListener('change', changeTheme);