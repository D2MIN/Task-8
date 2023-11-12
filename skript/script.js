let input = document.getElementById("btn_inp");
let output = document.getElementById("btn_out");
let close = document.getElementById("popup_close");
let popup = document.getElementById("popup");



input.addEventListener('click', ()=>{
    popup.style.visibility = "visible";
    popup.style.opacity = 1;
})

close.addEventListener('click', ()=>{
    popup.style.visibility = "hidden";
    popup.style.opacity = 0;
})