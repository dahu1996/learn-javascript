async function http(method, url, headers = {}, body = null) {
  return fetch(url, {
    method,
    headers,
    body,
  });
}

export { http };