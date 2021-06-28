let windowsBtn = document.querySelector('.windowsBtn');
let startmenu = document.querySelector('.startMenu-img');
let bottom = startmenu.style.bottom

windowsBtn.addEventListener('click', ()=>{
    console.log(startMenuImg.style.bottom);
    if(startMenuImg.style.bottom == "-86vh"){
        startMenuImg.style.bottom = "10vh";
    }
    else{
        startMenuImg.style.bottom = "-86vh";
    }
});