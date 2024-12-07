let themeToggler = document.getElementById('theme-toggler');

themeToggler.onclick = () => {
  themeToggler.classList.toggle('fa-sun');
  themeToggler.classList.toggle('fa-moon');

  if (themeToggler.classList.contains('fa-sun')) {
    document.documentElement.classList.add('dark-mode');
  } else {
    document.documentElement.classList.remove('dark-mode');
  }
};
