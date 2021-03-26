gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline();
/// HEADING 
tl.fromTo("#heading", 1, {
    opacity: 0,
    yPercent: 20,
    ease: "expo.out",

},
    {
        ease: "expo.out",
        opacity: 1,
        yPercent: 0,
    })

// MODEL
TweenLite.fromTo
    (
        "#img", 3,
        {

            height: '0px',
            ease: "expo.out",


        },
        {
            height: '557px',
            ease: "expo.out",
        }

    )
// second Page Animation 


TweenLite.fromTo(".webtab", 5, {
    scrollTrigger: {
        trigger: ".webtab",
        toggleActions: "restart none none none",

    },

    width: '0px',
    ease: "expo.out",


},

    {
        scrollTrigger: {
            trigger: ".webtab",
            toggleActions: "restart none none none",

        },
        width: '924px',
        ease: "expo.out",

    })








TweenLite.fromTo(".posttab", 5, {
    scrollTrigger: {
        trigger: ".posttab",
        toggleActions: "restart none none none",


    },

    width: '0px',

    ease: "expo.out",


},
    {
        scrollTrigger: {
            trigger: ".posttab",
            toggleActions: "restart none none none",

        },
        width: '924px',
        ease: "expo.out",


    });


const page3 = document.querySelector('#page3');
const nav3 = document.querySelector('.nav3 a');
const works = document.querySelector("#works3");
const instagramLink = document.querySelector("#instagramlink");
const linkedin = document.querySelector("#linkedin");

window.addEventListener("scroll", () => {

    console.log(pageYOffset, page3.offsetTop);
    if (pageYOffset > '1566') {

        page3.style.backgroundColor = "#101010";
        page3.style.color = "#fff"
        nav3.style.color = "#fff";
        works.style.color = "#fff";
        instagramLink.style.color = "#fff";
        linkedin.style.color = "#fff";
    }

    else {
        page3.style.backgroundColor = "#fff";
        page3.style.color = "#101010"
        nav3.style.color = "#101010";
        works.style.color = "#101010";
        instagramLink.style.color = "#101010";
        linkedin.style.color = "#101010";
    }

})
const arrowimg = document.querySelector("#arrowimg")
const overlay = document.querySelector(".overlay")
const overlay_anime = document.querySelector(".overlay_anime")
const page2 = document.querySelector("#page2")
const work = document.querySelector("#work")


// ARROW CLICK ANIMATION 
arrowimg.addEventListener('click', () => {
    overlay.style.bottom = "130%"
    setTimeout(() => {
        window.scroll(0, 800);
    }, 900);
});

// WORK CLICK ANIMATION 

work.addEventListener('click', () => {
    overlay.style.bottom = "130%"
    setTimeout(() => {
        window.scroll(0, 800);

    }, 900);

});






/// RESPONSIVE ANIMATION


function myFunction(x) {
    if (x.matches) { // If media query matches
     

        window.addEventListener("scroll", () => {

            console.log(pageYOffset, page3.offsetTop);
            if (pageYOffset > "1300") {
        
                page3.style.backgroundColor = "#101010";
                page3.style.color = "#fff"
                nav3.style.color = "#fff";
                works.style.color = "#fff";
                instagramLink.style.color = "#fff";
                linkedin.style.color = "#fff";
            }
        
            else {
                page3.style.backgroundColor = "#fff";
                page3.style.color = "#101010"
                nav3.style.color = "#101010";
                works.style.color = "#101010";
                instagramLink.style.color = "#101010";
                linkedin.style.color = "#101010";
            }
        
        })





















// ARROW CLICK ANIMATION 
arrowimg.addEventListener('click', () => {
    overlay.style.bottom = "100%"
    setTimeout(() => {
        window.scroll(0, 720);
    }, 900);
});

// WORK CLICK ANIMATION 

work.addEventListener('click', () => {
    overlay.style.bottom = "100%"
    setTimeout(() => {
        window.scroll(0, 720);

    }, 900);

});














        TweenLite.fromTo(".webtab", 5, {
            scrollTrigger: {
                trigger: ".webtab",
                toggleActions: "restart none none none",
        
            },
        
            width: '0px',
            ease: "expo.out",
        
        
        },
        
            {
                scrollTrigger: {
                    trigger: ".webtab",
                    toggleActions: "restart none none none",
        
                },
                width: '350px',
                ease: "expo.out",
        
            })
        
        




        TweenLite.fromTo(".posttab", 5, {
            scrollTrigger: {
                trigger: ".posttab",
                toggleActions: "restart none none none",
        
        
            },
        
            width: '0px',
        
            ease: "expo.out",
        
        
        },
            {
                scrollTrigger: {
                    trigger: ".posttab",
                    toggleActions: "restart none none none",
        
                },
                width: '350px',
                ease: "expo.out",
        
        
            });



     
    } else {
     
    }
  }
  
  var x = window.matchMedia("(max-width: 411px)")
  myFunction(x) // Call listener function at run time
  x.addEventListener(myFunction)