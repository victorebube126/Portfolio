window.addEventListener('load',()=>{
    const load = document.querySelector('.loader');

    load.classList.add('loader-hidden');

    load.addEventListener('transitionend', ()=>{
        document.body.removeChild('loader');
    })
})



// RESPONSIVE NAV
let menu = document.querySelector('#menu')
let navbar = document.querySelector('.navbar')

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active')
}





// 
let section = document.querySelectorAll('section');
let nav = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top <offset + height){
            nav.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            })
        }
    })


    // STICKY NAVBAR
    let header =document.querySelector('.header')

    header.classList.toggle('sticky', window.scrollY > 100);



    // 
    menu.classList.remove('bx-x');
    navbar.classList.remove('active')
}