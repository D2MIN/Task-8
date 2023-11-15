let btn_form = document.getElementById("btn_form");
let close = document.getElementById("popup_close");
let popup = document.getElementById("popup");
let popup_content = document.getElementById('popup_content');

let popup_content_flag = false;

btn_form.addEventListener('click', () => {
    popup.style.visibility = "visible";
    popup.style.opacity = 1;
})

close.addEventListener('click', () => {
    popup.style.visibility = "hidden";
    popup.style.opacity = 0;
})

popup.addEventListener('click', () => {
    if (popup_content_flag != true) {
        popup.style.visibility = "hidden";
        popup.style.opacity = 0;
    } else {
        popup_content_flag = false
    }
})

popup_content.addEventListener('click', () => {
    popup_content_flag = true;
})