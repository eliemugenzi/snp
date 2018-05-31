$(document).ready(()=>{
//Initially menu links are hidden...
 $('.nav-menu').hide();

 $('.toggle').click(()=>{
   $('.nav-menu').slideToggle(1000);
   $('.toggle').toggleClass('open');
 })

//Scroll animation implementation...
 $('.brand').click(()=>{
   let path=$('#home').offset().top;
   console.log("Home",path);
   $('body,html').animate({
     scrollTop:path
   },1000);
 });

$('#about-link').click(()=>{
  let path=$('#about').offset().top;
  console.log("about",path);
  $('body,html').animate({
    scrollTop:path
  },1000)
  $('.nav-menu').slideUp();
  $('.toggle').toggleClass('open');
})
$('#projects-link').click(()=>{
  let path=$('#projects').offset().top;
  console.log("Projects",path);
  $('body,html').animate({
    scrollTop:path
  },1000)
  $('.nav-menu').slideUp();
  $('.toggle').toggleClass('open');
})

$('#testimonials-link').click(()=>{
  let path=$('#testimonials .title').offset().top;
  console.log("Testimonials",path);
  $('#home,#about,#projects').hide();
  $('body,html').animate({
    scrollTop:path
  },1000)
  $('.nav-menu').slideUp();
  $('#home,#about,#projects').show();
  $('.toggle').toggleClass('open');
})
$('#contacts-link').click(()=>{
  let path=$('#contact').offset().top;
  console.log("Contacts",path);
  $('body,html').animate({
    scrollTop:path
  },1000)
  $('.nav-menu').slideUp();
  $('.toggle').toggleClass('open');
})

if($('.toggle').hasClass('open')){
  $('brand').fadeOut();
}
else{
  $('.brand').fadeIn();
}


$('.person a').click(()=>{
  $('.person p').slideToggle();
})

//Typed feature...
$('.typed').typed({
  strings:["we","we do",'we do best'],

})





})
