const ITEMS_PER_PAGE = 10;
const catList = document.getElementById('cat-list');
const pageContainer = document.getElementById('page-container');
let currentPage = 1;
const PAGES_OFFSET = 3;

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
  // let nextBtn = document.querySelector('.next');
  // let prevBtn = document.querySelector('.prev');
  let pages = document.querySelectorAll('.page');
  // nextBtn.addEventListener('click', function () {
  //   if (currentPage == pages.length - 1) {
  //     return;
  //   }
  //   pages[currentPage++].classList.remove('active');
  //   pages[currentPage].classList.add('active');
  // });
  //
  // prevBtn.addEventListener('click', function () {
  //   if (currentPage == 0) {
  //     return;
  //   }
  //   pages[currentPage--].classList.remove('active');
  //   pages[currentPage].classList.add('active');
  // });

  pages.forEach((page, index) => {
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

  fetch(`http://localhost:3000/api/cats?page=${pageNumber}`)
    .then((res) => res.json())
    .then((result) => {
      const { data, total } = result;
      data.forEach((cat) => {
        catList.appendChild(createCatItem(cat.date, cat.url));
      });
      const numberOfPages = Math.ceil(total / ITEMS_PER_PAGE);

      const minRange = currentPage - PAGES_OFFSET;
      const maxRange = currentPage + PAGES_OFFSET;

      for (let i = 0; i < numberOfPages; i++) {
        if (i + 1 >= minRange && i + 1 <= maxRange) {
          console.log(i + 1, minRange, maxRange);
          pageContainer.appendChild(createPageItem(i + 1));
        }
      }
    })
    .finally(() => {
      assignPagination();
    });
};

fetchPage(currentPage);
