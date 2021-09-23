const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const { LIGHT, DARK } = Theme;
document.body.classList.add(LIGHT);

const checkBox = document.querySelector('#theme-switch-toggle');
const bodyEl = document.querySelector('body');

checkBox.addEventListener('change', onChangeTheme);

export function onChangeTheme(ev) {
        
    if (checkBox.checked) {
        bodyEl.classList.replace(LIGHT, DARK);
        localStorage.setItem('theme', DARK);
    }
    else {
        bodyEl.classList.replace(DARK, LIGHT);
        localStorage.setItem('theme', LIGHT);
    }
    
}

const themeSave = localStorage.getItem('theme');

if (themeSave === DARK) {
    bodyEl.classList.replace(LIGHT, DARK);
    checkBox.checked = true;
} else {
    bodyEl.classList.replace(DARK, LIGHT);
    checkBox.checked = false;
}
