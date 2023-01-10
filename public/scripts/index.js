fetch('http://localhost:3000/api/cats?page=2')
  .then((res) => res.json())
  .then((result) => {
    console.log(result);
  });
