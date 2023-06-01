var x = document.getElementsByClassName('img3')[0];
var k = document.querySelector(".x12")

x.onclick = function () {
    k.style.display = "none";
}

/* 点击消失按钮 */
var f = document.querySelector(".span1");
var q = document.querySelector(".inp1");

f.onclick = function () {
    var p = q.value;
    if (p.length > 0) {
        q.value = "";
        f.className = "pppp"

    }
}
q.onclick = function () {


    if (q.value > 0) {
        var o = q.value;

    }

    q.addEventListener('input', function () {
        f.className = "ppp"
    })
}