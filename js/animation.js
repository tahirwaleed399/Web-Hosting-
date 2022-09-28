var tl = gsap.timeline();
var tl2 = gsap.timeline();
tl.fromTo(".inner-heading", {
    y: "100%",
}, {
    duration: 1.2,
    stagger: 0.3,
    y: "0",
});
tl.to(".pages", {
    // delay: 1.4,
    duration: 1.2,
    y: "-100%",
});
tl.to(".first-page", {

    y: "-100%",
});
tl.fromTo(".background", {

    x: "-100%"
}, {

    x: "0",
});
tl.fromTo(".header-content", {
    opacity: 0,
    y: "100px",
}, {
    duration: 1.2,
    opacity: 1,
    y: "0",


});
tl.fromTo(".hero", {
    opacity: 0,
    y: "100px",
}, {

    duration: 1.2,
    opacity: 1,
    y: "0",


}, "-=1");
console.log(`hi`);