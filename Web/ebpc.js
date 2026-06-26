gsap.registerPlugin(SplitText)

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

if(!sessionStorage.getItem('ebpc1')){
    var tl1 = gsap.timeline({
        onComplete () {
            sessionStorage.setItem('ebpc1', true)
            document.querySelector('body').style.overflowY = 'scroll';
        }
    })

    // var text1 = SplitText.create('.teks-1', {type: 'lines, words'})

    tl1.from('.teks-1', {
        opacity : 0,
        y: -200,
        ease : 'power4.out',
        stagger: 0.3,
        duration : 0.75
    },0.25)

    tl1.from('.teks-2', {
        opacity : 0,
        y: 200,
        ease : 'power4.out',
        stagger: 0.3,
        duration : 0.75
    },0.25)

    .from('.highlight1', {
        scaleX : 0,
        transformOrigin : 'right left',
        duration : 1,
        ease : 'power4.out'
    }, 0.75)
    .from('.highlight2', {
        scaleX : 0,
        transformOrigin : 'left right',
        duration : 1,
        ease : 'power4.out'
    }, 0.75)
    .from('.img-1', {
        duration : 1,
        ease : 'power4.out',
        x : -200,
        y : -300,
        opacity : 0
    }, 0.5)
    .from('.img-2', {
        duration : 1,
        ease : 'power4.out',
        // x : -200,
        y : -300,
        opacity : 0
    }, 0.5)
    .from('.img-3', {
        duration : 1,
        ease : 'power4.out',
        // x : -200,
        y : -300,
        opacity : 0
    }, 0.5)
    .from('.img-4', {
        duration : 1,
        ease : 'power4.out',
        // x : -200,
        y : -300,
        opacity : 0
    }, 0.5)
    .from('.img-5', {
        duration : 1,
        ease : 'power4.out',
        x : 200,
        y : -300,
        opacity : 0
    }, 0.5)
    .from('.img-6', {
        duration : 0.75,
        y : 500,
    },0.5)
    .from('.img-7', {
        duration : 0.75,
        y : 500,
    },0.5)
    .from('.img-8', {
        duration : 0.75,
        y : 500,
    },0.5)
    .from('.img-9', {
        duration : 0.75,
        y : 500,
    },0.5)
} else {
    document.querySelector('body').style.overflowY = 'scroll';
}

if(!sessionStorage.getItem('ebpc2')){

    var tl2 = gsap.timeline({
        onComplete () {
            sessionStorage.setItem('ebpc2', true)
        },
        scrollTrigger : {
            trigger : '.box-2',
            // markers : true,
            start : '25% bottom'
        }
    })

    tl2.from('.teks-3', {
        duration : 1,
        opacity : 0,
        y : 300,
        ease : 'power4.out'
    })

    .from('.box-3' , {
        duration : 1,
        x : -800,
        ease : 'power4.out'
    }, 0.5)
    .from('.box-4' , {
        duration : 1,
        x : 800,
        ease : 'power4.out'
    }, 0.5)

}

if(!sessionStorage.getItem('ebpc3')) {

    var tl3 = gsap.timeline({
        onComplete () {
            gsap.set('.lottie1', {
                zIndex : -15
            })

            sessionStorage.setItem('ebpc3', true);

        },
        scrollTrigger : {
            trigger : '.box-5',
            markers : false,
            start : '25% bottom'
        }
    })

    tl3.from('.teks-4' ,{ 
        opacity : 0,
        duration : 1,
        y : 200,
        ease : 'power4.out'
    })

    .from('.lottie1', {
        opacity : 0,
        scale: 0,
        duration : 1,
        transformOrigin: 'bottom',
        ease : 'power4.out',
        y : 100
    })

    .to('.skill' ,{
        opacity : 1,
        duration : 0.5
    })

    .to('.skill-1', {
        top: '13%',
        left: '25%',
        duration : 1 ,
        ease : 'power4.out'
    }, 2)
    .to('.skill-2', {
        top: '3%',
        // left: '25%',
        duration : 1 ,
        ease : 'power4.out'
    }, 2)
    .to('.skill-3', {
        top: '13%',
        right: '25%',
        duration : 1 ,
        ease : 'power4.out'
    }, 2)
    .to('.skill-4', {
        top: '50%',
        right: '25%',
        duration : 1 ,
        ease : 'power4.out'
    }, 2)
    .to('.skill-5', {
        bottom: '13%',
        right: '35%',
        duration : 1 ,
        ease : 'power4.out'
    }, 2)
    .to('.skill-6', {
        bottom: '13%',
        left: '35%',
        duration : 1 ,
        ease : 'power4.out'
    }, 2)
    .to('.skill-7', {
        top: '50%',
        left: '25%',
        duration : 1 ,
        ease : 'power4.out'
    }, 2)

    document.querySelector('.skill-1').addEventListener('mouseenter', () => {
        gsap.to('.desc1', {
            duration : 1,
            opacity : 1,
            y : -75,
            ease : 'power4.out'
        })
    })
    document.querySelector('.skill-1').addEventListener('mouseout', () => {
        gsap.to('.desc1', {
            duration : 1,
            opacity : 0,
            y : 0,
            ease : 'power4.out'
        })
    })

    document.querySelector('.skill-2').addEventListener('mouseenter', () => {
        gsap.to('.desc2', {
            duration : 1,
            opacity : 1,
            y : -75,
            ease : 'power4.out'
        })
    })
    document.querySelector('.skill-2').addEventListener('mouseout', () => {
        gsap.to('.desc2', {
            duration : 1,
            opacity : 0,
            y : 0,
            ease : 'power4.out'
        })
    })

    document.querySelector('.skill-3').addEventListener('mouseenter', () => {
        gsap.to('.desc3', {
            duration : 1,
            opacity : 1,
            y : -75,
            ease : 'power4.out'
        })
    })
    document.querySelector('.skill-3').addEventListener('mouseout', () => {
        gsap.to('.desc3', {
            duration : 1,
            opacity : 0,
            y : 0,
            ease : 'power4.out'
        })
    })

    document.querySelector('.skill-4').addEventListener('mouseenter', () => {
        gsap.to('.desc4', {
            duration : 1,
            opacity : 1,
            y : -75,
            ease : 'power4.out'
        })
    })
    document.querySelector('.skill-4').addEventListener('mouseout', () => {
        gsap.to('.desc4', {
            duration : 1,
            opacity : 0,
            y : 0,
            ease : 'power4.out'
        })
    })

    document.querySelector('.skill-5').addEventListener('mouseenter', () => {
        gsap.to('.desc5', {
            duration : 1,
            opacity : 1,
            y : -75,
            ease : 'power4.out'
        })
    })
    document.querySelector('.skill-5').addEventListener('mouseout', () => {
        gsap.to('.desc5', {
            duration : 1,
            opacity : 0,
            y : 0,
            ease : 'power4.out'
        })
    })

    document.querySelector('.skill-6').addEventListener('mouseenter', () => {
        gsap.to('.desc6', {
            duration : 1,
            opacity : 1,
            y : -75,
            ease : 'power4.out'
        })
    })
    document.querySelector('.skill-6').addEventListener('mouseout', () => {
        gsap.to('.desc6', {
            duration : 1,
            opacity : 0,
            y : 0,
            ease : 'power4.out'
        })
    })
7
    document.querySelector('.skill-7').addEventListener('mouseenter', () => {
        gsap.to('.desc7', {
            duration : 1,
            opacity : 1,
            y : -75,
            ease : 'power4.out'
        })
    })
    document.querySelector('.skill-7').addEventListener('mouseout', () => {
        gsap.to('.desc7', {
            duration : 1,
            opacity : 0,
            y : 0,
            ease : 'power4.out'
        })
    })

} else {

    gsap.set('.lottie1', {
                zIndex : -15
    })

    gsap.set('.skill-1', {
        top: '13%',
        left: '25%',
        opacity : 1
    })
    gsap.set('.skill-2', {
        top: '3%',
        // left: '25%',
        opacity : 1
    })
    gsap.set('.skill-3', {
        top: '13%',
        right: '25%',
        opacity : 1
    })
    gsap.set('.skill-4', {
        top: '50%',
        right: '25%',
        opacity : 1
    })
    gsap.set('.skill-5', {
        bottom: '13%',
        right: '35%',
        opacity : 1
    })
    gsap.set('.skill-6', {
        bottom: '13%',
        left: '35%',
        opacity : 1
    })
    gsap.set('.skill-7', {
        top: '50%',
        left: '25%',
        opacity : 1
    })

    document.querySelector('.skill-1').addEventListener('mouseenter', () => {
        gsap.to('.desc1', {
            duration : 1,
            opacity : 1,
            y : -75,
            ease : 'power4.out'
        })
    })
    document.querySelector('.skill-1').addEventListener('mouseout', () => {
        gsap.to('.desc1', {
            duration : 1,
            opacity : 0,
            y : 0,
            ease : 'power4.out'
        })
    })

    document.querySelector('.skill-2').addEventListener('mouseenter', () => {
        gsap.to('.desc2', {
            duration : 1,
            opacity : 1,
            y : -75,
            ease : 'power4.out'
        })
    })
    document.querySelector('.skill-2').addEventListener('mouseout', () => {
        gsap.to('.desc2', {
            duration : 1,
            opacity : 0,
            y : 0,
            ease : 'power4.out'
        })
    })

    document.querySelector('.skill-3').addEventListener('mouseenter', () => {
        gsap.to('.desc3', {
            duration : 1,
            opacity : 1,
            y : -75,
            ease : 'power4.out'
        })
    })
    document.querySelector('.skill-3').addEventListener('mouseout', () => {
        gsap.to('.desc3', {
            duration : 1,
            opacity : 0,
            y : 0,
            ease : 'power4.out'
        })
    })

    document.querySelector('.skill-4').addEventListener('mouseenter', () => {
        gsap.to('.desc4', {
            duration : 1,
            opacity : 1,
            y : -75,
            ease : 'power4.out'
        })
    })
    document.querySelector('.skill-4').addEventListener('mouseout', () => {
        gsap.to('.desc4', {
            duration : 1,
            opacity : 0,
            y : 0,
            ease : 'power4.out'
        })
    })

    document.querySelector('.skill-5').addEventListener('mouseenter', () => {
        gsap.to('.desc5', {
            duration : 1,
            opacity : 1,
            y : -75,
            ease : 'power4.out'
        })
    })
    document.querySelector('.skill-5').addEventListener('mouseout', () => {
        gsap.to('.desc5', {
            duration : 1,
            opacity : 0,
            y : 0,
            ease : 'power4.out'
        })
    })

    document.querySelector('.skill-6').addEventListener('mouseenter', () => {
        gsap.to('.desc6', {
            duration : 1,
            opacity : 1,
            y : -75,
            ease : 'power4.out'
        })
    })
    document.querySelector('.skill-6').addEventListener('mouseout', () => {
        gsap.to('.desc6', {
            duration : 1,
            opacity : 0,
            y : 0,
            ease : 'power4.out'
        })
    })
7
    document.querySelector('.skill-7').addEventListener('mouseenter', () => {
        gsap.to('.desc7', {
            duration : 1,
            opacity : 1,
            y : -75,
            ease : 'power4.out'
        })
    })
    document.querySelector('.skill-7').addEventListener('mouseout', () => {
        gsap.to('.desc7', {
            duration : 1,
            opacity : 0,
            y : 0,
            ease : 'power4.out'
        })
    })
}

if(!sessionStorage.getItem('ebpc4')){
    var tl4 = gsap.timeline({
        scrollTrigger : {
            trigger : '.box-6',
            markers : false,
            start : '15% bottom'
        },
        onComplete () {
            sessionStorage.setItem('ebpc4', true)
        }
    })
    
    tl4.from('.teks-5', {
        opacity : 0,
        duration : 1,
        y : 200,
        ease : 'power4.out'
    })

    .from('.konten', {
        y : 700,
        duration : 1,
        ease : 'power4.out',
        stagger : {
            amount : 0.1,
            from : 'edges',
            each : 0.1
        }
    })

}

//Alpine
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

if(!sessionStorage.getItem('ebpc5')){
    var tl5 = gsap.timeline({
    onComplete () {
        sessionStorage.setItem('ebpc5', true)
    },
    scrollTrigger : {
        trigger : '.box-7',
        // markers : true,
        start : '20% bottom'
    }
    })

    tl5.from('.teks-6', {
        opacity : 0,
        duration : 0.5,
        y : 200 , 
        ease : 'power4,out'
    })

    .from('.swiper1',{
        opacity : 0,
        duration : 1,
        y : 300,
        ease : 'power4.out'
    })

    .from('.img-10', {
        opacity : 0,
        y : -200,
        x : -200,
        duration : 1,
        ease : 'power4.out'
    }, 1)

    .from('.img-11', {
        opacity : 0,
        y : -200,
        x : 200,
        duration : 1,
        ease : 'power4.out'
    }, 1)

    .from('.img-12', {
        opacity : 0,
        y : 200,
        x : -200,
        duration : 1,
        ease : 'power4.out'
    }, 1)

    .from('.img-13', {
        opacity : 0,
        y : 200,
        x : 200,
        duration : 1,
        ease : 'power4.out'
    }, 1)
}

// Swiper

const Iisma = new Swiper('.swiper1', {
    direction : 'horizontal',
    loop : true,
    effect : 'creative',
    creativeEffect : {
        next : {
            opacity : 0,
            translate : [1500, 0, 0]
        },
        prev : {
            opacity : 0,
            translate : [-1500, 0, 0]
        }
    },
    speed : 1000,
    autoplay : {
        delay : 10000
    }
})

Iisma.on('slideChangeTransitionStart', (swiper) => {
    let Id = swiper.realIndex;
    let slide = document.querySelectorAll(`.swiper-slide[data-swiper-slide-index="${Id}"]`);

    slide.forEach(slide => {
        let swiptime = gsap.timeline({
            delay : 1.5
        })

        gsap.set(slide.querySelector('video'), {
            opacity : 0,
            x : -200
        })

        gsap.set(slide.querySelector('.swip-head'), {
            opacity : 0,
            x : 200
        })

        gsap.set(slide.querySelector('.swip-content'), {
            opacity : 0,
            x : 200
        })

        swiptime.to(slide.querySelector('video'), {
            opacity  : 1,
            duration : 1,
            x : 0,
            ease : 'power4.out'
        })

        swiptime.to(slide.querySelector('.swip-head'), {
            opacity  : 1,
            duration : 1,
            x : 0,
            ease : 'power4.out'
        }, 1.25)

        swiptime.to(slide.querySelector('.swip-content'), {
            opacity  : 1,
            duration : 1,
            x : 0,
            ease : 'power4.out'
        }, 1.5)
    })
    
})

if(!sessionStorage.getItem('ebpc6')){
    var tl6 = gsap.timeline({
        onComplete () {sessionStorage.setItem('ebpc6', true)},
        scrollTrigger : {
            trigger : '.box-8',
            // markers : true,
            start : '20% bottom'
        }
    })

    tl6.from('.teks-7', {
        opacity : 0,
        duration : 1,
        ease : 'power4.out',
        y : 200
    })
    .from('.box-9', {
        opacity : 0,
        duration : 1,
        ease : 'power4.out',
        y : 200
    },'=-0.5')
    .from('.box-10', {
        opacity : 0,
        duration : 1,
        ease : 'power4.out',
        y : 200
    },'=-0.75')
}

// Alpine
document.addEventListener('alpine:init', () => {

    // Parent Dropdown

    Alpine.data('mode', () => ({
        mode : null
    }))

    // Child Dropdown

    Alpine.data('dropdown', (nameMode) => ({
        status : false,
        name : nameMode,

        init () {
            gsap.set(this.$refs.menu, {
                autoAlpha : 0
            })

            this.$watch('mode', (value) => {
                if(value == this.name){
                    gsap.to(this.$refs.menu, {
                        duration : 0.5,
                        autoAlpha : 1,
                        overwrite : true
                    })
                } else {
                    gsap.to(this.$refs.menu, {
                        duration : 0.5,
                        autoAlpha : 0,
                        overwrite : true
                    })
                }
            })
        },

        openToogle () {
            this.mode = this.name
        },

        closeToogle () {
            this.mode = null
        }
    }))
})