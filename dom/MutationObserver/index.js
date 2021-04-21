const app = document.querySelector("#app");
const observer = new MutationObserver((records, observer) => {
  // MutationRecord 结构
  console.log(records, observer);
  // 调用disconnect方法并不会结束MutationObserver的声明周期，可以重新将其关联到新的目标节点
  // observer.disconnect();
  console.log(records.map(x => x.target));
});

// 监听多个dom对象，mutationrecord实例中的target区分多个dom
observer.observe(document.body, { attributes: true });
observer.observe(app, { attributes: true, childList: true });

document.body.className = "bar"

setTimeout(() => {
  app.className = "foo";
  const divEle = document.createElement('div');
  divEle.appendChild(document.createTextNode("Hello World"));
  app.append(divEle);
}, 0);



// setTimeout(() => {
//   app.className = "bar";
// }, 0);