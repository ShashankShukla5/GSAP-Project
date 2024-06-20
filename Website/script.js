function page1animation(){
    var tl1 = gsap.timeline()

tl1.from("nav h1, nav h4, nav button", {
    duration:0.5,
    y:-20,
    opacity:0,
    delay:0.9,
    stagger: 0.2
})
tl1.from(".center-part1 h1", {
    x:-560,
    opacity: 0,
    duration:0.4
})
tl1.from(".center-part1 p", {
    x:-100,
    opacity: 0,
    duration:0.4
})
tl1.from(".center-part1 img, .center-part1 button", {
    x:-560,
    opacity: 0,
    duration: 0.4
})
tl1.from(".center-part2 img",{
    opacity: 0,
    x: 200,
}, "-=1")
gsap.from(".section1bottom", {
    transform: 'translateX(-100%)',
    opacity:0.3,
    duration: 2,
    delay: 1,
    stagger: 0.15
})

}

page1animation()

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".services h3",
        scroller: "body",
        markers: true,
        start: "top 50%",
        end: "top 0%",
        scrub: 2
    }
})
tl2.from(".services h3", {
    opacity:0,
    x:-200,
    duration: 0.5,
    
})
tl2.from(".elem.black",{
    y:-500,
    opacity:0,
    duration: 1,
    ease: "elastic.out(1,1.5)",
})