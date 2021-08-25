const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const themeToggle = document.querySelector('#theme-switch-toggle');
const body = document.body;

if (localStorage.getItem('theme') === Theme.DARK) {
  body.classList.replace(Theme.LIGHT, Theme.DARK);
  themeToggle.setAttribute('checked', true);
}

const changeTheme = () => {
  if (localStorage.getItem('theme') === Theme.LIGHT || localStorage.getItem('theme') === null) {
    body.classList.replace(Theme.LIGHT, Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    body.classList.replace(Theme.DARK, Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
    themeToggle.setAttribute('checked', true);
  }
};

themeToggle.addEventListener('change', changeTheme);
