gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);
gsap.registerPlugin(CustomEase);

// Function
function goBiskref() {
    window.location.pathname = './biskref.html'
}

function goPolteq (){
    window.location.href = 'https://www.polteq.ac.id/'
}

function goEbpc () {
    window.location.pathname ='./ebpc.html'
}

function goTp () {
    window.location.pathname ='./tp.html'
}

function goPolteqLoc () {
    window.location.href = 'https://maps.app.goo.gl/vkoQz7V5Ne7s6CF86'
}


CustomEase.create('spread1',
    "M0,0 \
    C0.05,0.40 0.15,0.71 0.24,0.93 \
    0.28,1.01 0.33,1.07 0.37,1.10 \
    0.41,1.12 0.45,1.13 0.50,1.13 \
    0.59,1.11 0.83,1.02 0.91,1.00 \
    1,1 1,1 1,1");
// Animation

if(!sessionStorage.getItem('biskref1')){
    var tl1 = gsap.timeline({
        onComplete () {
            sessionStorage.setItem('biskref1', 'true');
            gsap.set('body', {overflowY : 'scroll'})
        }
    });

    const ele = gsap.utils.toArray('.teks-1')

    const ment = ele.map(el => {
        return new SplitText(el, { type: "words" })
    });

    const wordcount = ment[0].words.length;

    const wordGroup = []

    for (let i = 0; i < wordcount; i++) {
        wordGroup[i] = ment.map(s => s.words[i])
    }

    wordGroup.forEach((group,i) => {
        tl1.from(group, {
        duration : 1,
        opacity : 0,
        y : 500,
        ease :'power4.out'
        }, i === 0 ? 0 : "-=0.7")
    })

    var teks2 = SplitText.create('.teks-2', {type : 'chars', deepSlice : true})

    tl1.from(teks2.chars, {
        duration : 1,
        opacity : 0,
        y : 200,
        ease : 'power4.out',
        stagger : 0.03
    })

    var tl2 = gsap.timeline();

    tl2.from('.gambar-1', {
        duration : 1.25,
        scale : 0,
        ease : 'back.out'
    }, 0.25)
    .to('.gambar-1',{
        y : -30,
        duration : 1,
        ease : 'linear',
        repeat : -1,
        yoyo : true,
        repeatDelay :0.1
    }, 0.25)
    .from('.gambar-2', {
        duration : 1.25,
        scale : 0,
        ease : 'back.out'
    }, 0.30)
    .to('.gambar-2',{
        y : -30,
        duration : 1,
        ease : 'linear',
        repeat : -1,
        yoyo : true,
        repeatDelay :0.1
    }, 0.30)
    .from('.gambar-3', {
        duration : 1.25,
        scale : 0,
        ease : 'back.out'
    }, 0.35)
    .to('.gambar-3',{
        y : 30,
        duration : 1,
        ease : 'linear',
        repeat : -1,
        yoyo : true,
        repeatDelay :0.1
    }, 0.35)
    .from('.gambar-4', {
        duration : 1.25,
        scale : 0,
        ease : 'back.out'
    }, 0.40)
    .to('.gambar-4',{
        y : 30,
        duration : 1,
        ease : 'linear',
        repeat : -1,
        yoyo : true,
        repeatDelay :0.1
    }, 0.40)
    .from('.gambar-5', {
        duration : 1.25,
        scale : 0,
        ease : 'back.out'
    }, 0.45)
    .to('.gambar-5',{
        y : -30,
        duration : 1,
        ease : 'linear',
        repeat : -1,
        yoyo : true,
        repeatDelay :0.1
    }, 0.45)
    .from('.gambar-6', {
        duration : 1.25,
        scale : 0,
        ease : 'back.out'
    }, 0.50)
    .to('.gambar-6',{
        y : -30,
        duration : 1,
        ease : 'linear',
        repeat : -1,
        yoyo : true,
        repeatDelay :0.1
    }, 0.50)
    .from('.gambar-7', {
        duration : 1.25,
        scale : 0,
        ease : 'back.out'
    }, 0.55)
    .to('.gambar-7',{
        y : 30,
        duration : 1,
        ease : 'linear',
        repeat : -1,
        yoyo : true,
        repeatDelay :0.1
    }, 0.55)
    .from('.gambar-8', {
        duration : 1.25,
        scale : 0,
        ease : 'back.out'
    }, 0.60)
    .to('.gambar-8',{
        y : 30,
        duration : 1,
        ease : 'linear',
        repeat : -1,
        yoyo : true,
        repeatDelay :0.1
    }, 0.60)
    .from('.gambar-9', {
        duration : 1.25,
        scale : 0,
        ease : 'back.out'
    }, 0.65)
    .to('.gambar-9',{
        y : -30,
        duration : 1,
        ease : 'linear',
        repeat : -1,
        yoyo : true,
        repeatDelay :0.1
    }, 0.65)

    const master1 = gsap.timeline();
    master1.add(tl1);
    master1.add(tl2, 0);

} else {

     gsap.set('body', {overflowY : 'scroll'})

     var tl2 = gsap.timeline();

    tl2.to('.gambar-1',{
        y : -30,
        duration : 1,
        ease : 'linear',
        repeat : -1,
        yoyo : true,
        repeatDelay :0.1
    }, 0.25)
    .to('.gambar-2',{
        y : -30,
        duration : 1,
        ease : 'linear',
        repeat : -1,
        yoyo : true,
        repeatDelay :0.1
    }, 0.30)
    .to('.gambar-3',{
        y : 30,
        duration : 1,
        ease : 'linear',
        repeat : -1,
        yoyo : true,
        repeatDelay :0.1
    }, 0.35)
    .to('.gambar-4',{
        y : 30,
        duration : 1,
        ease : 'linear',
        repeat : -1,
        yoyo : true,
        repeatDelay :0.1
    }, 0.40)
    .to('.gambar-5',{
        y : -30,
        duration : 1,
        ease : 'linear',
        repeat : -1,
        yoyo : true,
        repeatDelay :0.1
    }, 0.45)
    .to('.gambar-6',{
        y : -30,
        duration : 1,
        ease : 'linear',
        repeat : -1,
        yoyo : true,
        repeatDelay :0.1
    }, 0.50)
    .to('.gambar-7',{
        y : 30,
        duration : 1,
        ease : 'linear',
        repeat : -1,
        yoyo : true,
        repeatDelay :0.1
    }, 0.55)
    .to('.gambar-8',{
        y : 30,
        duration : 1,
        ease : 'linear',
        repeat : -1,
        yoyo : true,
        repeatDelay :0.1
    }, 0.60)
    .to('.gambar-9',{
        y : -30,
        duration : 1,
        ease : 'linear',
        repeat : -1,
        yoyo : true,
        repeatDelay :0.1
    }, 0.65)
}


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

if(!sessionStorage.getItem('biskref2')) {
    var tl3 = gsap.timeline({
    scrollTrigger : {
        trigger : '.box-2',
        markers : false,
        start : 200
    },
    onComplete () {
        sessionStorage.setItem('biskref2', true)
    }
    })

    var teks3 = new SplitText('.teks-4', {type :'words'})

    tl3.from('.gambar-10', {
        opacity : 0,
        duration : 1,
        x : -500,
        ease : 'power4.out'
    })

    .from ('.teks-3' , {
        opacity : 0,
        y : 300,
        duration : 1,
        ease : 'power4.out'
    }, '-=0.5')

    .from (teks3.words, {
        opacity : 0,
        duration : 1,
        x : 200,
        ease : 'power4.out',
        stagger : 0.01
    })
}

if(!sessionStorage.getItem('biskref3')){
    var tl4 = gsap.timeline({
    scrollTrigger : {
        trigger : '.trigger-1',
        markers : false,
        start : '300px bottom'
    },
    onComplete () {
        sessionStorage.setItem('biskref3', true)
    }
})

tl4.from('.box-3', {
    opacity : 0,
    duration : 1,
    y : 300,
    ease : 'power4.out'
})

.from('.kotak-label-1',{
    opacity : 0,
    duration : 1,
    stagger : {
        amount : 0.5,
        from : 'random'
    },
    ease : 'power4.out',
    y : 200
},'-=1')

.from('.logo-1', {
    opacity : 0,
    duration : 1,
    stagger : {
        amount : 0.5,
        from : 'random'
    },
    ease : 'power4.out',
    y : 200
},'-=1.5')

.from('.teks-label-1', {
    opacity : 0,
    duration : 1,
    stagger : {
        amount : 0.3,
        from : 'random'
    }
},'-=2')
}

if(!sessionStorage.getItem('biskref4')) {
    var tl5 = gsap.timeline({
    scrollTrigger : {
        trigger : '.box-4',
        markers : false
    },
    onComplete () {
        sessionStorage.setItem('biskref4', true)
    }
})

tl5.from('.teks-5', {
    opacity : 0, 
    y : 200,
    duration : 1,
    stagger : 0.3,
    ease : 'power4.out'
})

.from('.box-5',{
    duration : 1,
    scaleY : 0,
    ease : 'power4.out',
    transformOrigin : 'bottom'
},'-=0.5')

.from('.box-6', {
    duration : 1,
    scaleY : 0,
    ease : 'power4.out',
    transformOrigin : 'bottom',
    stagger : {
        amount : 0.3,
        from : 'center'
    }
},'-=1')

.from('.box-7',{
    opacity : 0,
    duration : 1
})
}

const vid = document.querySelectorAll('.video-1');
var biskref5 = false;

ScrollTrigger.create({
  trigger: '.box-8',
  start: '30% bottom',

  onEnter: () => vid.forEach(v => v.play()),
  onLeave: () => vid.forEach(v => v.pause()),
  onEnterBack: () => vid.forEach(v => v.play()),
  onLeaveBack: () => vid.forEach(v => v.pause()),
});

if(!sessionStorage.getItem('biskref5')){

var tl6 = gsap.timeline({
    scrollTrigger : {
        trigger : '.box-8',
        markers : false,
        start : '30% bottom',
        onEnter () {
            vid.forEach(vid => {
                vid.play();
            })

            sessionStorage.setItem('biskref5', true)
        },
        onLeave () {
            vid.forEach(vid => {
                vid.pause();
            })
        },
        onEnterBack () {
            vid.forEach(vid => {
                vid.play();
            })
        },
        onLeaveBack () {
            vid.forEach(vid => {
                vid.pause();
            })
        },
    }
})

tl6.from('.teks-6',{
    opacity : 0,
    duration : 1,
    ease : 'power4.out',
    y : 300,
})

.from('.gambar-11',{
    scale : 0,
    duration : 0.5,
    x : 100,
    y: 100,
    ease : 'spread1'
},1)
.from('.gambar-12',{
    scale : 0,
    duration : 0.5,
    x : -100,
    y: 100,
    ease : 'spread1'
},1)
.from('.gambar-13',{
    scale : 0,
    duration : 0.5,
    x : 100,
    y: -100,
    ease : 'spread1'
},1)
.from('.gambar-14',{
    scale : 0,
    duration : 0.5,
    x : -100,
    y: -100,
    ease : 'spread1'
},1)
.from('#vid-1',{
    scale : 0,
    duration : 0.75,
    x : 500,
    ease : 'spread1'
}, 1.5)
.from('#vid-2',{
    scale : 0,
    duration : 0.75,
    x : 500,
    ease : 'spread1'
}, 1.5)
.from('#vid-3',{
    scale : 0,
    duration : 0.75,
    x : -500,
    ease : 'spread1'
}, 1.5)
.from('#vid-4',{
    scale : 0,
    duration : 0.75,
    x : -500,
    ease : 'spread1'
}, 1.5)
.from('#vid-5',{
    scale : 0,
    duration : 0.75,
    y : 300,
    ease : 'spread1'
}, 1.5)
.from('#vid-6',{
    scale : 0,
    duration : 0.75,
    y : -300,
    ease : 'spread1'
}, 1.5)
}

var tl7 = gsap.timeline({
    scrollTrigger : {
        trigger : '.box-9'
    }
})

tl7.from('.box-9', {
    opacity : 0,
    duration : 1,
    y : 200,
    ease : 'power4.out'
})

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