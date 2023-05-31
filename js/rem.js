// 动态配置rem

// 默认1rem  10px

function setRem() {
  var uiWidth = 375;

  var clientWidth =
    document.documentElement.clientWidth || document.body.clientWidth;
  clientWidth = clientWidth < 300 ? 300 : clientWidth;
  var html = document.querySelector("html");

  html.style.fontSize = (clientWidth / uiWidth) * 10 + "px";
}

window.onresize = setRem;

window.onload = setRem;
