var rect = document.querySelector("#center");
rect.addEventListener("mousemove",function(details){
    var rectanglelocation = rect.getBoundingClientRect();
    var insider = details.clientX - rectanglelocation.left;

    if(insider < rectanglelocation.width/2){
        var redcolor = gsap.utils.mapRange(0, rectanglelocation.width / 2, 255, 0,insider);
        gsap.to(rect, {
            backgroundColor: `rgb(${redcolor}, 0, 0)`,
        
        });
    }
    else{
        var bluecolor = gsap.utils.mapRange( rectanglelocation.width / 2, rectanglelocation.width,  0, 225,insider);
        gsap.to(rect, {
            backgroundColor: `rgb(0, 0, ${bluecolor})`,
        
        });
    }
});

rect.addEventListener("mouseleave",function(){
    gsap.to(rect,{
       backgroundColor:"#fff"
    });
})