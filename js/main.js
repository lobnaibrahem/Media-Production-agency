// navbar scroll function
var navChange = $(".test").offset().top
$(window).scroll(function(){

 var windowScroll = $(window).scrollTop()
 
 if(windowScroll > navChange)
     {
         
$(".custom-nav").css("backgroundColor","#f8f8f8")
$(".custom-nav").css("boxShadow","5px 5px 15px 0 rgba(31, 31, 31, 0.07)")
$(".custom-nav").css("height","60px")        
$(".nav-item a").css("color","#000")
$(".icons a i").css("color","#000")
$(".icons").css("borderLeft","1px solid #000")

         
     }
else
    {
$(".custom-nav").css("backgroundColor","transparent") 
$(".custom-nav").css("boxShadow","0")
$(".custom-nav").css("height","80px")
$(".icons").css("borderLeft","none")
$(".nav-item a").css("color","#f8f8f8")
$(".icons a i").css("color","#f8f8f8")
    }
   
})

// var typed = new Typed('#typed', {
//     stringsElement: '#typed-strings',
//     typeSpeed: 50,
//     backSpeed: 30,
//     backDelay: 1000,
//     startDelay: 1000,
//     loop: true,}
//     );
