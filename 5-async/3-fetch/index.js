function fetchData(url) {
  // <-- start
  // TODO 23: 通过Fetch API实现异步请求
  return fetch(url).then(responce => {
    if (200 === responce.status) {
      return responce.json();
    } else {
      Promise.reject(responce.status);
    }
  });
  // end -->
}

const URL = 'http://localhost:3000/api';
fetchData(URL)
  .then(result => {
    document.writeln(result.name);
  })
  .catch(error => {
    console.error(error);
  });
