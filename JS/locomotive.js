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


// Section Pinning
gsap.utils.toArray("section").forEach((section) => {
	// Check if section has horizontal scrolling
	if (section.classList.contains("portfolio")) {
	  const cards = section.querySelector(".midTwo");
	  const card = section.querySelector(".linkCover");
  
	  gsap.to(cards, {
		x: () => {
		  return -( cards.scrollWidth - 1.5*card.offsetWidth);
		},
		ease: "none",
		scrollTrigger: {
		  trigger: section,
		  start: () => "center center",
		  end: () => "+=" + (cards.scrollWidth - card.offsetWidth),
		  scrub: true,
		  pin: true,
		  invalidateOnRefresh: true,
		  anticipatePin: 1
		}
	  });
	  // Use standard vertical scroll pinning
	} else {
	  ScrollTrigger.create({
		markers: true,
		trigger: section,
		start: () => "top top",
		pin: true,
		anticipatePin: 1
	  });
	}
  });
