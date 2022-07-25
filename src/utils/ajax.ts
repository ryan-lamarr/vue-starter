function ajax(url: string, cb: any) {
  let ajaxHttp: any;
  if (window.XMLHttpRequest) {
    ajaxHttp = new XMLHttpRequest();
    ajaxHttp.open("get", "abc.txt", true); // 异步
    ajaxHttp.send();
  } else {
    ajaxHttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  ajaxHttp.onreadystatechange = cb(ajaxHttp);
}
export default { ajax };
