window.onload = function () {

    var header = document.getElementById('header');
    var footer = document.getElementById('footer');

    var main_list_rwd = document.getElementsByClassName('main_list_rwd');
    var menu_btn = document.getElementsByClassName('menu_btn');

    var expand_btn = document.getElementById('expand');
    var sub_list_rwd = document.getElementsByClassName('sub_list_rwd');

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
            expand_btn.src = './images/mobile/mobile-collapse.png';
        } else {
            expand_btn.src = './images/mobile/mobile-expand.png';
        }
    }

    function headerData() {
        return axios.get("./compenents/header.html");
    }

    function footerData() {
        return axios.get("./compenents/footer.html");
    }

    //menu button click event
    menu_btn[0].addEventListener('click', menuBtnFn);
    expand_btn.addEventListener('click', listBtnFn);


    axios.all([headerData(), footerData()]).then(axios.spread(function (header_res, footer_res) {
        header.innerHTML = header_res.data;
        footer.innerHTML = footer_res.data;
    }))

    // axios.get('./compenents/header.html')
    //     .then(function (res) {
    //         console.log(res.data);
    //     })
    //     .catch(function (err) {
    //         console.log("2");
    //     });
}
