let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('ri-x');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('ri-x');
    navbar.classList.remove('active');
}
