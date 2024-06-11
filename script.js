

function showInput(){
  var input = document.getElementById('input');
  input.style.display = 'flex';
  document.getElementById('button').style.display = 'none';
  // TweenMax.to("#button", 2, {opacity:0,visibility:"hidden"});
  // TweenMax.to("#input", 0, {opacity:1,display:"flex", duration: 1});


}


document.getElementById('input').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission


  const handle = document.getElementById('handle').value;
  const phone = document.getElementById('phone').value;

  const phonePattern = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/;

  if (!phone.match(phonePattern) && phone.length < 10) {
    alert('Please enter a valid phone number.');
    return; // Stop form submission if phone number is invalid
  }


  var rec = document.getElementById('recieved');
  var form = document.getElementById('form');
  form.style.display = 'none';
  rec.style.display = 'flex';



  fetch('https://script.google.com/macros/s/AKfycbwKwZpIMa9R6nexGhVbxBzKtDIG-arkDnlkOso5e7Y1qHu9FCOHOuD-gm5jTXGbqxMKpw/exec', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded', // Ensure the content type matches the form submission
    },
    body: new URLSearchParams({
      handle: handle,
      phone: phone
    })
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
    // Handle success - you can display a success message or redirect the user
  })
  .catch((error) => {
    console.error('Error:', error);
    // Handle error - you can display an error message to the user
  });
});





// gsap



gsap.registerPlugin(ScrollTrigger);


const lenis = new Lenis()


lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)



let tl = gsap.timeline({
  paused:true,
  scrollTrigger: {
    trigger: "section",
    start: "top top",
    end: "+=2000%",
    pin: true,
    scrub: true,
    // markers: true
  },
});


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
  top: "100%",
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
    marginTop: "30%",
    // webkitFilter: "blur(10px)",
    // opacity: 0,
    ease: "sine.inOut",
    duration: 14
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
    duration: 6
  },0);




// loading


document.addEventListener('DOMContentLoaded', function() {
  const textElement = document.querySelector('#progress_text');

  function updateText(content) {
    textElement.textContent = content + '%';
  }

  // Function to incrementally count from start to end value
  function incrementalCount(start, end, duration, callback) {
    let current = start;
    const stepTime = duration / (end - start); // Time for each step
    function step() {
      updateText(current);
      if (current < end) {
        current++;
        setTimeout(step, stepTime);
      } else if (callback) {
        callback();
      }
    }
    step();
  }

  // Start the animations
  incrementalCount(20, 45, 1000, function() {
    setTimeout(function() {
      incrementalCount(45, 100, 1500, function() {
        setTimeout(function() {
          document.querySelector('#loading').style.display= 'none';
          gsap.fromTo(".main",{'webkitFilter': 'blur(10px)',}, {'webkitFilter': 'blur(0px)',opacity: 1, duration: 1, ease: "sine.inOut"});
        }, 100); // Wait 1 second before fading out
      });
    }, 1000);
  });
});
