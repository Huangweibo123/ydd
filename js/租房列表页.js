var span = document.getElementsByClassName("span");
var box2 = document.getElementsByClassName("box2")[0];
var yc = document.getElementsByClassName("yc")[0];
var li1 = document.getElementsByClassName("box3")[0].children;
var li = document.getElementsByClassName("box4")[0].children;
var box1 = document.getElementsByClassName("x");

var yc = document.getElementsByClassName("yc")[0];
for (var i = 0; i < li.length; i++) {
  li1[i].setAttribute("index", i);

  li1[i].onclick = function () {
    yc.style.display = "block";
    var ind1 = this.getAttribute("index");
    li[ind1].className = "bs";
    span[ind1].className += " on";

    for (var j = 0; j < li1.length; j++) {
      box1[j].style.display = "none";
      box1[ind1].style.display = "block";
    }
  };
  li[i].setAttribute("index", i);
  li[i].onclick = function () {
    var ind = this.getAttribute("index");

    for (var j = 0; j < li.length; j++) {
      span[j].className = "span";
      box1[j].style.display = "none";
      box1[ind].style.display = "block";
      li[j].className = "";
    }
    span[ind].className += " on";
    li[ind].className = "bs";
  };
}
box2.onclick = function () {
  window.event ? (window.event.cancelBubble = true) : event.stopPropagation();
};
yc.onclick = function () {
  yc.style.display = "none";
  for (var k = 0; k < li.length; k++) {
    li[k].className = "";
    span[k].className = "span";
  }
};

// input清除图标功能
var inp = document.getElementById("inp");
var str = document.getElementsByClassName("str")[0];

inp.addEventListener("input", function () {
  var val = inp.value;
  str.onclick = function () {
    inp.value = "";
    this.style.display = "none";
  };
  if (val.length > 0) {
    str.style.display = "inline-block";
  } else {
    str.style.display = "none";
  }
});
