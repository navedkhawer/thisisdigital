

gsap.from("#img1",{
    opacity: 0,
    duration: 1.5,
    delay: 0.4,
    y:60
})
gsap.from("#img2",{
    opacity: 0,
    duration: 1.5,
    delay: 0.4,
    x:60
})
gsap.from("#img3",{
    opacity: 0,
    duration: 1.5,
    delay: 0.4,
    y:-80,
})
gsap.from("#main_text",{
    opacity: 0,
    duration: 1.5,
    delay: 0.4,
})
gsap.from(".find_out",{
    opacity: 0,
    duration: 1.5,
    delay: 0.4,
})
gsap.from(".page2 h5, .page2 h1, .page2 .about_us ",{
    opacity: 0,
    duration:1,
    stagger:{
        amount:2
    },
    scrollTrigger:{
        trigger:".page2 h5",
        scroller:"body",
        // markers:true,
        start:"top 80%"
    }
})
gsap.to(".nav",{
    y:-200,
    duration:1,
    scrollTrigger:{
        trigger:".page2 .about_us",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"top 50%",
        scrub:true
    }
})