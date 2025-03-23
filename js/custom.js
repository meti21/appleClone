//  ***************QUESION 5 starts here***************

let plusExpander = $("h3");
plusExpander.on("click", function () {
  if ($(window).width() < 768) {
    $(this).next("ul").slideToggle(); //$(this) refers to the clicked <h3>.
    $(this).toggleClass("slideup");
  }
});

// to resize when the window resize
$(window).on("resize",function(){
  location.reload();
})
// console.log(window)