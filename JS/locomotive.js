/*import LocomotiveScroll from 'locomotive-scroll';*/
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);


/* Main navigation */

document.querySelectorAll(".anchor").forEach(anchor => {
	anchor.addEventListener("click", function(e) {
		e.preventDefault();
		let targetElem = document.querySelector(e.target.getAttribute("href")),
			y = targetElem;
		gsap.to(window, {
			scrollTo: {
				y: y,
				autoKill: false
			},
			duration: 1,
		});
	});
});

/* Panels 
const panels = gsap.utils.toArray(".panels-container .panel");
tween = gsap.to(panels, {
	xPercent: -100 * ( panels.length - 1 ),
	ease: "none",
	scrollTrigger: {
		trigger: "#panels-container",
		pin: true,
		start: "top top",
		scrub: 1,
		snap: {
			snapTo: 1 / (panels.length - 1),
			inertia: false,
			duration: {min: 0.1, max: 0.1}
		},
		end: () =>  "+=" + (panelsContainer.offsetWidth - innerWidth)
	}
});*/


console.log('ya');