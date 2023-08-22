// let grid = new Isotope('.grid', {
//     itemSelector: '.grid-item',
//     layoutMode: 'fitRows'
//   });
  
//   let filterBtn = document.querySelectorAll('.filter-btn');
//   for (let i = 0; i < filterBtn.length; i++) {
//     filterBtn[i].onclick = function (click) {
//       click.preventDefault();
//       let filterData = event.target.getAttribute('data-filter');
//       filterData = filterData.replace(/\s+/g, '');
//       grid.arrange({
//         filter: filterData
//       });
//     };
//   }
   // external js: isotope.pkgd.js

// init Isotope
var iso = new Isotope( '.grid', {
  itemSelector: '.grid-item',
  layoutMode: 'fitRows'
});

// filter functions


// bind filter button click
var filtersElem = document.querySelector('.filters-button-group');
filtersElem.addEventListener( 'click', function( event ) {
  // only work with buttons
  if ( !matchesSelector( event.target, 'button' ) ) {
    return;
  }
  var filterValue = event.target.getAttribute('data-filter');
  // use matching filter function
  filterValue = filterFns[ filterValue ] || filterValue;
  iso.arrange({ filter: filterValue });
});

// change is-checked class on buttons
var buttonGroups = document.querySelectorAll('.button-group');
for ( var i=0, len = buttonGroups.length; i < len; i++ ) {
  var buttonGroup = buttonGroups[i];
  radioButtonGroup( buttonGroup );
}

function radioButtonGroup( buttonGroup ) {
  buttonGroup.addEventListener( 'click', function( event ) {
    // only work with buttons
    if ( !matchesSelector( event.target, 'button' ) ) {
      return;
    }
    buttonGroup.querySelector('.is-checked').classList.remove('is-checked');
    event.target.classList.add('is-checked');
  });
}
