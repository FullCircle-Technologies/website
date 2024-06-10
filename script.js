// var scene1 = document.getElementById("scene1");
// var parallaxInstance = new Parallax(scene1);

// var images = document.querySelectorAll('img');
// new simpleParallax(images);


function showInput(){
  var input = document.getElementById('input');
  input.style.display = 'flex';
  document.getElementById('button').style.display = 'none';

}

// gsap
gsap.registerPlugin(ScrollTrigger);


const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: "section",
    start: "top top",
    end: "+=2000%",
    pin: true,
    scrub: true,
    // markers: true
  },
});

// tl.to("#scene1  > img:nth-child(8)", {
//   height: "600%",
//   top: "-200%",
//   // duration: 3,
//   //   webkitFilter: "blur(10px)",
//   //   opacity: 0,
//   ease: "sine.inOut",
//   duration: 1,
// }).to(".text1", {
//   fontSize: "180px",

//   ease: "sine.inOut",
//   duration: 1,
// },0)
//   .to(
//     "#scene1 > img:nth-child(6)",
//     {
//       height: "200%",
//       top: "-50%",
//       duration: 3,
//       //   webkitFilter: "blur(10px)",
//       //   opacity: 0,
//       ease: "sine.inOut",
//       duration: 1.2,
//     },
//     0
//   )
//   .to(
//     "#scene1 > img:nth-child(5)",
//     {
//       height: "200%",
//       top: "-50%",
//       duration: 3,
//       // webkitFilter: "blur(10px)",
//       // opacity: 0,
//       ease: "sine.inOut",
//       duration: 1.4,
//     },
//     0
//   )
//   .to(
//     "#scene1 > img:nth-child(4)",
//     {
//       height: "200%",
//       top: "-50%",
//       duration: 3,
//       // webkitFilter: "blur(10px)",
//       // opacity: 0,
//       ease: "sine.inOut",
//       duration: 1.6,
//     },
//     0
//   )
//   .to(
//     "#scene1 > img:nth-child(3)",
//     {
//       height: "200%",
//       duration: 3,
//       top: "-50%",
//       // webkitFilter: "blur(10px)",
//       // opacity: 0,
//       ease: "sine.inOut",
//       duration: 1.8,
//     },
//     0
//   )
//   .to(
//     "#scene1 > img:nth-child(2)",
//     {
//       height: "200%",
//       top: "-50%",
//       // duration: 3,
//       // webkitFilter: "blur(10px)",
//       // opacity: 0,
//       ease: "sine.inOut",
//       duration: 2,
//     },
//     0
//   )
//   .to(
//     "#scene1 > img:nth-child(1)",
//     {
//       height: "120%",
//       // top: "-5%",
//       duration: 3,
//       ease: "sine.inOut",
//       duration: 3,
//     },
//     0
//   );

tl.to("#img7", {
  scale: 3,
//   webkitFilter: "blur(10px)",
  //   opacity: 0,
  ease: "sine.inOut",
  duration: 3
}).to("#text2", {
  scale: 3,
//   webkitFilter: "blur(10px)",
  //   opacity: 0,
  ease: "sine.inOut",
  duration: 4
},0)
.to("#text1", {
  scale: 3,
  // webkitFilter: "blur(10px)",
  // opacity: 0,
  marginTop: "70%",
  ease: "sine.inOut",
  duration: 10
},0)
.to("#img6", {
  scale: 3,
//   webkitFilter: "blur(10px)",
//   opacity: 0,
  ease: "sine.inOut",
  duration: 5
},0)
.to("#img5", {
    scale: 3,
    // webkitFilter: "blur(10px)",
    // opacity: 0,
    ease: "sine.inOut",
    duration: 10
  },0)
  .to("#img4", {
    scale: 3,
    // webkitFilter: "blur(10px)",
    // opacity: 0,
    ease: "sine.inOut",
    duration: 14
  },0)
  .to("#img3", {
    scale: 2,
    marginTop: "20%",
    // webkitFilter: "blur(10px)",
    // opacity: 0,
    ease: "sine.inOut",
    duration: 18
  },0)
  .to("#img2", {
    scale: 1.8,
    // webkitFilter: "blur(10px)",
    // opacity: 0,
    ease: "sine.inOut",
    duration: 22
  },0)
  .to("#img1", {
    scale: 1.5,
    ease: "sine.inOut",
    duration: 32
  },0)
  .from("#paper", {
    top:"150%",
    scale: "0.2",
    // zIndex: 10,
    ease: "sine.inOut",
    duration: 12
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
