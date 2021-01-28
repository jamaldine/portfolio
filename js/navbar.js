$(document).ready(function() {
    const navbarComponent = document.querySelector('.navbar-component');
    const nav = navbarComponent.querySelector('.nav');
    const navItem = nav.querySelectorAll('.nav-item');
    var classList;
    var active;
    navItem.forEach((item)=>{
        item.querySelector('.nav-link').addEventListener('click',displayContent);
        classList = item.querySelector('.nav-link').className.split(/\s+/);
        for (var i = 0; i < classList.length; i++) {
            if (classList[i] == 'active') {
                active=item.querySelector('.nav-link');
            }
        }
    });
});

function displayContent(){
    var navItem = document.querySelector('.navbar-component').querySelector('.nav').querySelectorAll('.nav-item');
    navItem.forEach((item)=>{
        item.querySelector('.nav-link ').classList.remove('active');
    })
    this.classList.add('active');
    changeContent(this);
}

function changeContent(navlink){
    if (navlink.classList.contains('home')) {
        $('#root').load('../common/home-section.html');
    }
    if (navlink.classList.contains('about'))  {
        $('#root').load('../common/about-section.html');
        setTimeout(function() {
            const medias = document.querySelector('.medias');
            medias.classList.add('d-none');
            medias.classList.remove('d-none');
            slickCarousel();
            control();
        } ,50);
    }
    if (navlink.classList.contains('work')) {
        $('#root').load('../common/work-section.html');
    }
    if (navlink.classList.contains('writing'))  {
        $('#root').load('../common/writing-section.html');
    }
    if (navlink.classList.contains('contact')) {
        $('#root').load('../common/contact-section.html');
    }
}

function slickCarousel(){
    $('.medias-content').slick({
        slidesToShow: 3,
        dots:true,
        centerMode: true,
    });
}

function control(){
    //change text of prev and next btn
    var prev = document.querySelector('.slick-prev');
    var next = document.querySelector('.slick-next');

    prev.textContent="";
    prev.innerHTML='<i class="fa fa-chevron-left"></i>';

    next.textContent="";
    next.innerHTML='<i class="fa fa-chevron-right"></i>';

}