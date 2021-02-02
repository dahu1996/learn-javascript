async function http(method, url, headers = {}, body = null) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    // status 状态 变化 1 2 3 4
    // xhr.onreadystatechange = () => {
    //   if (xhr.readyState === 4) {
    //     // console.log(xhr.getResponseHeader("Content-Type"));
    //     // 获取全部response header
    //     // console.log(xhr.getAllResponseHeaders());
    //     if ((xhr.status >= 200 && xhr.status <= 300) || xhr.status == 304) {
    //       resolve(xhr.responseText);
    //     } else {
    //       reject(xhr.status, xhr.statusText);
    //     }
    //   }
    // };
    xhr.onload = () => {
      // 接受响应后触发
      console.log(xhr === this);
      const { status, responseText } = xhr;
      resolve(status, responseText);
    }
    xhr.onerror = (...args) => {
      // 请求错误
      console.log(args, xhr);
      reject();
    }
    xhr.onabort = (...args) => {
      // 请求被中止
      reject();
    }
    xhr.open(method, url, true);
    // 设置请求超时时间
    // xhr.timeout = 2000;
    // xhr.ontimeout = () => {
    //   reject();
    // };
    Object.keys(headers).forEach((key) => {
      // 设置请求头，必须在open之后，send之前
      xhr.setRequestHeader(key, headers[key]);
    });
    // 覆盖mimetype 
    // xhr.overrideMimeType('text/xml');
    xhr.send(body);
  });
}

export { http };