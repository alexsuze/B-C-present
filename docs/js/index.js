window.onload = function () {

    let header = document.getElementById('header');
    let footer = document.getElementById('footer');

    let main_list_rwd = document.getElementsByClassName('main_list_rwd');
    let menu_btn = document.getElementsByClassName('menu_btn');

    let expand_btn = document.getElementById('expand');
    let sub_list_rwd = document.getElementsByClassName('sub_list_rwd');

    const menuBtnFn = () => {
        main_list_rwd[0].classList.toggle('open_menu');
        if (main_list_rwd[0].classList.contains('open_menu')) {
            menu_btn[0].src = './images/mobile/mobile-close.png';
        } else {
            menu_btn[0].src = './images/mobile/mobile-menu.png';
        }
    }

    const listBtnFn = () => {
        sub_list_rwd[0].classList.toggle('open_list');
        if (sub_list_rwd[0].classList.contains('open_list')) {
            expand_btn.src = './images/mobile/mobile-collapse.png';
        } else {
            expand_btn.src = './images/mobile/mobile-expand.png';
        }
    }

    const headerData = () => axios.get("./compenents/header.html");
    const footerData = () => axios.get("./compenents/footer.html");


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
