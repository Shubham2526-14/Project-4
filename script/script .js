





const lenis = new Lenis({
  smooth: 10,
  direction: 'vertical',
  gestureOrientation: 'vertical',
  smoothTouch: 5,
  touchMultiplier: 2,
  });
  
  function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
  }
  
  requestAnimationFrame(raf);






gsap.from(".special h2", {
     y: 220,
      duration: 1,

      scrollTrigger:{
        trigger: ".special",
        start: "top 40%", 
        end: "top 50%", 
      
        
      }
     });

















// Create a timeline with ScrollTrigger


let tl = gsap.timeline({

  scrollTrigger: {
    trigger: ".mon",
    start: "top top",
    end:"bottom -500%",
    // end:" bottom",
    scrub: 2,
    pin:true,
    // markers: true,

    
  }
});


tl.to(".mon1", {
  y: 0,
  
  })
  tl.to(".mon1", {
   "--bg-color": "rgba(232, 232, 232, 1)",
  }, ">")
// Add animations to the timeline
tl.to(".mon2", {
   y: 40,    
   }, 0.5)
   .to(".mon2", {
    "--bg-colors": "rgb(227, 225, 225)",
   })



  tl.to(".mon3", { 
    y: 80,
    }, 1)
    .to(".mon3", {
      "--bg-colorss": "rgb(196, 190, 190)",
     })



  tl.to(".mon4", {
     y: 120,
      // duration: 1,
     }, 1.5)
     .to(".mon4", {
      "--bg-colorsss": "rgb(180, 179, 179)",
     })




  tl.to(".mon5", {
     y: 160, 
    //  duration: 1,
    },2)
    .to(".mon5", {
      "--bg-colorssss": "rgb(170, 167, 167)",
      dration: 1
     })



  tl.to(".mon6", {
     y: 200,
      // duration: 1,
    }, 2.5)
    .to(".mon6", {
      "--bg-colorsssss": "rgb(139, 135, 135)",
      dration: 1
     })



  tl.to(".mon7", {
     y: 240, 
    //  duration: 1,
    }, 3)
    .to(".mon7", {
      dration: 1,
     });



var xyz = document.getElementById("xyz");
xyz.addEventListener("click" , function(){
  var dik = document.getElementById("dik");
  dik.style.top="0px";
  console.log(dik);
 
})
var abc = document.getElementById("iqq");
abc.addEventListener("click" , function(){
  var dik = document.getElementById("dik");
  dik.style.top="-100%";
  console.log(dik);
 
})












