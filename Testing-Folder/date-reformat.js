let dateFormat = () => {
    cats: result.map((result) => {
        return {
          id: result.id,
          url: result.url,
          date: moment(result.date).format('MMMM, Do, YYYY'),
        };
      })
}
