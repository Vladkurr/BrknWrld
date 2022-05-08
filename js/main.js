const burger = document.querySelector('.menu-burger'),
    nav = document.querySelector('.header-nav');



if (burger) {
    burger.addEventListener('click', function() {
        burger.classList.toggle("active");
        nav.classList.toggle('active')
    });

}