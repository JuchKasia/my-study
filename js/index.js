const nav = document.querySelector('.navbar');
console.log(nav);

document.addEventListener('DOMContentLoaded', function() {
    function addShadow () {
        if (window.scrollY >= 300) {
            nav.classList.add('shadow-bg');
        } else {
            nav.classList.remove('shadow-bg');
        }
    }
    window.addEventListener('scroll', addShadow);
})