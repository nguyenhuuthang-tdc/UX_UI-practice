//tao bien
//3 thumb
let thumb = document.querySelectorAll(".thumb-item");
//img big
var img = document.querySelector(".img");
//circle
var circle = document.querySelector(".circle");
//logo
var logo_image = document.querySelector(".logo");
//brand nme
var brand_name = document.querySelector(".br-name");
//btn learn
var btn = document.querySelector(".btn");
// hàm thay đổi màu và src ảnh
function changeColorImage(color,logo,src) {
    img.src = src
    circle.style.background = color
    brand_name.style.color = color
    btn.style.background = color
    logo_image.src = logo
}
