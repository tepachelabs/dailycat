fetch('http://localhost:3000/api/cats?page=2')
  .then((res) => res.json())
  .then((result) => {
    console.log(result);
  });

let currentPage = 0;
let nextBtn = document.querySelector('.next');
let prevBtn = document.querySelector('.prev');
let pages = document.querySelectorAll('.page');
nextBtn.addEventListener('click', function () {
  if (currentPage == pages.length - 1) {
    return;
  }
  pages[currentPage++].classList.remove('active');
  pages[currentPage].classList.add('active');
});

prevBtn.addEventListener('click', function () {
  if (currentPage == 0) {
    return;
  }
  pages[currentPage--].classList.remove('active');
  pages[currentPage].classList.add('active');
});

for (let i = 0; i < pages.length; i++) {
  pages[i].addEventListener('click', function () {
    if (currentPage == i) {
      return;
    }
    pages[currentPage].classList.remove('active');
    pages[i].classList.add('active');
    currentPage = i;
  });
}
