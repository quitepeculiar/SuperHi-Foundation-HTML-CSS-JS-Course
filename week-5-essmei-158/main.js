$('.show-filters').on('click', function () {
  if ($('.filters-list').is(':visible')) {
    $('.filters-list').slideUp()
    $('.show-filters').text('Show filters')
  } else {
    $('.filters-list').slideDown()
    $('.show-filters').text('Hide filters')
  }
  
//   this will block default behaviour of # href jumping
//   to top of page
  return false
  
})

$('.filters-list a').on('click', function() {
  
  const filter = $(this).attr('data-filter')
  console.log(filter)
//   Hide all the products
  $('.product').hide()
//   Show the products with a particular filter
  $(filter).show()
//   Add class name of selected to current filter link clicked on
//   after removing the class name to each one
  $('.filters-list a').removeClass('selected')
  $(this).addClass('selected')
  
  // this blocks the link from following href
  return false
}

)