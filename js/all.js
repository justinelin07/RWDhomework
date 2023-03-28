$(document).ready(function () {
    // 手機板 展開/收合 導覽列
    $('.hamburger-menu').on('click', function (e) {
        e.preventDefault();
        $('body').toggleClass('show-menu');
    });
    // 登入/註冊 頁面切換
    $('.register-click').on('click', function (e) {
        $('.login-form').fadeOut(50);
        $('.register-form').fadeIn(200);
    });
    $('.login-page').on('click', function (e) {
        e.preventDefault();
        $('.register-form').fadeOut(50);
        $('.login-form').fadeIn(200);
    });
});