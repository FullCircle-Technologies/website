// var scene1 = document.getElementById('scene1');
// var parallaxInstance = new Parallax(scene1);


// var images = document.querySelectorAll('img');
// new simpleParallax(images);


// gsap
gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline(
    {
        scrollTrigger: {
            trigger: "section",
            start: "top top",
            end: "+=500%",
            pin: true,
            scrub: true,
            // markers: true
          },
    }
);


tl.to("#scene1  > img:nth-child(7)", {
  scale: 3,
  duration: 3,
//   webkitFilter: "blur(10px)",
  //   opacity: 0,
  ease: "sine.inOut",
  duration: 1
 
})
.to("#scene1 > img:nth-child(6)", {
  scale: 3,
  duration: 3,
//   webkitFilter: "blur(10px)",
//   opacity: 0,
  ease: "sine.inOut",
  duration: 1.2
},0)
.to("#scene1 > img:nth-child(5)", {
    scale: 3,
    duration: 3,
    // webkitFilter: "blur(10px)",
    // opacity: 0,
    ease: "sine.inOut",
    duration: 1.4
  },0)
  .to("#scene1 > img:nth-child(4)", {
    scale: 3,
    duration: 3,
    // webkitFilter: "blur(10px)",
    // opacity: 0,
    ease: "sine.inOut",
    duration: 1.6
  },0)
  .to("#scene1 > img:nth-child(3)", {
    scale: 3,
    duration: 3,
    // webkitFilter: "blur(10px)",
    // opacity: 0,
    ease: "sine.inOut",
    duration: 1.8
  },0)
  .to("#scene1 > img:nth-child(2)", {
    scale: 3,
    duration: 3,
    // webkitFilter: "blur(10px)",
    // opacity: 0,
    ease: "sine.inOut",
    duration: 2
  },0)
  .to("#scene1 > img:nth-child(1)", {
    scale: 3,
    duration: 3,
    ease: "sine.inOut",
    duration: 2.2
  },0);


//   gsap.to("#scene1 > img:nth-child(5)", {
//     scale: 3,
//     duration: 3,
//     webkitFilter:"blur(10px)",
//     opacity: 0,
//     ease: "sine.inOut",
//     scrollTrigger: {
//       trigger: "section",
//       start: "top top",
//       end: "+=140%",
//       pin: true,
//       scrub: true
//       // markers: true
//     }
//   });

//   gsap.to("#scene1 > img:nth-child(4)", {
//     scale: 3,
//     duration: 3,
//     webkitFilter:"blur(10px)",
//     opacity: 0,
//     ease: "sine.inOut",
//     scrollTrigger: {
//       trigger: "section",
//       start: "top top",
//       end: "+=160%",
//       pin: true,
//       scrub: true
//       // markers: true
//     }
//   });
