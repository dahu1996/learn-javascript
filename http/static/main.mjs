import { http as xhrHttp } from './xhr.mjs';
import { http as fetchHttp } from './fetch.mjs';
import { http as jsonpHttp } from './jsonp.mjs';

async function init() {
  const header = {
    "Accept": "text/plain",
    "Content-Type": "application/json"
    // 'Referer': ''
    // 'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/88.0.4324.96'
  };
  // try {
  //   let response = await xhrHttp("get", "http://127.0.0.1:4000/api/info", header);
  //   console.log(response);
  // } catch (err) {
  //   console.log(err);
  // }

  const body = {
    name: "dahu",
    age: 24
  };
  // response = await xhrHttp("post", "/person.json", header, body);

  // response = await fetchHttp("get", "/api/info");
  // response = await response.text();
  // console.log(response);
  let response = await jsonpHttp(
    "http://localhost:8080/api/jsonp?callback=test"
  );
}

init();