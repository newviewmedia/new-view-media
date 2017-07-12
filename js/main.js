( function() {
  console.log('MAIN JS IS WORKING');
  //gets the youtube thumbnail
  function getYoutubeThumbnail(){
    // var portfolio = {{ site.data.portfolio | jsonify }};
    // console.log(portfolio);
  }
  //sets the youtube thumbnail and loads thumbnail img on page
  function setYoutubeThumbnail(){
  }
  //hides filters that do not match clicked filter
  $('#portfolio .filter li').click(function(){
    var filter = $(this).attr('data-filter');
    filterCards(filter);
  })
  //Shows all of the cards then hides all of the li elements that were found
  function filterCards(filter){
    showAllCards('.media', 'li');
    if (filter == 'all') {
      showAllCards('.media', 'li');
    } else {
      $('.media').find('li[data-filter!=' + filter + ']').each(function(i) {
        $(this).hide();
      });
    };
  };
  //showAllCards, parameters: parent - parent selector element, finding - child selector element to be found
  function showAllCards(parent, finding) {
    $(parent).find(finding).each(function(i){
      $(this).show();
    });
  };
  $("img").on("click", function() {
    
    // console.log("function working!");
  })

})();

//TODO: animation and active state for the filter texts. ex. when crowdfunding is selected it tints yellow
//      going for Sandwichvideo.com asthetic
//      modal is the goal
