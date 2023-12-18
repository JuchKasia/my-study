document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('.navbar');
    const linkItems = document.querySelectorAll('.nav-link');
    const navList = document.querySelector('.navbar-collapse');


// u navigacji pojawia się tło, kiedy scroll większy niż 0px
// kiedy strona jedzie do góry, to nawigacja dzięki tłu nadal jest widoczna,
// a strona niby jedzie pod navigację

    function addShadow () {
        if (window.scrollY >= 300) {
            nav.classList.add('shadow-bg');
        } else {
            nav.classList.remove('shadow-bg');
        }
    }
    
    linkItems.forEach(item => item.addEventListener('click', () => {
        // usuwany class='show
        navList.classList.remove('show');
    }))
    
    window.addEventListener('scroll', addShadow);

// navigacja (mobile) się zamyka po kliknięciu na link lub poza mobille-nav
// 1. Kliknięcie linku -> nav się zamyka
// 2. Potrzebujemy wszystkie linki
// 3. jak to jest, że naav pojawia się i znika przy kliknięciu burger-icon&?
// w bootstrap tym steruje class="show", dodawana do navnar-collapse

// dla każdego elementu coś zrobimy. Po to jest forEach
// dla każdego naszego linku (napisaliśmy jako item) nadajemy event/ listener-a.
// i w momencie jak klikniemy na link chcemy, żeby wypełniła się function

    

})

