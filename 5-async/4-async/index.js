async function fetchData(url) {
  // <-- start
  // TODO 24: 通过await/async实现异步请求
  try {
    const result = await fetch(url);
    const data = await result.json();
    document.writeln(data.name);
  } catch (e) {
    consloe.log(e.message);
  }
  // end -->
}

const URL = 'http://localhost:3000/api';
fetchData(URL);
