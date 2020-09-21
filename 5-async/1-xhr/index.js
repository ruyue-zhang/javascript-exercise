function fetchData(url, successCallback, errorCallback) {
  const xhr = new XMLHttpRequest();
  // <-- start
  // TODO 21: 通过XMLHttpRequest实现异步请求
  xhr.open('GET', url, true);
  xhr.onreadystatechange = function() {
    if (4 === xhr.readyState) {
      return;
    }
    if (200 === xhr.status) {
      successCallback(xhr.responseText);
    } else {
      errorCallback(xhr.status);
    }
  };
  xhr.send();
  // end -->
}

const URL = 'http://localhost:3000/api';
fetchData(
  URL,
  result => {
    document.writeln(JSON.parse(result).name);
  },
  error => {
    console.error(error);
  }
);
