$(document).ready(function() {
    var card_open = false;
    $(".card").hover(
      function() {
        if(card_open) return;
        gsap.to($(this).find('.card-bg'), { opacity: 0.6,  duration: 0.6, ease: Power2.easeInOut });
        gsap.to($(this), { width: "420px", y: "-10px", duration: 0.3 , ease: Power2.easeInOut});
        gsap.to($(this).find('.card-info'), { opacity: 1,x:0,  duration: 0.6, delay: 0.1, ease: Power3.easeInOut });
        gsap.to($("#card-box-img-" + $(this).attr('id').split("-")[1]),{ opacity: 1,duration: 0.9,ease: Power3.easeInOut });
        
        gsap.to($(this).find('.card-icon'), { opacity: 0.5, duration: 0.6, ease: Power2.easeInOut });
      },
      function() {
        if(card_open) return;
        // On hover out
        gsap.killTweensOf($(this).find('.card-info')); // Kill any active animations on card-img
        gsap.killTweensOf($(".card-box-img")); // Kill any active animations on card-img
        gsap.killTweensOf($(".card-bg")); // Kill any active animations on card-img
        
        gsap.to($('.card-bg'), { opacity: 0.4, duration: 0.6, ease: Power2.easeInOut });
        gsap.to($(this), { width: "64px",y: "0px", duration: 0.6, ease: Power2.easeInOut });
        gsap.to($(this).find('.card-info'), { opacity: 0,x:"-50px",  duration: 0.6, ease: Power2.easeInOut });
        gsap.to($(".card-box-img"), { opacity: 0, duration: 0.6, ease: Power3.easeInOut });
        
        gsap.to($('.card-icon'), { opacity: 0, duration: 0.6, ease: Power2.easeInOut });
        
      }
    );
    
    
    
     $(".card").on("click", function(){
       if(card_open){
         gsap.to($(".card").not(this), { opacity: 1,y: "0px",display:"flex", width: "64px", duration: 0.2,delay:0.5 }).then(() =>{ card_open = false; });
         gsap.to($(this), { width: "64px",y: "0px",duration: 0.9 });
         gsap.to($(".card-box"), { top:"50%",  yPercent: -50 , duration: 0.9 });
         gsap.to($('.card-bg'), { opacity: 0.4, duration: 0.6 });
         gsap.to($(this).find('.card-title'), { opacity: 0, y:"50px",  duration: 0.1, ease: Power3.easeInOut });
         gsap.to($(".card-container"), {gap:"32px",delay:0.5})
         gsap.to($(".card-box-img"), { opacity: 0, duration: 0.6, ease: Power3.easeInOut });
         //gsap.to($(this).find('.card-icon'), { display: "none", duration: 0.6, ease: Power2.easeInOut });
         gsap.to($(this).find('.card-icon > .close'), { display: "none", duration: 0.3, delay:0.3, ease: Power2.easeInOut });
         gsap.to($(this).find('.card-icon > .open'), { display: "block", duration: 0.3, delay:0.6, ease: Power2.easeInOut });
         gsap.to($('.card-icon'), { opacity: 0, duration: 0.6, ease: Power2.easeInOut });
         
         //Content
         gsap.to($(".portfolio-content"), { opacity: 0, y:"400px",  duration: 0.6 });
         return;
       }
       card_open = true;
       gsap.to($(".card-container"), {gap:0})
       gsap.to($(".card").not(this), { opacity: 0,y: "0px", width: "0px", display:"none", duration: 0.2, ease: Power3.easeInOut});
       gsap.to($(this), { width: "100%",y: "0px", duration: 0.9,delay:0.2 , ease: Power3.easeInOut });
       gsap.to($(".card-box"), { top:0,  yPercent: 0 , duration: 0.9, ease: Power3.easeInOut  });
       gsap.to($(this).find('.card-bg'), { opacity: 0.6,  duration: 0.6, ease: Power3.easeInOut });
       gsap.to($(this).find('.card-info'), { opacity: 0,x:"-50px",  duration: 0.6, ease: Power2.easeInOut });
       gsap.to($(this).find('.card-title'), { opacity: 1, y:"0px",  duration: 0.6, delay:0.6, ease: Power3.easeInOut });
       
       gsap.to($(this).find('.card-icon > .open'), { display: "none", duration: 0.3, delay:0.3, ease: Power2.easeInOut });
       gsap.to($(this).find('.card-icon > .close'), { display: "block", duration: 0.3, delay:0.6, ease: Power2.easeInOut });
       //Content
       gsap.to($("#project-" + $(this).attr('id').split("-")[1]), { opacity: 1, y:"0px",  duration: 0.6,delay:0.3, ease: Power3.easeInOut });
     })
  });

