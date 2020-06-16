// ページ読込完了後にボタンにclickイベントを登録する
window.addEventListener("load", function () {
    document.getElementById("send_mixdata").addEventListener("click", function () {
        // FoemDataオブジェクトに要素セレクタを渡して宣言する
        var formDatas = document.getElementById("form_recommend");
        var mixedDatas = new FormData(formDatas);

        // XHRの宣言
        var XHR = new XMLHttpRequest();

        // openメソッドにPOSTを指定して送信先のURLを指定します
        XHR.open("POST", "/works/recommendSmartphone/php/ajax_getReccomend.php", true);

        // sendメソッドにデータを渡して送信を実行する
        XHR.send(mixedDatas);

        // サーバの応答をonreadystatechangeイベントで検出して正常終了したらデータを取得する
        XHR.onreadystatechange = function () {
            if (XHR.readyState == 4 && XHR.status == 200) {

                //表示を削除する
                let parent = document.getElementById('sp_name');
                while (parent.lastChild) {
                    parent.removeChild(parent.lastChild);
                }
                parent = document.getElementById('sp_image');
                while (parent.lastChild) {
                    parent.removeChild(parent.lastChild);
                }
                parent = document.getElementById('sp_text');
                while (parent.lastChild) {
                    parent.removeChild(parent.lastChild);
                }

                // POST送信した結果を表示する
                json = JSON.parse(XHR.responseText);

                //スマホ名称
                var h1Node = document.createElement('h1');
                h1Node.innerHTML = "あなたにお勧めなのは<br>" + json.sp_name
                document.getElementById("sp_name").appendChild(h1Node);

                //スマホイメージ
                var img = document.createElement('img');
                img.src = './images/' + json.sp_image;
                img.alt = 'smartphone';
                console.log(json.sp_image);
                console.log(img.src);
                document.getElementById("sp_image").appendChild(img);

                //説明文
                var pNode = document.createElement('p');
                pNode.innerHTML = json.sp_text;
                document.getElementById("sp_text").appendChild(pNode);

                //スクロール
                var element = document.getElementById("recommend"); // 移動させたい位置の要素を取得
                var rect = element.getBoundingClientRect();
                var position = rect.top;    // 一番上からの位置を取得
                scrollTo(0, position);

            }
        };
    }, false);
}, false);

