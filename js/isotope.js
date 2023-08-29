let grid = new Isotope('.grid', {
    itemSelector: '.grid-item',
    layoutMode: 'fitRows'
  });

  
  let filterBtn = document.querySelectorAll('.filter-btn');

function removeActiveClass() {
  filterBtn.forEach((filterBtn) => filterBtn.classList.remove('is-active'));
}
  for (let i = 0; i < filterBtn.length; i++) {
    filterBtn[i].onclick = function (click) {
      
      click.preventDefault();
      
      let filterData = event.target.getAttribute('data-filter');
      buttonGroup.querySelector('.is-active').classList.remove('is-active');
    event.target.classList.add('is-active');
    
      filterData = filterData.replace(/\s+/g, '');
      grid.arrange({
        filter: filterData
      });
    };
  }


