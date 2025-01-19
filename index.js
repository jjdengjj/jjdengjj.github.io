function invert(){
  // document.getElementById("profile").style.filter="invert(100%)";
  document.getElementById("teamlogo").style.filter="invert(100%)";
  document.getElementById("githublogo").style.filter="invert(100%)";
  document.getElementById("email").style.filter="invert(100%)";
  document.getElementById("characterzhong").style.filter="invert(100%)";
  document.getElementById("charactershe").style.filter="invert(100%)";
  };

  function noninvert(){
    // document.getElementById("profile").style.filter="invert(0%)";
    document.getElementById("teamlogo").style.filter="invert(0%)";
    document.getElementById("githublogo").style.filter="invert(0%)";
    document.getElementById("email").style.filter="invert(0%)";
    document.getElementById("characterzhong").style.filter="invert(0%)";
    document.getElementById("charactershe").style.filter="invert(0%)";
    };


let themeToggler = document.getElementById('theme-toggler');

themeToggler.onclick = () => {
  themeToggler.classList.toggle('fa-sun');
  themeToggler.classList.toggle('fa-moon');

  if (themeToggler.classList.contains('fa-sun')) {
    document.documentElement.classList.add('dark-mode');
    invert();
  } else {
    document.documentElement.classList.remove('dark-mode');
    noninvert();
  }
};

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  // dark mode
  document.getElementById('theme-toggler').click();
};
