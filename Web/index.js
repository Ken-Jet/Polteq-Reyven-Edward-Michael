gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);
gsap.registerPlugin(Flip)

// Function
function goBiskref() {
    window.location.pathname = './Web/biskref.html'
}

function goPolteq (){
    window.location.href = 'https://www.polteq.ac.id/'
}

function goEbpc () {
    window.location.pathname ='./Web/ebpc.html'
}

function goTp () {
    window.location.pathname ='./Web/tp.html'
}

function goPolteqLoc () {
    window.location.href = 'https://maps.app.goo.gl/vkoQz7V5Ne7s6CF86'
}

if(!sessionStorage.getItem('anim1')){
    var tl1 =gsap.timeline({
        onComplete : () => {
            // gsap.set('.box-1', {
            //     position : 'sticky',
            //     top : 0,
            //     zIndex : 1000
            // })

            sessionStorage.setItem('anim1', 'true');
        }
    });

    document.querySelector('.bulat-1').addEventListener('mouseenter', () => {
        gsap.to('.bulat-1',{
            duration : 1,
            opacity : 1,
            ease : 'power4.out'
        })
    })

    document.querySelector('.bulat-1').addEventListener('mouseleave', () => {
        gsap.to('.bulat-1',{
            duration : 1,
            opacity : 0,
            ease : 'power4.out'
        })
    })

    tl1.from('.box-1',{
        duration : 1.25,
        y : -100,
        ease : 'expo.out'
    })

    .from('.box-2',{
        duration: 1,
        opacity : 0,
        y: 100,
        ease : 'power4.out'
    }, '-=1')

    .from('.box-3',{
        duration : 1,
        opacity : 0,
        ease : 'power4.out'
    },'-=0.75')

} else {
    // gsap.set('.box-1', {
    //             position : 'sticky',
    //             top : 0,
    //             zIndex : 1000
    // })

    document.querySelector('.bulat-1').addEventListener('mouseenter', () => {
        gsap.to('.bulat-1',{
            duration : 1,
            opacity : 1,
            ease : 'power4.out'
        })
    })

    document.querySelector('.bulat-1').addEventListener('mouseleave', () => {
        gsap.to('.bulat-1',{
            duration : 1,
            opacity : 0,
            ease : 'power4.out'
        })
    })
}

if(!sessionStorage.getItem('anim2')){
    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger : '.box-4',
        },
        onComplete : () => {
            sessionStorage.setItem('anim2', 'true');

            var box10 = document.querySelector('.box-6')
            var target1 = document.getElementById('target1')

            gsap.to('.box-6', {
                x: () => {

                    const boxRect = box10.getBoundingClientRect()
                    const targetRect = target1.getBoundingClientRect()

                    return (
                        (targetRect.left + targetRect.width / 2) -
                        (boxRect.left + boxRect.width / 2)
                    )

                },

                y: () => {

                    const boxRect = box10.getBoundingClientRect()
                    const targetRect = target1.getBoundingClientRect()

                    return (
                        (targetRect.top + targetRect.height / 2) -
                        (boxRect.top + boxRect.height / 2)
                    )

                },

                scrollTrigger : {
                    trigger : '#scrub1',
                    scrub : 0.5,
                    // markers : true,
                    end: '-50% center',
                    // start : '-120% bottom'
                }
            })
        }
    })

    tl2.from('.box-4',{
        duration : 1,
        opacity : 0,
        y : 200,
        ease : 'power4.out'
    })

    .from('.box-5', {
        duration : 1,
        x : -1000,
        ease : 'power4.out'
    },0.3)

    .from('.box-6', {
        duration : 1,
        x : 1000,
        ease : 'power4.out'
    },0.3)
} else {
    var box10 = document.querySelector('.box-6')
    var target1 = document.getElementById('target1')

    gsap.to('.box-6', {
        x: () => {

            const boxRect = box10.getBoundingClientRect()
            const targetRect = target1.getBoundingClientRect()

            return (
                (targetRect.left + targetRect.width / 2) -
                (boxRect.left + boxRect.width / 2)
            )

        },

        y: () => {

            const boxRect = box10.getBoundingClientRect()
            const targetRect = target1.getBoundingClientRect()

            return (
                (targetRect.top + targetRect.height / 2) -
                (boxRect.top + boxRect.height / 2)
            )

        },

        scrollTrigger : {
            trigger : '#scrub1',
            scrub : 0.5,
            // markers : true,
            end: '-50% center',
            // start : '-120% bottom'
        }
    })
}

if(!sessionStorage.getItem('anim3')){
    var tl3 = gsap.timeline({
        scrollTrigger : {
            trigger : '.teks-1',
            markers: false,
            start : '-200px bottom '
        },
        onComplete : () => {
            sessionStorage.setItem('anim3', 'true')
        }
    })

    tl3.from('.teks-1', {
        duration : 1,
        opacity : 0,
        y : 500,
        ease : 'power4.out'
    })

    .from('.box-7', {
        duration : 1,
        opacity : 0,
        y : 500,
        ease : 'back.out'
    }, 0.2)

    .from('.box-8', {
        duration : 1,
        opacity : 0,
        y : 500,
        ease : 'back.out'
    }, 0.4)

    .from('.box-9', {
        duration : 1,
        opacity : 0,
        y : 500,
        ease : 'back.out'
    }, 0.6)

    .from('.box-10', {
        duration : 1,
        opacity : 0,
        y : 500,
        ease : 'back.out'
    }, 0.8)

    function hoverBox (param1) {
        document.querySelector(param1).addEventListener('mouseover', () => {
            gsap.to(param1, {
                y : -40,
                duration : 0.5,
                ease : 'power2.out'
            })
        })
        document.querySelector(param1).addEventListener('mouseout', () => {
            gsap.to(param1, {
                y : 0,
                duration : 0.5
            })
        })
    }

    hoverBox('.box-7');
    hoverBox('.box-8');
    hoverBox('.box-9');
    hoverBox('.box-10');
} else {
    function hoverBox (param1) {
        document.querySelector(param1).addEventListener('mouseover', () => {
            gsap.to(param1, {
                y : -40,
                duration : 0.5,
                ease : 'power2.out'
            })
        })
        document.querySelector(param1).addEventListener('mouseout', () => {
            gsap.to(param1, {
                y : 0,
                duration : 0.5
            })
        })
    }

    hoverBox('.box-7');
    hoverBox('.box-8');
    hoverBox('.box-9');
    hoverBox('.box-10');
}

if(!sessionStorage.getItem('anim4')){
    var tl4 = gsap.timeline({
        scrollTrigger : {
            trigger : '.box-11'
        },
        onComplete : () => {
            sessionStorage.setItem('anim4' , 'true');
        }
    })

    tl4.from('.box-11', {
        opacity : 0,
        y : 200,
        duration : 1,
        ease : 'power4.out'
    })

    .from('.box-12',{
        opacity : 0,
        y : 300,
        duration : 1,
        ease : 'power1.out'
    }, 0.3)
}

const swiper1 = new Swiper ('.swiper1', {
    slidesPerView : 5,
    spaceBetween : 40,
    loop : true,
    allowTouchMove : false,
    autoplay : {
        delay : 0,
        disableOnInteraction : false
    },
    speed : 4000
});

if(!sessionStorage.getItem('anim5')){
    var tl6 = gsap.timeline({
        scrollTrigger : {
            trigger : '.box-13',
            markers : false,
            start : '-250px bottom'
        },
        onComplete : () => {
            sessionStorage.setItem('anim5', 'true');
        }
    })

    var split1 = SplitText.create('.kata-1', {type : 'words , chars'});

    tl6.from('.box-13', {
        width : 0,
        height : 0,
        duration : 1,
        ease : 'power4.out',
        y : 500,
        opacity : 0
    })

    .from (split1.chars, {
        duration : 0.75,
        opacity : 0,
        y : 200,
        ease : 'power3.out',
        stagger : 0.04
    }, 1)

    .from('.box-14', {
        duration : 0.75,
        opacity : 0,
        y : 200,
        ease : 'power3.out'
    }, '-=0.5')
}

//GSDevTools.create({animation : tl6});

//Ux animation

document.addEventListener('alpine:init', () => {
    Alpine.store('dropdown', {
        active: null
    })
})

function bar1 (id) {
    return {
        id,
        open : false ,
        tl : null,
        init () {
            this.$nextTick (() => {
                this.tl = gsap.timeline({paused : true})

                .to(this.$refs.bar1 ,{
                    height : 'auto',
                    duration : 0.25,
                    padding : '10px'
                })

                .fromTo(this.$refs.bar1.children, {
                    x : 300,
                    opacity : 0
                },{
                    x : 0,
                    duration : 0.5,
                    opacity : 1,
                    ease : 'power4.out',
                    stagger : 0.2,
                })
            })

            this.$watch(
                () => Alpine.store('dropdown').active,
                value => {
                    if (value !== this.id && this.open) {
                        this.forceClose()
                    }
                }
            )

            this.$watch('open' , value => {
                value ? this.tl.play() : this.tl.reverse()
            })
        },
        toggle () {
             const store = Alpine.store('dropdown')

            if (this.open) {
                this.close()
                store.active = null
            } else {
                this.open = true
                store.active = this.id
            }
        },
        close () {
            this.open = false
        },
        forceClose() {
            this.tl.pause(0)

            gsap.set(this.$refs.menu, {
                height: 0,
                padding: 0
            })

            gsap.set(this.$refs.menu.children, {
                opacity: 0,
                x: 300,
                scale: 0
            })

            this.open = false
        }
    }
}

if (!sessionStorage.getItem('anim7')){
    var tl7 = gsap.timeline({
        // paused : true ,
        scrollTrigger : {
            trigger : '#box-16',
            // markers : true,
            start : '50% bottom'
        },

        onComplete () {
            sessionStorage.setItem('anim7' , true)
        }
    })

    tl7.from('#box-15', {
        x : 1500,
        duration : 1,
        ease : 'power4.out'
    })

    .from('#teks-2', {
        opacity : 0,
        duration : 1
    }, 0.75)
}

const swiper2 = new Swiper ('#swiper-2', {
    direction : 'horizontal',
    effect: 'creative',

    creativeEffect: {
        prev: {
            translate: ['-100%', 0, 0],
            opacity: 0
        },

        next: {
            translate: ['100%', 0, 0],
            opacity: 0
        }
    },

    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },

    speed: 1000,
    loop: true
})

if(!sessionStorage.getItem('anim8')){
    gsap.from('#box-17', {
        opacity : 0,
        duration : 1 ,
        y : 200,
        ease : 'power4.out',
        scrollTrigger : {
            trigger : '#box-17', 
            // markers : true
        },
        onComplete () {
            sessionStorage.setItem('anim8', true)
        }
    })
}

if(!sessionStorage.getItem('anim9')) {
    var tl8 = gsap.timeline({
        scrollTrigger : {
            trigger : '#box-18',
            // markers : true
        },
        onComplete () {
            sessionStorage.setItem('anim9', true)
        }
    })

    tl8.from('#teks-3', {
        opacity : 0,
        y : 200,
        ease : 'power4.out',
        duration : 1
    })

    .from('#img-4', {
        opacity : 0,
        y : 300,
        duration : 1,
        ease : 'power4.out'
    },'-=0.75')

    .from('#img-3', {
        opacity : 0,
        duration : 1,
        y : -200,
        ease : 'power4.out'
    },'-=0.75')

    .add(() => {
        gsap.to('#img-3', {
            y: -30,
            duration: 1,
            yoyo: true,
            repeat: -1,
            ease: 'sine.inOut'
        });
    });
} else {
    gsap.to('#img-3', {
        y : -30,
        duration : 1,
        yoyo  : true,
        repeat : -1,
        ease : 'none'
    },'-=0.5')
}

if(!sessionStorage.getItem('anim10')){
    var tl9 = gsap.timeline({
        scrollTrigger : {
            trigger : '#box-20', 
            // markers : true
        },
        onComplete () {
            sessionStorage.setItem('anim10', true)
        }
    })

    tl9.from('#box-19',{
        opacity : 0,
        duration : 1,
        ease : 'power4.out',
        y : 200
    })

    .from('#box-all-1', {
        opacity : 0,
        duration : 0.75,
        y : 300,
        stagger : {
            ease : 'power4.out',
            each : 0.20,
            from : 'random'
        }
    },'-=0.75')
}