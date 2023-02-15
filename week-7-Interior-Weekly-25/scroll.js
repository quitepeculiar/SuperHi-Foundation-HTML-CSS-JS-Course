// 1. when we scroll, we want to run a function
// 2. we want to figure out how far down the page we have scrolled
// 3. we want to dispaly the pixels we've scrolled inside of our .progress div

$(document).on('scroll', function() {
  /* the scrollTop method gives us back a pixel value for how far
  it is to the top of the page (from our current scroll position)
  */
  var pixelsFromTop = $(document).scrollTop()
  
//   $('.progress').text(pixelsFromTop + ' pixels from top')
  
  if (pixelsFromTop > 50) {
    $('header').addClass('hidden')
  } else {
  	$('header').removeClass('hidden')    
  }
  
  if (pixelsFromTop < 600) {
    $('body').css('background-color', '#ffffff')
  } else if (pixelsFromTop < 1400) {
    $('body').css('background-color', '#a29c97')
  } else if (pixelsFromTop < 2200) {
    $('body').css('background-color', '#d9dfe4')
  } else if (pixelsFromTop < 3000) {
    $('body').css('background-color', '#fff0f0')
  } else {
    $('body').css('background-color', '#cdccc7')
  } 
  
//   1. Make some variables for our documentHeight and windowHeight
//   2. Make a variable to work out the difference between the two
//   compare this to our scrollTop position which goes from the top of window
//   3 Using the difference and the scrollPosition, divide them into each other to 
//   make a percentage
//   4. Multiply by 100 to get back a % value
  
  const documentHeight = $(document).height()
  const windowHeight = $(window).height()
  
  const difference = documentHeight - windowHeight
  
  const percentage = 100 * pixelsFromTop / difference
  
  //   Here we join the number of % scrolled with the % symbol
//   otherwise it assumes we're talking about pixels
	$('.bar').css('width', percentage + '%')
  
  
})