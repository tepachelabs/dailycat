const catList = document.getElementById('cat-list');
const pageContainer = document.getElementById('page-container');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let currentPage = 1;
let numberOfPages = 0;
const ITEMS_PER_PAGE = 10;
const PAGES_OFFSET = 3;

const canGoNext = () => currentPage < numberOfPages;
const canGoPrevious = () => currentPage > 1;

nextBtn.addEventListener('click', () => {
  if (canGoNext()) {
    const nextPage = currentPage + 1;
    currentPage = nextPage;

    fetchPage(nextPage);
  }
});

prevBtn.addEventListener('click', () => {
  if (canGoPrevious()) {
    const prevPage = currentPage - 1;
    currentPage = prevPage;

    fetchPage(prevPage);
  }
});

/**
 *
 * @param {string} date
 * @param {string} url
 * @param {string} quote
 * @returns {HTMLLIElement}
 */
const createCatItem = (date, url, quote = 'Random quote for now') => {
  const item = document.createElement('li');
  item.className = 'cat-item';

  const image = document.createElement('img');
  const dataWrapper = document.createElement('div');

  image.className = 'cat-image';
  image.src = url;

  dataWrapper.className = 'cat-data-wrapper';

  const dateTitle = document.createElement('h2');
  dateTitle.textContent = date;
  dateTitle.className = 'cat-date';

  const quoteText = document.createElement('p');
  quoteText.textContent = quote;
  quoteText.className = 'cat-quote';

  dataWrapper.appendChild(dateTitle);
  dataWrapper.appendChild(quoteText);

  item.appendChild(image);
  item.appendChild(dataWrapper);

  return item;
};

const createPageItem = (number) => {
  const item = document.createElement('li');
  item.className = 'page';
  item.innerText = number;

  return item;
};

const assignPagination = () => {
  const pages = document.querySelectorAll('.page');

  pages.forEach((page) => {
    const pageIndex = parseInt(page.innerText);

    if (pageIndex === currentPage) {
      page.classList.add('active');
    }

    page.addEventListener('click', () => {
      if (currentPage === pageIndex) {
        return null;
      }

      currentPage = pageIndex;
      fetchPage(pageIndex);
    });
  });

  canGoPrevious()
    ? prevBtn.classList.remove('disabled')
    : prevBtn.classList.add('disabled');

  canGoNext()
    ? nextBtn.classList.remove('disabled')
    : nextBtn.classList.add('disabled');

  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

/**
 *
 * @param {number} pageNumber
 */
const fetchPage = (pageNumber = 1) => {
  pageContainer.innerHTML = '';
  catList.innerHTML = '';

  fetch(`/api/cats?page=${pageNumber}`)
    .then((res) => res.json())
    .then((result) => {
      const { data, total } = result;
      data.forEach((cat) => {
        console.log(cat);
        catList.appendChild(createCatItem(cat.date, cat.url, cat.quote));
      });
      numberOfPages = Math.ceil(total / ITEMS_PER_PAGE);

      const minRange = currentPage - PAGES_OFFSET;
      const maxRange = currentPage + PAGES_OFFSET;

      for (let i = 0; i < numberOfPages; i++) {
        if (i + 1 >= minRange && i + 1 <= maxRange) {
          pageContainer.appendChild(createPageItem(i + 1));
        }
      }
    })
    .finally(() => {
      assignPagination();
    });
};

fetchPage(currentPage);
