$(function () {
    // 流体アニメーション設定値
    const randomness = 90, // 振れ幅（例：90の場合は0〜90の値になる）
        threshold = 210; // しきい値


    // 流体アニメーション関数を定義
    const fluid = function () {

        // animate関数を使用
        $(".fluid_color_brue,.fluid_color_red").animate({
            borderTopLeftRadius: String(Math.round((Math.random() * randomness + threshold) * 0.3) + 'px'),
            borderTopRightRadius: String(Math.round((Math.random() * randomness + threshold) * 0.3) + 'px'),
            borderBottomLeftRadius: String(Math.round((Math.random() * randomness + threshold) * 0.3) + 'px'),
            borderBottomRightRadius: String(Math.round((Math.random() * randomness + threshold) * 0.3) + 'px'),
        }, {
            duration: 400,
            complete: fluid
        });
    }

    // 流体アニメーション関数を実行
    fluid();
});