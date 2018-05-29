$(document).ready(()=>{
let quote1=$('#testi1').val()
let quote2=$('#testi2').val()
let quote3=$('#testi3').val()
let quote4=$('#testi4').val()
let quote5=$('#testi5').val()
let quote6=$('#testi6').val()
let quote7=$('#testi7').val()
let quote8=$('#testi8').val()
let quote9=$('#testi9').val()
let quote10=$('#testi10').val()
let quote11=$('#testi11').val()
let quote12=$('#testi12').val()


//Initially menu links are hidden...
 $('.nav-menu').hide();

 $('.toggle').click(()=>{
   if($(document).scrollTop()>50){
     let path=$('#home').offset().top;
  /*   $('body,html').animate({
       scrollTop:path
     },1000)*/
   }
   $('.nav-menu').slideToggle(1000);
   $('.toggle').toggleClass('open');
 })

//Scroll animation implementation...
$('#about-link').click(()=>{
  let path=$('#about').offset().top;
  $('body,html').animate({
    scrollTop:path
  },1000)
  $('.nav-menu').slideUp();
  $('.toggle').toggleClass('open');
})
$('#projects-link').click(()=>{
  let path=$('#projects').offset().top;
  $('body,html').animate({
    scrollTop:path
  },1000)
  $('.nav-menu').slideUp();
  $('.toggle').toggleClass('open');
})

$('#testimonials-link').click(()=>{
  let path=$('#testimonials').offset().top;
  $('body,html').animate({
    scrollTop:path
  },1000)
  $('.nav-menu').slideUp();
  $('.toggle').toggleClass('open');
})
$('#contacts-link').click(()=>{
  let path=$('#contact').offset().top;
  $('body,html').animate({
    scrollTop:path
  },1000)
  $('.nav-menu').slideUp();
  $('.toggle').toggleClass('open');
})




$('.person a').click(()=>{
  $('.person p').slideToggle();
})

//Typed feature...
$('.typed').typed({
  strings:["startups","startups and digital agencies"],

})
})
