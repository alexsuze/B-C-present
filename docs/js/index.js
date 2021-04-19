window.onload = function () {

    var menu_btn = $('#menu_btn');
    var main_list_rwd = $('.main_list_rwd');
    var menu_btn = $('.menu_btn');
    var expand_btn = $('#expand');
    var sub_list_rwd = $('.sub_list_rwd');
    var html = "";

    function menuBtnFn() {
        main_list_rwd[0].classList.toggle('open_menu');
        if (main_list_rwd[0].classList.contains('open_menu')) {
            menu_btn[0].src = './images/mobile/mobile-close.png';
        } else {
            menu_btn[0].src = './images/mobile/mobile-menu.png';
        }
    }

    function listBtnFn() {
        sub_list_rwd[0].classList.toggle('open_list');
        if (sub_list_rwd[0].classList.contains('open_list')) {
            expand_btn[0].src = './images/mobile/mobile-collapse.png';
        } else {
            expand_btn[0].src = './images/mobile/mobile-expand.png';
        }
    }

    //menu button click event
    menu_btn.on('click', menuBtnFn);
    expand_btn.on('click', listBtnFn);

}
