$(document).ready(function() {
  // Start of Profile Aria Water Effects
  $('#profile_id').ripples({
    resolution: 512,
    dropRadius: 10
  });
  // End of Profile Aria Water Effects

  // Start of Skills Aria Progress Effects
  const bars = document.querySelectorAll('.progress_bar');

  bars.forEach(function(bar) {
    let percentage = bar.dataset.percent;
    let tooltip = bar.children[0];
    tooltip.innerText = percentage + '%';
    bar.style.width = percentage + '%';
    console.log(percentage);
  });
  // End of Skills Aria Progress Effects

  // Start of Counter Aria Effects
  const counters = document.querySelectorAll('.counter');
  console.log(counters);

  function runCounter() {
    counters.forEach(counter => {
      counter.innerText = 0;
      let target = +counter.dataset.count;
      let step = target / 100;

      let countIt = function() {
        let displayedCount = counter.innerText;
        if (displayedCount < target) {
          counter.innerText = displayedCount + step;
          setTimeout(countIt, 1);
        } else {
          counter.innerText = target;
        }
      }
      countIt();
    })

  }

  runCounter();
  // Start of Portfolio Aria Effects
//
//   var $wrapper =('.portfolio_wrapper');
//
//   // Initalize isotope
//   $wrapper.isotope({
//     filter : '*',
//     layoutMode : 'masonry',
//     animationOption:{
//       duration :750,
//       easing : 'linear'
//     }
//   });
//
//   let links = document.querySelectorAll('.tabs a');
//
//   links.forEach(link => {
//     let selector = link.dataset.filter;
// link.addEventListener('click', function(e){
//   e.preventDefault();
//
//   $wrapper.isotope({
//     filter : selector,
//     layoutMode : 'masonry',
//     animationOption:{
//       duration :750,
//       easing : 'linear'
//     }
//   });
//
// });
//
//   })


});







// external js: isotope.pkgd.js

// init Isotope
var $grid = $('.grid').isotope({
  itemSelector: '.element-item',
  layoutMode: 'fitRows'
});
// filter functions
var filterFns = {
  // show if number is greater than 50
  numberGreaterThan50: function() {
    var number = $(this).find('.number').text();
    return parseInt( number, 10 ) > 50;
  },
  // show if name ends with -ium
  ium: function() {
    var name = $(this).find('.name').text();
    return name.match( /ium$/ );
  }
};
// bind filter button click
$('.filters-button-group').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});
// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});
