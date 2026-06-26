gsap.registerPlugin(SplitText) ;
gsap.registerPlugin(ScrollTrigger)

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

// lottie

const lottie1 = lottie.loadAnimation({
    container : document.getElementById('lottie1'),
    renderer : 'svg',
    loop : true,
    autoplay : true,
    path : './JSON/Tp-1.json'
})

const lottie2 = lottie.loadAnimation({
    container : document.getElementById('lottie2'),
    renderer : 'svg',
    loop : false,
    autoplay : false,
    path : './JSON/tp-2.json'
})

const lottie3 = lottie.loadAnimation({
    container : document.getElementById('lottie3'),
    renderer : 'svg',
    loop : true,
    autoplay : true,
    path : './JSON/tp-3.json'
})
const lottie4 = lottie.loadAnimation({
    container : document.getElementById('lottie4'),
    renderer : 'svg',
    loop : true,
    autoplay : true,
    path : './JSON/tp-4.json'
})

// Gsap

const Fade = {
    opacity : 0,
    duration : 1,
    ease : 'power4.out',
}

const Scale = {
    duration : 1,
    scale : 0,
    ease : 'expo.out'
}

function Sesi (nama) {
    sessionStorage.setItem(nama, true);
}

if(!sessionStorage.getItem('tp1')){
    var teks1 = SplitText.create('.head-1', { type : 'chars'})

    var tl1 = gsap.timeline({
        onComplete () {
        sessionStorage.setItem('tp1',true) 
        }
    })

    tl1.from(teks1.chars, {
        x : 300,
        duration : 1,
        stagger : 0.07,
        ease : 'power4.out',
        opacity : 0
    })

    .from('#gambar-1', {
        opacity : 0,
        duration : 1,
        ease : 'power4.out',
        y : -300,
        onComplete () {
            gsap.to('#gambar-1',{y : -50 , yoyo : true, repeat : -1, duration : 1, ease : 'linear'})
        }
    })
    .from('#gambar-2', {
        opacity : 0,
        duration : 1,
        ease : 'power4.out',
        y : -300,
        onComplete () {
            gsap.to('#gambar-2',{y : -50 , yoyo : true, repeat : -1, duration : 1, ease : 'linear'})
        }
    },'-=0.75')
    .from('#gambar-3', {
        opacity : 0,
        duration : 1,
        ease : 'power4.out',
        y : 300,
        onComplete () {
            gsap.to('#gambar-3',{y : 50 , yoyo : true, repeat : -1, duration : 1, ease : 'linear'})
        }
    },'-=0.75')
    .from('#gambar-4', {
        opacity : 0,
        duration : 1,
        ease : 'power4.out',
        y : 300,
        onComplete () {
            gsap.to('#gambar-4',{y : 50 , yoyo : true, repeat : -1, duration : 1, ease : 'linear'})
        }
    },'-=0.75')
} else {
    gsap.to('#gambar-1',{y : -50 , yoyo : true, repeat : -1, duration : 1, ease : 'linear'})
    gsap.to('#gambar-2',{y : -50 , yoyo : true, repeat : -1, duration : 1, ease : 'linear', delay : 0.25})
    gsap.to('#gambar-3',{y : 50 , yoyo : true, repeat : -1, duration : 1, ease : 'linear', delay : 0.5})
    gsap.to('#gambar-4',{y : 50 , yoyo : true, repeat : -1, duration : 1, ease : 'linear', delay : 0.75})
}

if(!sessionStorage.getItem('tp2')) {
    var tl2 = gsap.timeline({
        scrollTrigger : {
            trigger : '.box-11',
            // markers : true,
            start : '20% bottom',
            onEnter() {
                lottie2.play();
            }
        },
        onComplete () {
            sessionStorage.setItem('tp2', true);
        }
    })

    tl2.from('.head-2' ,{
        opacity : 0,
        duration : 1,
        ease : 'power4.out',
        y : 200
    },0)

    .from('.konteks-1',{
        ...Fade, 
        x : 500
    },0)
} else {
    lottie2.addEventListener('DOMLoaded', () => {
        lottie2.goToAndStop(lottie2.totalFrames - 1 , true);
    })
}

if(!sessionStorage.getItem('tp3')) {
    var tl3 = gsap.timeline({
        scrollTrigger : {
            trigger : '.box-12',
            // markers : true,
            start : '20% bottom'
        },
        onComplete : Sesi('tp3')
    })

    tl3.from('.head-3', {
        ...Fade,
        y : 200
    })

    .from('.card1',{
        ...Fade,
        y : 300,
        stagger : {
            from : 'random',
            amount : 0.5
        }
    },'-=0.5')
}

if(!sessionStorage.getItem('tp4')){
    var tl4 = gsap.timeline({
        scrollTrigger : {
            trigger : '.box-13',
            start : '10% bottom'
        },
        onComplete : Sesi('tp4')
    })

    tl4.from('.head-4', Scale)

    .from('.card2', {
        ...Scale,
        stagger : 0.25
    },'-=0.5')
}

if(!sessionStorage.getItem('tp5')){
    var tl5 = gsap.timeline({
        scrollTrigger : {
            trigger : '.box-14',
            start : '10% bottom'
        },
        onComplete : Sesi('tp5')
    })

    tl5.from('.head-5', {
        ...Fade,
        y : 300
    })

    .from('.vid',{
        ...Fade,
        y : 300,
        stagger : {
            from : 'random',
            amount : 0.5
        }
    },'-=0.5')

    .from('#gambar-group-1',{
        ...Scale,
        stagger : {
            from : 'random',
            amount : 0.25
        }
    },'-=1')
}

if(!sessionStorage.getItem('tp6')){
    var tl6 = gsap.timeline({
        onComplete () {sessionStorage.setItem('tp6', true)},
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