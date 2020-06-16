/*
    スクロールイベント
*/
function scrollDiv(divName) {
    var element = document.getElementById(divName); // 移動させたい位置の要素を取得
    var rect = element.getBoundingClientRect();
    var position = rect.top;    // 一番上からの位置を取得

    scrollTo(0, position);
};

$(function () {
    document.getElementById("yasai01").onclick = function () {
        var yasai = document.getElementById("yasai01_text");
        if (yasai.classList.contains("show")) {
            yasai.classList.remove("show");
        } else {
            yasai.classList.add("show");
        }
        scrollDiv("yasai01");
    }
});

$(function () {
    document.getElementById("yasai02").onclick = function () {
        var yasai = document.getElementById("yasai02_text");
        if (yasai.classList.contains("show")) {
            yasai.classList.remove("show");
        } else {
            yasai.classList.add("show");
        }
        scrollDiv("yasai02");
    }
});
$(function () {
    document.getElementById("yasai03").onclick = function () {
        var yasai = document.getElementById("yasai03_text");
        if (yasai.classList.contains("show")) {
            yasai.classList.remove("show");
        } else {
            yasai.classList.add("show");
        }
        scrollDiv("yasai03");
    }
});
$(function () {
    document.getElementById("yasai04").onclick = function () {
        var yasai = document.getElementById("yasai04_text");
        if (yasai.classList.contains("show")) {
            yasai.classList.remove("show");
        } else {
            yasai.classList.add("show");
        }
        scrollDiv("yasai04");
    }
});
$(function () {
    document.getElementById("yasai05").onclick = function () {
        var yasai = document.getElementById("yasai05_text");
        if (yasai.classList.contains("show")) {
            yasai.classList.remove("show");
        } else {
            yasai.classList.add("show");
        }
        scrollDiv("yasai05");
    }
});
