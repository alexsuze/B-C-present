// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// import "../css/styles.css";

// var mountNode = document.getElementById("app");
// ReactDOM.render(<App name="Jane" />, mountNode);
import $ from "jquery";
window.onload = function () {

    var menu_btn = $('#menu_btn');
    var main_list_rwd = $('.main_list_rwd');
    var menu_btn = $('.menu_btn');

    var html = "";

    function BtnFn() {
        main_list_rwd[0].classList.toggle('open_menu');
        if (main_list_rwd[0].classList.contains('open_menu')) {
            menu_btn[0].src = './images/mobile/mobile-close.png';
        } else {
            menu_btn[0].src = './images/mobile/mobile-menu.png';
        }
        console.log(menu_btn[0]);
    }

    //menu button click event
    menu_btn.on('click', function () {
        BtnFn();
    });


}
