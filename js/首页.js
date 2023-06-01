var x = document.getElementsByClassName("img3")[0];
var k = document.querySelector(".x12");

x.onclick = function () {
  k.style.display = "none";
};

/* 点击消失按钮 */
var f = document.querySelector(".span1");
var q = document.querySelector(".inp1");
q.addEventListener("input", function () {
  var p = q.value;
  if (p.length > 0) {
    f.className = "ppp";
  } else {
    f.className = "pppp";
  }
  f.onclick = function () {
    q.value = "";
    f.className = "pppp";
  };
});
