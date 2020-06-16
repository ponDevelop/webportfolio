<?php
mb_internal_encoding("UTF-8");

ini_set('display_errors',1);

    header("Content-Type: application/json; charset=utf-8"); //ヘッダー情報の設定
    $ary_sel_obj = array(); //配列宣言
    $opt = filter_input(INPUT_POST,"opt"); //変数の出力


    /* 名称、url、テキスト */
    $spdata_array =[
        ['iPhone 8','img_iphone8.png','ホームボタン付きのオーソドックスなiPhoneです。<br>
2年前の機種になりますが、一般的なandroidより処理速度も速く日常使いやゲームでも困ることはありません。<br>
最新のiPhoneは11proを除きすべてボディサイズが大きいため、安価でコンパクトなiPhoneが欲しい場合は必然的にiPhone8になります。<br>
価格も下がっているのでコストパフォーマンスの良い機種です。'],
        ['iPhone 8 plus','img_iphone8plus.png','ホームボタン付きのオーソドックスなiPhoneです。<br> 2年前の機種になりますが、一般的なandroidより処理速度も速く日常使いやゲームでも困ることはありません。<br> ボディサイズが大柄ですが、Full HDの液晶ディスプレイ、標準、望遠のデュアルカメラなど最新のiPhoneに見劣りしない性能です。<br> 価格も下がっているのでコストパフォーマンスの良い機種です。'],
        ['iPhone 11','img_iphone11.jpg','最新iPhoneのスタンダード機種です。<br> 少し大きなボディサイズが問題なければ、万人にお勧めできるiPhoneです。'],
        ['iPhone 11pro','img_iphone11pro.jpg','最新iPhoneのプレミアム機種です。<br> 価格が10万円を超えるため万人にお勧めできるiPhoneではありませんが、 トリプルカメラ、コンパクトボディと今iPhoneでできることはすべてこの機種でできます。<br> 有機ELのメリット、デメリットなどもあるので、スペックや違いの分かる人が買うべき機種です。'],
        ['iPhone 11 pro max','img_iphone11promax.png','最新iPhoneのプレミアム機種です。<br> 価格が10万円を超えるため万人にお勧めできるiPhoneではありませんが、 トリプルカメラ、iPhone最大画面と今iPhoneでできることはすべてこの機種でできます。<br> 有機ELのメリット、デメリットなどもあるので、スペックや違いの分かる人が買うべき機種です。'],
        ['AQUOS sense2','img_aquossense2','格安androidスマホです。<br> 防水、おサイフケータイ、そこそこカメラ、縦長ディスプレイ、など最近のスマホに必要な機能は満たしています。<br> CPU性能が高くないため、3Dゲームでは問題が出るかもしれませんが、大多数のユーザーには必要十分な性能です。<br> UQ mobileやgoo simsellerなどの乗り換えキャンペーンで安価で手に入るので、スマホにこだわりがなければお勧めできる機種です。'],
        ['Pixel 3a','img_pixel3a','googleブランドのスマホのミッドレンジ機種です<br> そこそこの価格で必要十分な性能が手に入ります。<br> 3年のアップデート保障、暗所に強いカメラなどiPhoneにこだわりがなければお勧めできる機種です。 '],
        ['Pixel 3a XL','img_pixel3axl','googleブランドのスマホのミッドレンジ機種です<br> そこそこの価格で必要十分な性能が手に入ります。<br> 3年のアップデート保障、暗所に強いカメラ、大画面などiPhoneにこだわりがなければお勧めできる機種です。'],
        ['Pixel 4','img_pixel4','googleブランドのスマホのプレミアム機種です<br> ハイスペックでコンパクトなandroidが欲しい、という人にお勧めできる機種です。'],
        ['Pixel 4 XL','img_pixel4xl','googleブランドのスマホのプレミアム機種です<br> ハイスペックで大画面のandroidが欲しい、という人にお勧めできる機種です。']
    ];
    
    /* 
        集計用テーブル
        設問に対する回答が「はい」の時の得点
    */
    $shukei_array = [
        [100,0,50,0,100,100,100,0,0,0,1,0,0,1],
        [100,0,0,0,0,100,100,1,2,2,1,1,0,0],
        [100,0,0,100,0,100,100,1,1,1,1,1,1,1],
        [100,0,0,100,100,0,100,2,0,0,1,0,0,1],
        [100,0,0,100,0,0,100,2,2,2,1,2,0,0],
        [0,100,50,0,100,100,0,0,0,0,0,0,0,0],
        [0,100,0,0,0,100,0,1,1,1,0,1,0,0],
        [0,100,0,0,0,100,0,1,2,2,0,2,0,0],
        [0,100,0,100,100,0,100,2,1,1,0,1,1,0],
        [0,100,0,100,0,0,100,2,2,2,0,2,1,0]                          
    ];

    //htmlの回答結果
    $ans_array = [
            $_POST['ans1'],
            $_POST['ans2'],
            $_POST['ans3'],
            $_POST['ans4'],
            $_POST['ans5'],
            $_POST['ans6'],
            $_POST['ans7'],
            $_POST['ans8'],
            $_POST['ans9'],
            $_POST['ans10'],
            $_POST['ans11'],
            $_POST['ans12'],
            $_POST['ans13'],
            $_POST['ans14']
        ];

    $x = 0;
    $y = 0;
    $maxRow = 0;
    $maxScore = 0;

    for( $y = 0; $y < count($shukei_array); $y++){
        $counter = 0;
        for( $x = 0; $x < 14/*count($shukei_array)*/; $x++){
            //設問ごとに判定する
            if( $ans_array[$x] == 1){
                $counter += $shukei_array[$y][$x];
            }else{
                //Do nothing
            }
        }
        if( $maxScore < $counter ){
            $maxRow = $y; //最大行を更新する
            $maxScore = $counter;
        }
    }

    //リスト情報
    $retData = array(
                     "sp_name" => $spdata_array[$maxRow][0],
                    "sp_image" => $spdata_array[$maxRow][1],
                    "sp_text" => $spdata_array[$maxRow][2],
                    "max" => $maxRow,
                    "y" => $y,
                    "x" => $x,
                    "counter" => $cnt
    );
    echo json_encode($retData, JSON_UNESCAPED_UNICODE); //jsonオブジェクト化。
    exit;