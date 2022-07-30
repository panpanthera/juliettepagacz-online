/*import LocomotiveScroll from 'locomotive-scroll';*/
gsap.registerPlugin(ScrollTrigger);
const locoScroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  tablet: {
    smooth: true
  },
  smartphone: {
    smooth: true
  },
  repeat: true,
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("[data-scroll-container]", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  },
  pinType: document.querySelector("[data-scroll-container]").style.transform ? "transform" : "fixed"
});



/*ScrollTrigger.defaults({
   toggleActions: "restart pause reverse pause"
});*/
/*
gsap.to(".purple", {
  scrollTrigger: {
    trigger: ".purple",
    toggleActions: "restart pause reverse pause",
    scroller: "[data-scroll-container]"
  },
  duration: 2,
  backgroundColor: "#3B2EEF",
  ease: "none"
});
*/
gsap.to("#pageOne", {
  scrollTrigger: {
    trigger: ".one",
    start: 'top center',
    end: 'bottom 50%',
    toggleActions: "play reverse play reverse",
    scroller: "[data-scroll-container]"
  },
  duration: 0.5,
  color: "#fff",
  ease: "none"
});

gsap.to("#pageTwo", {
  scrollTrigger: {
    trigger: ".two",
    start: 'top center',
    end: 'bottom 50%',
    toggleActions: "play reverse play reverse",
    scroller: "[data-scroll-container]"
  },
  duration: 0.5,
  color: "#fff",
  ease: "none"
});

gsap.to("#pageThree", {
  scrollTrigger: {
    trigger: ".three",
    start: 'top center',
    end: 'bottom 50%',
    toggleActions: "play reverse play reverse",
  //  markers: true,
    scroller: "[data-scroll-container]"
  },
  duration: 0.5,
  color: "#fff",
  ease: "none"
});


var navigation = new TimelineLite({
  paused: true,
  reversed: true
});
navigation.to("#navigationWrap", 0.5, {
    opacity: 1,
    display: 'block'
  })
  .to(".navbar", 0.3, {
    opacity: 0
  }, "-=0.1")
  .to(".close", 0.3, {
    display: "block",
    opacity: 1
  }, "-=0.1")
  .from(".menu2", 0.5, {
    opacity: 0,
    y: 30
  })
  .from(".social", 0.5, {
    opacity: 0
  });

$(".navbar, .close").click(function () {
  navigation.reversed() ? navigation.play() : navigation.reverse();
})



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

console.log('ya');