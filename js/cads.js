


 $(function(){ 

$('#ir-arriba').click(function(){
    $('body, html').animate({
      scrollTop: '0px'
    }, 700);
  });
;
 
    $('#carouselExampleIndicators').fadeIn(1000);
    $('#carouselExampleIndicators').addClass('animated zoomIn');



    $('#bajar').fadeOut(0);
    $('#bajar').fadeIn(500);

    $('#contac1').fadeOut(0);
    $('#contac1').fadeIn(2000);


    $('#nosotros1').fadeOut(0);
    $('#nosotros1').fadeIn(2500);

     $('#nosotros2').fadeOut(0);
    $('#nosotros2').fadeIn(3000);

    $('#nosotros3').fadeOut(0);
    $('#nosotros3').fadeIn(3500);

      $('#nosotros4').fadeOut(0);
    $('#nosotros4').fadeIn(4000);

      $('#nosotros5').fadeOut(0);
    $('#nosotros5').fadeIn(4500);

      $('#nosotros6').fadeOut(0);
    $('#nosotros6').fadeIn(5000);

      $('#nosotros7').fadeOut(0);
    $('#nosotros7').fadeIn(5500);


     $('#p-1').fadeOut(0);
    $('#p-1').fadeIn(2000);


     $('#p-2').fadeOut(0);
    $('#p-2').fadeIn(2000);

       $('#c-pro').fadeOut(0);
    $('#c-pro').fadeIn(2500);


    $('#hidra').fadeOut(0);
    $('#hidra').fadeIn(1000);




    

    $('#correo').fadeOut(0); 
    $('#correo').fadeIn(2000);
    $("div#correo").addClass('animated fadeInLeft');

    $('#correo2').fadeOut(0); 
    $('#correo2').fadeIn(2000);
    $("div#correo2").addClass('animated fadeInRight');

    $('#mapa').fadeOut(0); 

    $('#pro').fadeOut(0);  
    $('#pro').fadeIn(0);
    $("div#pro").addClass('animated bounceInLeft');

   
     $('#consumir').fadeOut(0); 
    $('#consumir').fadeIn(2000);
    $('#consumir2').fadeOut(0);
    $('#consumir3').fadeOut(0); 






     $('#contenido1_mv').fadeOut(0);  
    $('#contenido1_mv').fadeIn(0);
    $("div#contenido1_mv").addClass('animated bounceInRight');

      $('#empresa').fadeOut(0);  
    $('#empresa').fadeIn(0);
    $("div#empresa").addClass('animated bounceInLeft');


    $('#contenido3').fadeOut(0);  
    $('#contenido3').fadeIn(0);
    $("div#contenido3").addClass('animated bounceInLeft');

     $('#ini-1').fadeOut(0);  
     $('#ini-2').fadeOut(0);
     $('#ini-3').fadeOut(0);  
     $('#ini-4').fadeOut(0);
     $('#ini-5').fadeOut(0);  
     $('#ini-6').fadeOut(0); 
     $('#ini-7').fadeOut(0);
     $('#ini-8').fadeOut(0);
     $('#ini-9').fadeOut(0);
     $('#ini-10').fadeOut(0);
     $('#ini-11').fadeOut(0);
     $('#ini-12').fadeOut(0);
     $('#ini-13').fadeOut(0);
     $('#contenido2_2').fadeOut(0);


      $('#ini-co').fadeOut(0);  
       $('#ini-co2').fadeOut(0);  
        $('#ini-co_cong').fadeOut(0); 

        $('#fondo-1').fadeOut(0);
           $('#fondo-2').fadeOut(0); 
           $('#fondo-3').fadeOut(0);  
           $('#fondo-4').fadeOut(0); 

       

    $('#con-pro1').fadeOut(0);  
    $('#con-pro2').fadeOut(0);  
    $('#con-pro3').fadeOut(0);  

$('#testimonios-page').fadeOut(0); 
$('#testimonios-page').fadeIn(1000);
$('div#testimonios-page').addClass('animated fadeInRight');
$('#testimonios-page-1').fadeOut(0);
$('#testimonios-page-2').fadeOut(0);
$('#testimonios-page-3').fadeOut(0);
$('#testimonios-page-4').fadeOut(0);
$('#testimonios-page-5').fadeOut(0);
$('#testimonios-page-6').fadeOut(0);
$('#testimonios-page-7').fadeOut(0);
$('#testimonios-page-8').fadeOut(0);
$('#testimonios-page-9').fadeOut(0);
$('#testimonios-page-10').fadeOut(0);




  });





  $(window).on('load',function(){

$('#button_play').on('click', function() {
  //I added this
  $("audio")[0].play();
  
  $('#button_pause').show();
  $('#button_play').hide(1000);

  
  

});
$('#button_pause').on('click', function() {
  //I added this
  $("audio")[0].pause();


 
});



            $(window).scroll(function() {



                  if($(this).scrollTop() > $('div#iii').offset().top) {

                    $('#bajar').hide();       

      
                    $('#fondo-1').fadeIn(0);

                  $('#ini-1').fadeIn(1000);
                    $("div#ini-1").addClass('animated fadeInUp');
                     $('#ini-2').fadeIn(1000);
                    $("div#ini-2").addClass('animated fadeInDown');



                     $('#mapa').fadeIn(1000);
                    $("div#mapa").addClass('animated fadeInUp');
                    $('#consumir2').fadeIn(1000);
                    $('div#consumir2').addClass('animated fadeInLeft');
                    $('#consumir3').fadeIn(1500);

                   


                    
                     $('#ini-co2').fadeIn(1000);
                    $("div#ini-co2").addClass('animated fadeInUp');




                     $('#con-pro1').fadeIn(1000);
                    $("div#con-pro1").addClass('animated fadeInDown');


                     $('#con-pro2').fadeIn(1000);
                    $("div#con-pro2").addClass('animated fadeInUp');



                     $('#con-pro3').fadeIn(1000);
                    $("div#con-pro3").addClass('animated fadeInDown');

                    $('#testimonios-page-1').fadeIn(1000);
                    $('div#testimonios-page-1').addClass('animated fadeInLeft');
                    $('#testimonios-page-2').fadeIn(1700);

         
                }



                if($(this).scrollTop() > $('div#ae1').offset().top) {

                  $('#ini-3').fadeIn(1000);
                    $("div#ini-3").addClass('animated fadeInDown');
                     $('#ini-4').fadeIn(1000);
                    $("div#ini-4").addClass('animated zoomIn');
                      $('#ini-co_cong').fadeIn(1000);
                    $("div#ini-co_cong").addClass('animated fadeInUp');
                    $('#testimonios-page-3').fadeIn(1700);
                     $('#testimonios-page-4').fadeIn(1000);
                    $('div#testimonios-page-4').addClass('animated fadeInRight');

                }


                if($(this).scrollTop() > $('div#ae2').offset().top) {

                     $('#fondo-2').fadeIn(0);
                     $('#ini-5').fadeIn(1000);
                    $("div#ini-5").addClass('animated zoomInLeft animated slow');
                     $('#ini-6').fadeIn(1000);
                    $("div#ini-6").addClass('animated fadeInUp');
                     $('#ini-7').fadeIn(1000);
                    $("div#ini-7").addClass('animated fadeInDown');
                       $('#testimonios-page-5').fadeIn(1000);
                    $('div#testimonios-page-5').addClass('animated fadeInLeft');
                    $('#testimonios-page-6').fadeIn(1700);
                      $('#ult').fadeOut(0);

    
                }


                  if($(this).scrollTop() > $('div#ae3').offset().top) {

                     $('#fondo-3').fadeIn(0);
                    $('#ini-11').fadeIn(1000);
                    $("div#ini-11").addClass('animated fadeInDown');

                    $('#ini-9').fadeIn(1000);
                    $("div#ini-9").addClass('animated zoomIn');

                      $('#testimonios-page-7').fadeIn(1700);
                      $('#testimonios-page-8').fadeIn(1000);
                    $('div#testimonios-page-8').addClass('animated fadeInRight');
    
                }

                 if($(this).scrollTop() > $('div#ae4').offset().top) {


                          
                   $('#ini-10').fadeIn(1000);
                    $("div#ini-10").addClass('animated fadeInDown');

                    $('#contenido2_2').fadeIn(1000);
                    $("div#contenido2_2").addClass('animated zoomIn');
                     $('#testimonios-page-9').fadeIn(1000);
                    $('div#testimonios-page-9').addClass('animated fadeInLeft');
                    $('#testimonios-page-10').fadeIn(1700);
    
                }



                if($(this).scrollTop() > $('div#ae5').offset().top) {
                  $('#ini-12').fadeIn(1000);
                    $("div#ini-12").addClass('animated fadeInDown');
                    $('#ini-13').fadeIn(1500);
                    $('#fondo-4').fadeIn(0);



                }



                if($(this).scrollTop() > $('div#ae6').offset().top) {


                   $('#ini-co').fadeIn(1000);
                    $("div#ini-co").addClass('animated fadeInUp');
    

    
                }




                  

               

                  



            });


               





 $('#empresa').owlCarousel({

              nav: true,
               navText: ["<i class='fas fa-arrow-circle-left fa-2x' id='fl'></i>","<i class='fas fa-arrow-circle-right fa-2x' id='fl'></i>"],
                      loop:true,
                      margin:10,
                    autoplay:false,
                  responsiveClass:true,
                  responsive:{
                                0:{
                                    items:1,
                                },
                                600:{
                                    items:1,
                                },
                                800:{
                                    items:3,
                                  
                                },
                                1200:{
                                    items:3,
                                  
                                    
                                },
                                1100:{
                                    items:3,
                                  
                                    
                                },
                                1200:{
                                    items:3,
                                  
                                    
                                }
                            }

              })



 $('#cliente-satisfecho').owlCarousel({

              nav: true,
               navText: ["<i class='fas fa-arrow-circle-left fa-2x' id='fl'></i>","<i class='fas fa-arrow-circle-right fa-2x' id='fl'></i>"],
                      loop:true,
                      margin:10,
                    autoplay:false,
                  responsiveClass:true,
                  responsive:{
                                0:{
                                    items:1,
                                },
                                600:{
                                    items:1,
                                },
                                800:{
                                    items:2,
                                  
                                },
                                1200:{
                                    items:2,
                                  
                                    
                                },
                                1100:{
                                    items:2,
                                  
                                    
                                },
                                1200:{
                                    items:2,
                                  
                                    
                                }
                            }

              })




 $('#empresa-video').owlCarousel({

              nav: true,
               navText: ["<i class='fas fa-arrow-circle-left fa-2x' id='fl'></i>","<i class='fas fa-arrow-circle-right fa-2x' id='fl'></i>"],
                      loop:true,
                      margin:10,
                    autoplay:false,
                  responsiveClass:true,
                  responsive:{
                                0:{
                                    items:1,
                                },
                                600:{
                                    items:1,
                                },
                                800:{
                                    items:3,
                                  
                                },
                                1200:{
                                    items:3,
                                  
                                    
                                },
                                1100:{
                                    items:3,
                                  
                                    
                                },
                                1200:{
                                    items:3,
                                  
                                    
                                }
                            }

              })




 $('#empresa-senasa').owlCarousel({

              nav: true,
               navText: ["<i class='fas fa-arrow-circle-left fa-2x' id='fl'></i>","<i class='fas fa-arrow-circle-right fa-2x' id='fl'></i>"],
                      loop:true,
                      margin:10,
                    autoplay:false,
                  responsiveClass:true,
                  responsive:{
                                0:{
                                    items:1,
                                },
                                600:{
                                    items:1,
                                },
                                800:{
                                    items:3,
                                  
                                },
                                1200:{
                                    items:3,
                                  
                                    
                                },
                                1100:{
                                    items:3,
                                  
                                    
                                },
                                1200:{
                                    items:3,
                                  
                                    
                                }
                            }

              })














         $('#testimonios').owlCarousel({


            nav: true,
               navText: ["<i class='fas fa-arrow-circle-left fa-2x' id='fl'></i>","<i class='fas fa-arrow-circle-right fa-2x' id='fl'></i>"],
                    margin:30,
                    loop:true,
                    autoHeight:true,
                    autoplay:false,
                  responsiveClass:true,
                  responsive:{
                                0:{
                                    items:1,
                                },
                                600:{
                                    items:1,
                                },
                                800:{
                                    items:3,
                                    
                                },
                                1200:{
                                    items:4,
                                    
                                },
                                1100:{
                                    items:4,
                                    
                                },
                                1200:{
                                    items:4,
                                    
                                }
                            }

              })



  


 $('#hidra').owlCarousel({

 

                   nav: true,
               navText: ["<i class='fas fa-arrow-circle-left fa-2x' id='fl'></i>","<i class='fas fa-arrow-circle-right fa-2x' id='fl'></i>"],
                  stagePadding: 30,
                      loop:true,
                      margin:10,
                    autoplay:false,
                  responsiveClass:true,
                  responsive:{
                                0:{
                                    items:1,
                                },
                                600:{
                                    items:2,
                                },
                                800:{
                                    items:4,
                                    loop:false
                                },
                                1200:{
                                    items:4,
                                    loop:false
                                    
                                },
                                1100:{
                                    items:4,
                                    loop:false
                                    
                                },
                                1200:{
                                    items:4,
                                    loop:false
                                    
                                }
                            }

              })





  $('#concen').owlCarousel({
             

                nav: true,
               navText: ["<i class='fas fa-arrow-circle-left fa-2x' id='fl'></i>","<i class='fas fa-arrow-circle-right fa-2x' id='fl'></i>"],
                  stagePadding: 30,
                      loop:true,
                      margin:10,
                      autoHeight:true,
                    loop:true,
                    autoplay:false, 
                  responsiveClass:true,
                  responsive:{
                                0:{
                                    items:1,
                                },
                                600:{
                                    items:2,
                                },
                                800:{
                                    items:4,
                                    loop:false
                                },
                                1200:{
                                    items:4,
                                    loop:false
                                    
                                },
                                1100:{
                                    items:4,
                                    loop:false
                                    
                                },
                                1200:{
                                    items:4,
                                    loop:false
                                    
                                }
                            }

              })




  $('#cloro').owlCarousel({
             


               nav: true,
               navText: ["<i class='fas fa-arrow-circle-left fa-2x' id='fl'></i>","<i class='fas fa-arrow-circle-right fa-2x' id='fl'></i>"],
                  stagePadding: 30,
                      margin:10,
                    loop:true,
                       autoHeight:true,
                    autoplay:false,
                    
                  responsiveClass:true,
                  responsive:{
                                0:{
                                    items:1,
                                },
                                600:{
                                    items:2,
                                },
                                800:{
                                    items:4,
                                    loop:false
                                },
                                1200:{
                                    items:4,
                                    loop:false
                                    
                                },
                                1100:{
                                    items:4,
                                    loop:false
                                    
                                },
                                1200:{
                                    items:4,
                                    loop:false
                                    
                                }
                            }

              })


            









              $('#pro').owlCarousel({
             
                   margin:30,
                    loop:true,
                    autoplay:false,
                    
                  responsiveClass:true,
                  responsive:{
                                0:{
                                    items:1,
                                },
                                600:{
                                    items:2,
                                },
                                800:{
                                    items:3,
                                    loop:false
                                },
                                1200:{
                                    items:4,
                                    loop:false
                                    
                                },
                                1100:{
                                    items:4,
                                    loop:false
                                    
                                },
                                1200:{
                                    items:4,
                                    loop:false
                                    
                                }
                            }

              })



               $('#registros').owlCarousel({
             
                   margin:30,
                    loop:true,
                    autoplay:true,
                    autoplayTimeout:5000,
                    animateIn:'zoomIn',
                    animateOut:'zoomOut',
                    
                  responsiveClass:true,
                  responsive:{
                                0:{
                                    items:1,
                                },
                                600:{
                                    items:2,
                                },
                                800:{
                                    items:3,
                                  
                                },
                                1200:{
                                    items:5,
                                  
                                    
                                },
                                1100:{
                                    items:5,
                                  
                                    
                                },
                                1200:{
                                    items:5,
                                  
                                    
                                }
                            }

              })



 $('#extracto').owlCarousel({
             
                   
               nav: true,
               navText: ["<i class='fas fa-arrow-circle-left fa-2x' id='fl'></i>","<i class='fas fa-arrow-circle-right fa-2x' id='fl'></i>"],
                  stagePadding: 30,
                      loop:true,
                      margin:10,
                    loop:true,
                    autoplay:false,
                  responsiveClass:true,
                  responsive:{
                                0:{
                                    items:1,
                                },
                                600:{
                                    items:2,
                                },
                                800:{
                                    items:4,
                                    loop:false
                                },
                                1200:{
                                    items:4,
                                    loop:false
                                    
                                },
                                1100:{
                                    items:4,
                                    loop:false
                                    
                                },
                                1200:{
                                    items:4,
                                    loop:false
                                    
                                }
                            }

              })





 $('#germinado').owlCarousel({
             
                  
               nav: true,
               navText: ["<i class='fas fa-arrow-circle-left fa-2x' id='fl'></i>","<i class='fas fa-arrow-circle-right fa-2x' id='fl'></i>"],
                  stagePadding: 30,
                      loop:true,
                      margin:10,
                    loop:true,
                    autoplay:false,    
                  responsiveClass:true,
                  responsive:{
                                0:{
                                    items:1,
                                },
                                600:{
                                    items:2,
                                },
                                800:{
                                    items:4,
                                    loop:false
                                },
                                1200:{
                                    items:4,
                                    loop:false
                                    
                                },
                                1100:{
                                    items:4,
                                    loop:false
                                    
                                },
                                1200:{
                                    items:4,
                                    loop:false
                                    
                                }
                            }

              })



              




});







