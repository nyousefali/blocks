/*==================== SHOW MENU ====================*/
/*const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    // Validate that variables exist
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('active-menu-mobile');
            toggle.classList.toggle('active-bx');
        })
    }
}*/


//showMenu('bx','menu-mobile');

var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

var textWrapper = document.querySelector('.ml3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");


/*==================== ANIMATION TEXT HERO ====================*/ 

// Função genérica
function minhaFuncao() {
    var textWrapper = document.querySelector('.ml2');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({loop: true})
    .add({
        targets: '.ml2 .letter',
        scale: [4,1],
        opacity: [0,1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 950,
        delay: (el, i) => 70*i
    }).add({
        targets: '.ml2',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });
}

/*==================== GSAP ====================*/  

/*--=========== GSAP SCROLLTRIGGER ============- */
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {

    /*--=========== TIMELINE LOADING E HERO ============- */
    var tl1 = gsap.timeline();

    tl1
    .to('.screen-loading', {
        duration: 2,
        opacity: 0, 
        delay: 3,
        ease: "power4.out",
    })
    .from("header div", {
        duration: 2, 
        opacity: 0, 
        stagger:{each: 0.2},
        ease: "power4.out",
    }, '-=1.5')
    .from(".spline", {
        duration: 1, 
        opacity: 0,
        y: 200,
        ease: "power4.out",
    }, '-=0.2')
    .from(".hero div", {
        duration: 2,  
        opacity: 0, 
        y: 200,
        stagger:{each: 0.1},
        ease: "power4.out",
    }, '-=1.9')
    .from("#text-blocks span", {
        duration: 3,  
        opacity: 0, 
        x: -500,
        y: 50,
        stagger:{each: 0.2},
        ease: "power4.out",
    }, '-=1.9')
    .from("#text-unleash span", {
        duration: 1, 
        opacity: 0, 
        x: -50,
        stagger:{each: 0.1},
        ease: "power4.out",
    }, '-=1.9')



    /*--=========== ANIMATION TEXTS PRESENTATION ============- */
    gsap.from(".text-presentation-design",{
        x: 110,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger:{
            trigger: '.text-presentation-design',
            start: 'top 70%',
            end: 'bottom 30%',
            scrub: 3,
        }
    });

    

});

//ScrollTrigger.addEventListener("scrollStart", () => ScrollTrigger.refresh() );



    


