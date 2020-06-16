var period = 1; // 有効期限日数

$(function () {
    // 1回目のアクセス
    if ($.cookie('hayato11Opanime') == undefined) {
        // cookie追加
        $.cookie('hayato11Opanime', 'on', { expires: period });

        /*アニメーションの表示*/
        $('.anime').append($('<div>').attr('class', 'op_bg'));
        $('.op_bg').append($('<p>').attr('class', 'op_text').text('more Diverse.'));

    } else {
        /* 2回目以降のアクセスではOPを表示しない */

    }
});

/*アニメーションの表示と非表示*/
$(function () {
    $(".mainSite").css("display", "none");

    setTimeout(function () {
        $('.anime').fadeOut();
    }, 1500);

});

$(function () {

    $(".mainSite").css({ opacity: '0' });
    setTimeout(function () {
        $(".mainSite").css("display", "block");
        $(".mainSite").stop().animate({ opacity: '1' }, 1000);//1秒かけてコンテンツを表示
    }, 1500);

});