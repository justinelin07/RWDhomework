$(document).ready(function () {
    // 手機板 展開/收合 導覽列
    $('.hamburger-menu').on('click', function (e) {
        e.preventDefault();
        $('body').toggleClass('show-menu');
    });
 
});