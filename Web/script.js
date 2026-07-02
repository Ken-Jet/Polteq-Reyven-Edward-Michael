// Gsap Plugin

gsap.registerPlugin(ScrollTrigger)

// Function

function goPolteq () {
    window.location.href = 'https://www.polteq.ac.id/';
}

function goGit () {
    window.location.href = 'https://github.com/Ken-Jet';
}

function goBiskref() {
    window.location.href = './Web/biskref.html'
}

function goEbpc () {
    window.location.href ='./Web/ebpc.html'
}

function goTp () {
    window.location.href ='./Web/tp.html'
}

function goPolteqLoc () {
    window.location.href = 'https://maps.app.goo.gl/vkoQz7V5Ne7s6CF86'
}

// function goEmail () {
//     window.location.href = 'mailto:a2441057@polteq.ac.id';
// }

// anim Function

// function Fade (timeline, tag, position, amount , opacity, ease, duration) {
//     timeline.from(tag,{
//         position : amount,
//         opacity : opacity,
//         ease : ease,
//         duration : duration
//     })
// }

var tl1 = gsap.timeline({
    onComplete : () => {
        document.body.style.overflowY = "scroll";
        gsap.set('#anim-1', {height : '500px'})
    }
})

tl1.to('#anim-1', {
    height : '500px',
    duration : 1,
    ease : 'power4.out',
},1)

tl1.to('#anim-2',{
    y : -100,
    duration : 1,
    ease : 'power4.out',
    scale : 0.75
},1)

tl1.delay(1)

var foot = gsap.timeline({
    scrollTrigger : {
        trigger :  '#footer',
        // markers : true,
        start : '-50% bottom',
        toggleActions : 'play none none reverse'
    }
})

foot.to('body', {
    backgroundColor : '#7697FF',
    duration : 1,
    ease : 'power3.out',
    scrub : true
})

var locate = gsap.timeline({
    scrollTrigger : {
        trigger : '#location',
        // markers : true,
        start : '0 bottom'
    }
})

locate.from('#location', {
    x : -200,
    duration : 1,
    opacity : 0,
    ease : 'power3.out'
})

locate.from('#polteq-location', {
    y : -100,
    opacity : 0,
    duration : 1,
    ease : 'power3.out'
},'-=0.5')

locate.from('#location-desc', {
    x : -100,
    opacity : 0,
    duration : 1,
    ease : 'power3.out'
},'-=0.25')

locate.to('#polteq-location', {
    y : -20,
    duration : 1,
    ease : 'none',
    repeat : -1,
    yoyo : true
},'-=1')

// Alpine
document.addEventListener('alpine:init', () => {
    Alpine.data('sideBar', () => ({
        open : false,

        init() {
            gsap.set('#anim-4', {
                autoAlpha : 0,
                zIndex : -10
            })

            gsap.set('#anim-5', {
                width : '0px',
                zIndex : -11
            })
            
            gsap.set('#set-1', {
                zIndex : -11
            })
            
        },

        openSide () {
            this.open = true 

            if(this.open == true){
                document.body.style.overflowY = 'hidden'

                let line = gsap.timeline();

                gsap.set('#anim-4',{zIndex : 10})
                gsap.set('#anim-5',{zIndex : 11})
                gsap.set('#set-1',{zIndex : 11})

                
                line.to('#anim-4', {
                    autoAlpha : 0.5,
                    duration : 0.25
                })

                line.to('#anim-5', {
                    width : '400px',
                    duration : 0.75,
                    ease : 'power3.out'
                }, '-=0.25')
                
            }
        },
        closeSide() {
            this.open = false

            if(this.open == false){

                gsap.set('#anim-4', {
                    autoAlpha : 0,
                    zIndex : -10,
                })

                gsap.set('#anim-5', {
                    width : '0px',
                    zIndex : -11,
                })
                gsap.set('#set-1', {
                    zIndex : -11,
                })

                document.body.style.overflowY = 'auto'

                this.$dispatch('default');
            }
        }
    }));

    Alpine.data('dropdown', () => ({
        open : false ,
        init () {
            gsap.set(this.$refs.drop, {height : '0px'})
        },
        checkDropdown () {

            this.open = !this.open

            if(this.open == true){
                gsap.to(this.$refs.drop, {height : '184px', duration : 0.75, ease : 'power4.out'})
            }else {
                 gsap.to(this.$refs.drop, {height : '0px', duration : 0.75, ease : 'power4.out'})
            }
        },

        setDefault () {
            this.open = false
            gsap.set(this.$refs.drop, {height : '0px'})
        }
    }))
});