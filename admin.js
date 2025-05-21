const sidebar = document.getElementById('sidebar');
const main = document.getElementById('main');
const hamburger = document.getElementById('hamburger');
const closeBtn = document.getElementById('closeBtn');

hamburger.addEventListener('click', () => {
    sidebar.classList.add('open');
    main.classList.add('shifted');
});

closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('open');
    main.classList.remove('shifted');
});