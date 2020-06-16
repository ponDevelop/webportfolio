window.onload = (function (d, b, w) {
    var q = d.createElement('div');// div 用意
    q.id = "sakura";// id は sakura を

    // 上の div に style を追加
    q.innerHTML = '<style>' +
        'html,body{overflow-x:hidden;}' +
        '.hana{' +
        'position:absolute;height:0;width:0;' +
        'border: 10px solid pink;' +
        'border-radius: 15px;' +
        'border-top-right-radius: 0;' +
        'border-bottom-left-radius: 0;}' +
        '.hana::after{' +
        'content:"";display:block;position:absolute;top:-7px;left:-7px;height:0;width:0;' +
        'border: 10px solid pink;' +
        'border-radius: 15px;' +
        'border-top-right-radius: 0;' +
        'border-bottom-left-radius: 0;' +
        '-webkit-transform: rotate(15deg);-ms-transform: rotate(15deg);transform: rotate(15deg);' +
        '}' +

        '.topArray1{border-color:#404040;}' +
        '.topArray2{border-color:#505050;}' +
        '.topArray3{border-color:#333333;}' +
        '.topArray4{border-color:#444444;}' +
        '.topArray5{border-color:#555555;}' +
        '.topArray6{border-color:#666666;}' +
        '.topArray1::after{border-color:#aaaaaa;}' +
        '.topArray2::after{border-color:#bbbbbb;}' +
        '.topArray3::after{border-color:#cccccc;}' +
        '.topArray4::after{border-color:#dddddd;}' +
        '.topArray5::after{border-color:#eeeeee;}' +
        '.topArray6::after{border-color:#f0f0f0;}' +

        '.yuragiArray1{-webkit-animation:v1 10s infinite;animation:v1 10s infinite;}' +
        '.yuragiArray2{-webkit-animation:v2 10s infinite;animation:v2 10s infinite;}' +
        '.yuragiArray3{-webkit-animation:v3 9s infinite;animation:v3 9s infinite;}' +
        '.yuragiArray4{-webkit-animation:v4 9s infinite;animation:v4 9s infinite;}' +
        '.yuragiArray5{-webkit-animation:v5 8s infinite;animation:v5 8s infinite;}' +
        '.yuragiArray6{-webkit-animation:v6 8s infinite;animation:v6 8s infinite;}' +
        '@-webkit-keyframes v1{' +
        'from{-webkit-transform: rotate(0deg) scale(1);}' +
        '50%{-webkit-transform: rotate(270deg) scale(1);}' +
        'to{-webkit-transform: rotate(1deg) scale(1);}' +
        '}' +
        '@-webkit-keyframes v2{' +
        'from{-webkit-transform: rotate(-90deg) scale(.9);}' +
        '50%{-webkit-transform: rotate(-360deg) scale(.9);}' +
        'to{-webkit-transform: rotate(-89deg) scale(.9);}' +
        '}' +
        '@-webkit-keyframes v3{' +
        'from{-webkit-transform: rotate(30deg) scale(.8);}' +
        '50%{-webkit-transform: rotate(300deg) scale(.8);}' +
        'to{-webkit-transform: rotate(29deg) scale(.8);}' +
        '}' +
        '@-webkit-keyframes v4{' +
        'from{-webkit-transform: rotate(-120deg) scale(.7);}' +
        '50%{-webkit-transform: rotate(-390deg) scale(.7);}' +
        'to{-webkit-transform: rotate(-119deg) scale(.7);}' +
        '}' +
        '@-webkit-keyframes v5{' +
        'from{-webkit-transform: rotate(60deg) scale(.6);}' +
        '50%{-webkit-transform: rotate(330deg) scale(.6);}' +
        'to{-webkit-transform: rotate(59deg) scale(.6);}' +
        '}' +
        '@-webkit-keyframes v6{' +
        'from{-webkit-transform: rotate(-150deg) scale(.5);}' +
        '50%{-webkit-transform: rotate(-420deg) scale(.5);}' +
        'to{-webkit-transform: rotate(-149deg) scale(.5);}' +
        '}' +
        '@keyframes v1{' +
        'from{transform: rotate(0deg) scale(1);}' +
        '50%{transform: rotate(270deg) scale(1);}' +
        'to{transform: rotate(1deg) scale(1);}' +
        '}' +
        '@keyframes v2{' +
        'from{transform: rotate(-90deg) scale(.9);}' +
        '50%{transform: rotate(-360deg) scale(.9);}' +
        'to{transform: rotate(-89deg) scale(.9);}' +
        '}' +
        '@keyframes v3{' +
        'from{transform: rotate(30deg) scale(.8);}' +
        '50%{transform: rotate(300deg) scale(.8);}' +
        'to{transform: rotate(29deg) scale(.8);}' +
        '}' +
        '@keyframes v4{' +
        'from{transform: rotate(-120deg) scale(.7);}' +
        '50%{transform: rotate(-390deg) scale(.7);}' +
        'to{transform: rotate(-119deg) scale(.7);}' +
        '}' +
        '@keyframes v5{' +
        'from{transform: rotate(60deg) scale(.6);}' +
        '50%{transform: rotate(330deg) scale(.6);}' +
        'to{transform: rotate(59deg) scale(.6);}' +
        '}' +
        '@keyframes v6{' +
        'from{transform: rotate(-150deg) scale(.5);}' +
        '50%{transform: rotate(-420deg) scale(.5);}' +
        'to{transform: rotate(-149deg) scale(.5);}' +
        '}' +

        '</style>';
    b.appendChild(q);

    var windowsHeight = w.innerHeight;// window の高さ
    var scrollPosition = d.documentElement.scrollTop || b.scrollTop;// スクロール位置
    var z = 9999;// z-index 開始値
    var topArray = new Array();// top 値の配列
    var leftArray = new Array();// left 値の配列
    var yuragiArray = new Array();// ゆらぐ最大値の配列
    var dropSpeed = new Array();// 落下スピードの値の配列
    var hanabiraID = new Array();// 花びら1枚1枚用の id の配列 
    var yuragiCount = new Array();// ゆらぎのカウントの配列
    var kazeCount = 0;
    // スクロールした時に scrollPosition の値を更新
    d.addEventListener('scroll', function () { scrollPosition = d.documentElement.scrollTop || b.scrollTop; }, false);

    // 花びらループ
    for (var i = 0; i < 30; i++) {
        var m = d.createElement('div');// div 用意
        m.id = 'hanabira' + i; // 花びらの id
        topArray[i] = Math.random() * -1000 + scrollPosition;// 花びらの最初の top
        leftArray[i] = Math.random() * w.innerWidth;// 花びらの最初の left
        m.setAttribute('style', 'z-index:' + (z + i) + ';top:' + topArray[i] + 'px;left:' + leftArray[i] + 'px;');
        var clss = 'hana topArray' + (Math.floor(Math.random() * 6) + 1) + ' yuragiArray' + (Math.floor(Math.random() * 6) + 1);// class を追加
        m.setAttribute('class', clss);
        q.appendChild(m);// 最初の div に花びらの div を追加
        yuragiArray[i] = Math.random() * 40 + 5;// ゆらぐ最大幅
        dropSpeed[i] = Math.random() * 5 + 2;// スピード
        hanabiraID[i] = d.getElementById('hanabira' + i);// id 指定
        yuragiCount[i] = 0;// ゆらぎの初期値
    }
    // 花びらを繰り返し動かす部分
    setInterval(function () {
        for (var i = 0; i < 30; i++) {// ゆらぎの値が最大値以下なら
            if (topArray[i] < scrollPosition + windowsHeight - 40) {
                if (yuragiArray[i] >= yuragiCount[i]) {
                    leftArray[i] = leftArray[i] + 0.5 + Math.random() * 0.5;
                } else {
                    leftArray[i] = leftArray[i] - 0.5 - Math.random() * 0.5;
                }
                if ((yuragiArray[i] * 2) <= yuragiCount[i]) { // ゆらぎの折り返しの為にカウントを0に
                    yuragiCount[i] = 0;
                }
                topArray[i] = topArray[i] + dropSpeed[i];

            } else {// ウィンドウの下まで移動した場合
                /*
                topArray[i] = scrollPosition - 40;// top 指定で上に戻す
                leftArray[i] = Math.random() * w.innerWidth;// left 指定
                */
                /*一度きりの処理に改変*/
            }
            if (kazeCount >= 100 && kazeCount <= 110) { leftArray[i] = leftArray[i] + 1; }
            else if (kazeCount >= 111 && kazeCount <= 120) { leftArray[i] = leftArray[i] + 3; }
            else if (kazeCount >= 121 && kazeCount <= 129) { leftArray[i] = leftArray[i] + 5; }
            else if (kazeCount >= 130 && kazeCount <= 137) { leftArray[i] = leftArray[i] + 7; }
            else if (kazeCount >= 138 && kazeCount <= 144) { leftArray[i] = leftArray[i] + 9; }
            else if (kazeCount >= 145 && kazeCount <= 300) { leftArray[i] = leftArray[i] + 11; }
            else if (kazeCount >= 301 && kazeCount <= 311) { leftArray[i] = leftArray[i] + 9; }
            else if (kazeCount >= 312 && kazeCount <= 322) { leftArray[i] = leftArray[i] + 7; }
            else if (kazeCount >= 323 && kazeCount <= 335) { leftArray[i] = leftArray[i] + 5; }
            else if (kazeCount >= 336 && kazeCount <= 349) { leftArray[i] = leftArray[i] + 3; }
            else if (kazeCount >= 350 && kazeCount <= 354) { leftArray[i] = leftArray[i] + 1; }
            /*
                        else if (kazeCount >= 500 && kazeCount <= 510) { leftArray[i] = leftArray[i] - 1; }
                        else if (kazeCount >= 511 && kazeCount <= 520) { leftArray[i] = leftArray[i] - 3; }
                        else if (kazeCount >= 521 && kazeCount <= 529) { leftArray[i] = leftArray[i] - 5; }
                        else if (kazeCount >= 530 && kazeCount <= 537) { leftArray[i] = leftArray[i] - 7; }
                        else if (kazeCount >= 538 && kazeCount <= 544) { leftArray[i] = leftArray[i] - 9; }
                        else if (kazeCount >= 545 && kazeCount <= 700) { leftArray[i] = leftArray[i] - 11; }
                        else if (kazeCount >= 701 && kazeCount <= 711) { leftArray[i] = leftArray[i] - 9; }
                        else if (kazeCount >= 712 && kazeCount <= 722) { leftArray[i] = leftArray[i] - 7; }
                        else if (kazeCount >= 723 && kazeCount <= 735) { leftArray[i] = leftArray[i] - 5; }
                        else if (kazeCount >= 736 && kazeCount <= 749) { leftArray[i] = leftArray[i] - 3; }
                        else if (kazeCount >= 750 && kazeCount <= 754) { leftArray[i] = leftArray[i] - 1; }*/

            else if (kazeCount >= 900) {
                kazeCount = 0;
                break;
            }

            //            topArray[i] = topArray[i] + dropSpeed[i];
            hanabiraID[i].style.top = topArray[i] + 'px';
            hanabiraID[i].style.left = leftArray[i] + 'px';
            yuragiCount[i]++;
        }
        kazeCount++;
        /* console.log(kazeCount); */
    }, 45);
})(window.document, window.document.body, window);