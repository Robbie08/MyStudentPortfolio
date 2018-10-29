/* global $,document,location */

  $('nav').removeClass('sticky');
  /*FOR STICKY NAVIGATION */
    $('.js--section-about').waypoint(function(direction){
        if(direction == "down") {
            $('nav').addClass('sticky');
            
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
    });
    
