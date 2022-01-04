//** jQuery Scroll to Top Control script- (c) Dynamic Drive DHTML code library: http://www.dynamicdrive.com.
//** Available/ usage terms at http://www.dynamicdrive.com (March 30th, 09')
//** v1.1 (April 7th, 09'):
//** 1) Adds ability to scroll to an absolute position (from top of page) or specific element on the page instead.
//** 2) Fixes scroll animation not working in Opera. 

function stickBar(){
    var theUl = $('#fixtoTop').offset().top;
    $(document).scroll(function(){
      var s_top = $(window).scrollTop();
      if(s_top > theUl){
        $('#fixtoTop').css({'position':'fixed','top':0})
      }else{
        $('#fixtoTop').css({'position':'relative','top':0})
      }
      console.info(theUl)
    })
  }

  stickBar()