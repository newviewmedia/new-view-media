( function() {
  //gets the youtube thumbnail
  function getYoutubeThumbnail(){
    // var portfolio = {{ site.data.portfolio | jsonify }};
    // console.log(portfolio);
  }
  //sets the youtube thumbnail and loads thumbnail img on page
  function setYoutubeThumbnail(){
  }

  /**
   * hides filters that do not match clicked filter
   */
  $('#portfolio .filter li').click(function(){
    var filter = $(this).attr('data-filter');
    $('ul.filter li').removeClass('active');
    $(this).addClass('active');
    filterCards(filter);
  });
  /**
   * Filter the cards then hides all of the li elements that were found
   */
  function filterCards(filter){
    showAllCards('.media', 'li');
    if (filter == 'all') {
      showAllCards('.media', 'li');
    } else {
      $('.media li').filter(function (f) {
        return '[data-filter'
      })
      $('.media').find('li[data-filter!=' + filter + ']').each(function(i) {
        $(this).fadeOut('fast');
      });
    }
  }
  /**
   * showAllCards: shows all of the cards, parameters: parent - parent selector element,
   * finding - child selector element to be found
    */
  function showAllCards(parent, finding) {
    $(parent).find(finding).each(function(i){
      $(this).fadeIn('fast');
    });
  }
  $("img").on("click", function() {


  })
  function loadingAnimation() {
    $("body").addClass('lock-body-overflow');
    $(".rc-loader").delay(1000).fadeOut('slow');
    setTimeout(function() {
      $("body").removeClass('lock-body-overflow');
    }, 2000)
  }
  loadingAnimation();
  //TODO: animation and active state for the filter texts. ex. when crowdfunding is selected it tints yellow
  //      going for Sandwichvideo.com asthetic
  //      modal is the goal


  // $('ul.media li div .overlay').on("click", function () {
  //   // var currVideo = {
  //   //   company: '',
  //   //   id: '',
  //   //   title:'',
  //   // }
  //   var i = $(this).prev().attr('src').replace('//img.youtube.com/vi/', '').replace('/0.jpg', '');
  //   $('.modal-video').toggleClass('active');
  //   $('.modal-video iframe').attr('src', 'https://www.youtube.com/embed/'+i);
  // });
  //
  // $('.modal-video').on('click', function () {
  //   $('.modal-video').toggleClass('active');
  // })
})();
