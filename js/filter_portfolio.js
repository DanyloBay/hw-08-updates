const grid = () => {
  const items = document.querySelector('.articles__items');
  const itemsGrid = new Isotope(items, {
    itemSelector: '.article',
  });

  document.addEventListener('click', documentActions);

  function documentActions(e) {
    const targetEL = e.target;
    if (targetEL.closest('.filter-articles__item')) {
      const filteredItems = targetEL.closest('.filter-articles__item');
      const filterValue = filteredItems.dataset.filter;
      const filterActive = document.querySelector(
        '.filter-articles__item.active',
      );

      filterValue === '*'
        ? itemsGrid.arrange({ filter: `` })
        : itemsGrid.arrange({ filter: `[data-filter="${filterValue}"]` });

      filterActive.classList.remove('active');
      filteredItems.classList.add('active');

      e.preventDefault();
    }
  }
};

const windowload = () => {
  grid();
};

window.addEventListener('load', windowload);
