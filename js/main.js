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
     $('body,html').animate({
       scrollTop:path
     },1000)
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




// Testimonials are set dynamically...
 $('.test-show').html(`<h1><q>${quote1}</q></h1>`);
 $('.test-show h1').addClass('faded');
 $('.active').removeClass('active');
 $("#link1").addClass('active');
$("#link1").click(()=>{
  $('.test-show').html(`<h1><q>${quote1}</q></h1>`);
  $('.test-show h1').addClass('faded');
  $('.active').removeClass('active');
  $("#link1").addClass('active');
})
$("#link2").click(()=>{
  $('.test-show').html(`<h1><q>${quote2}</q></h1>`).fadeIn();
  $('.test-show h1').addClass('faded');
  $('.active').removeClass('active');
  $('#link2').addClass('active');
})
$("#link3").click(()=>{
  $('.test-show').html(`<h1><q>${quote3}</q></h1>`).fadeIn();
  $('.test-show h1').addClass('faded');
  $('.active').removeClass('active');
  $('#link3').addClass('active');
})
$("#link4").click(()=>{
  $('.test-show').html(`<h1><q>${quote4}</q></h1>`).fadeIn();
  $('.test-show h1').addClass('faded');
  $('.active').removeClass('active');
  $('#link4').addClass('active');
})
$("#link5").click(()=>{
  $('.test-show').html(`<h1><q>${quote5}</q></h1>`).fadeIn();
  $('.test-show h1').addClass('faded');
  $('.active').removeClass('active');
  $('#link5').addClass('active');
})
$("#link6").click(()=>{
  $('.test-show').html(`<h1><q>${quote6}</q></h1>`).fadeIn();
  $('.test-show h1').addClass('faded');
  $('.active').removeClass('active');
  $('#link6').addClass('active');
})
$("#link7").click(()=>{
  $('.test-show').html(`<h1><q>${quote7}</q></h1>`).fadeIn();
  $('.test-show h1').addClass('faded');
  $('.active').removeClass('active');
  $('#link7').addClass('active');
})
$("#link8").click(()=>{
  $('.test-show').html(`<h1><q>${quote8}</q></h1>`).fadeIn();
  $('.test-show h1').addClass('faded');
  $('.active').removeClass('active');
  $('#link8').addClass('active');
})
$("#link9").click(()=>{
  $('.test-show').html(`<h1><q>${quote9}</q></h1>`).fadeIn();
  $('.test-show h1').addClass('faded');
  $('.active').removeClass('active');
  $('#link9').addClass('active');
})
$("#link10").click(()=>{
  $('.test-show').html(`<h1><q>${quote10}</q></h1>`).fadeIn();
  $('.test-show h1').addClass('faded');
  $('.active').removeClass('active');
  $('#link10').addClass('active');
})
$("#link11").click(()=>{
  $('.test-show').html(`<h1><q>${quote11}</q></h1>`).fadeIn();
  $('.test-show h1').addClass('faded');
  $('.active').removeClass('active');
  $('#link11').addClass('active');
})
$("#link12").click(()=>{
  $('.test-show').html(`<h1><q>${quote12}</q></h1>`).fadeIn();
  $('.test-show h1').addClass('faded');
  $('.active').removeClass('active');
  $('#link12').addClass('active');
})
})
