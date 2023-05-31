var yzm = document.querySelector("#yzm");
yzm.onclick = function () {
  this.disabled = "true";
  var num = 60;
  var timer = setInterval(function () {
    num--;
    yzm.innerHTML = `${num}秒后重新获取`;
    if (num == 0) {
      yzm.innerHTML = "重新获取";
      this.disabled = "flase";
      clearInterval(timer);
    }
  }, 1000);
};

// 验证码tab切换
var tab = document.querySelectorAll(".tab");
var yc = document.querySelectorAll(".yc");
console.log(yc);

for (i = 0; i < tab.length; i++) {
  tab[i].setAttribute("index", i);
  tab[i].onclick = function () {
    var ind = this.getAttribute("index");
    for (j = 0; j < tab.length; j++) {
      tab[j].className = "tab";
      tab[ind].className = "tab on";
      yc[j].style.display = "none";
      yc[ind].style.display = "block";
    }
  };
}
