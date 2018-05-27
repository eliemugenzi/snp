$(document).ready(()=>{
  let quote1="1...Working with Salt and Pepper’s team of experts to develop our human-centered,\
             interactive custom home builder website was absolutely fantastic! Through S&P’s passion and skill \
             for developing high quality digital experiences, we are now able to educate and excite our target\
             market succinctly via our sophisticated, elegant and bold web platform - ultimately converting higher\
             volumes of quality leads.";
  let quote2="
What impressed us most upon working with Salt & Pepper was their good availability \
and prompt answers to any questions or feedback that we had.\
 The style of communication and overall management of the project were well executed.";
  let quote3="I enjoyed working with S&P. You guys have a good technical \
  and visual understanding which enables you to deliver first class products for\
   international enterprises. I rarely seen such organized,\
   reliable and professional teams in the outsourcing business.\
    We'll keep doing great things together.";
 let quote4="
The best things about working with Salt & Pepper were that they thought deeply \
through the challenges, came up with smart solutions\
 and worked quickly. We got what we wanted from the initial project.\

We will definitely reach out again when we need another project to be done quickly to a high-quality standard.\
We would ideally like to partner long-term with Salt & Pepper.";
let quote5="Yota Play has successfully collaborated with Salt & Pepper\
 on a Yota Play service development using Adobe Flash Access 2.0 technology.\

During this collaboration, Salt & Pepper proved itself a highly qualified and responsible \
team with good business reputation.";
let quote6="
Our main business goal is to achieve customers’ KPI.\
 In our projects with Salt & Pepper all planned KPIs were achieved or exceeded.\
Working with Salt & Pepper we are able to offer our clients concepts with pretty complex web development and be confident that together we can implement them.";
let quote7="
As an agency we are demanding to deadlines and quality. \
That is why we are happy that Salt & Pepper are always serious about deadlines.\
 They do not promise anything before studying the question in detail and after\
  promising they always execute the work on time. And we really appreciate the quality of their work.\

I especially want to note that the leaders of Salt & Pepper are always involved in the process and it helps to quickly resolve issues.";
let quote8="
The choice to work with S&P was based on their team's expertise, their knowledge in up-to-date technology and quick understanding \
of the requirements of the project. The thing we liked the most about the S&P \
team is their dedication to the end result.\

We are truly satisfied with the work S&P has delivered. We broadened our services and provided a wider angle to our clients working hand in hand with such developers.";
 let quote9="
We made several projects with Salt & Pepper and each time\
 received a product of high quality on time. We believe this ensures trust and confidence\
  in the end result. First and foremost, we appreciate their constant effort to make high-quality products \
  in any given conditions.\

I believe we will increase our cooperation to create new and successful digital projects.";
let quote10="
The Salt & Pepper team has shown a high level of responsibility \
and professionalism while working on this project. The team not only delivered according \
to the requirements of the project but also suggested several improvements which made the site structure\
 more user-friendly and laconic. We consider this as a sign of deep understanding of the portal idea \
 as well as an indication that the team takes great interest in the project and strives for the result.\

";
let quote11="
We highly appreciate when contractors are responsible for deadlines and consistent with the quality of their work. Exceptionally high skills + readiness to seek and find solutions in challenging situations are key to our long-term cooperation with contractors. That is why we have already been working with Salt & Pepper for several years.";

let quote12="12...Working with Salt and Pepper’s team of experts to develop our human-centered,\
           interactive custom home builder website was absolutely fantastic! Through S&P’s passion and skill \
           for developing high quality digital experiences, we are now able to educate and excite our target\
           market succinctly via our sophisticated, elegant and bold web platform - ultimately converting higher\
           volumes of quality leads.";




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
})
$('#projects-link').click(()=>{
  let path=$('#projects').offset().top;
  $('body,html').animate({
    scrollTop:path
  },1000)
  $('.nav-menu').slideUp();
})

$('#testimonials-link').click(()=>{
  let path=$('#testimonials').offset().top;
  $('body,html').animate({
    scrollTop:path
  },1000)
  $('.nav-menu').slideUp();
})
$('#contacts-link').click(()=>{
  let path=$('#contact').offset().top;
  $('body,html').animate({
    scrollTop:path
  },1000)
  $('.nav-menu').slideUp();
})




// Testimonials are set dynamically...
 $('.test-show').html(`<h1><q>${quote1}</q></h1>`);
 $('.test-show h1').addClass('faded');
 $('.active').removeClass('active');
 $("#link1").addClass('active');
$("#link1").click(()=>{
  $('.test-show').html(`<h1>${quote1}</h1>`);
  $('.test-show h1').addClass('faded');
  $('.active').removeClass('active');
  $("#link1").addClass('active');
})
$("#link2").click(()=>{
  $('.test-show').html(`<h1>${quote2}</h1>`).fadeIn();
  $('.test-show h1').addClass('faded');
  $('.active').removeClass('active');
  $('#link2').addClass('active');
})
$("#link3").click(()=>{
  $('.test-show').html(`<h1>${quote3}</h1>`).fadeIn();
  $('.test-show h1').addClass('faded');
  $('.active').removeClass('active');
  $('#link3').addClass('active');
})
$("#link4").click(()=>{
  $('.test-show').html(`<h1>${quote4}</h1>`).fadeIn();
  $('.test-show h1').addClass('faded');
  $('.active').removeClass('active');
  $('#link4').addClass('active');
})
$("#link5").click(()=>{
  $('.test-show').html(`<h1>${quote5}</h1>`).fadeIn();
  $('.test-show h1').addClass('faded');
  $('.active').removeClass('active');
  $('#link5').addClass('active');
})
$("#link6").click(()=>{
  $('.test-show').html(`<h1>${quote6}</h1>`).fadeIn();
  $('.test-show h1').addClass('faded');
  $('.active').removeClass('active');
  $('#link6').addClass('active');
})
$("#link7").click(()=>{
  $('.test-show').html(`<h1>${quote7}</h1>`).fadeIn();
  $('.test-show h1').addClass('faded');
  $('.active').removeClass('active');
  $('#link7').addClass('active');
})
$("#link8").click(()=>{
  $('.test-show').html(`<h1>${quote8}</h1>`).fadeIn();
  $('.test-show h1').addClass('faded');
  $('.active').removeClass('active');
  $('#link8').addClass('active');
})
$("#link9").click(()=>{
  $('.test-show').html(`<h1>${quote9}</h1>`).fadeIn();
  $('.test-show h1').addClass('faded');
  $('.active').removeClass('active');
  $('#link9').addClass('active');
})
$("#link10").click(()=>{
  $('.test-show').html(`<h1>${quote10}</h1>`).fadeIn();
  $('.test-show h1').addClass('faded');
  $('.active').removeClass('active');
  $('#link10').addClass('active');
})
$("#link11").click(()=>{
  $('.test-show').html(`<h1>${quote11}</h1>`).fadeIn();
  $('.test-show h1').addClass('faded');
  $('.active').removeClass('active');
  $('#link11').addClass('active');
})
$("#link12").click(()=>{
  $('.test-show').html(`<h1>${quote12}</h1>`).fadeIn();
  $('.test-show h1').addClass('faded');
  $('.active').removeClass('active');
  $('#link12').addClass('active');
})
})
