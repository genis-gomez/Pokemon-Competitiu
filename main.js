let gallery;
let left;
let right;
let posGallery = 0;

let themeswitch;
window.onload = function(){
    left = document.getElementById("leftBtn");
    right = document.getElementById("rightBtn");
    gallery = document.getElementsByClassName("galleryImg");
    themeswitch = document.getElementById("themeswitch");
    left.onclick = scrollLeft;
    right.onclick =  scrollRight;
    updateGallery();
    themeswitch.onclick = switchTheme;
    themeswitch.checked =false;
}

function switchTheme(){
    console.log(themeswitch.checked);
    if(themeswitch.checked == false){
        let elements = document.querySelectorAll(".dark");
        for(let i = 0; i < elements.length; i++){
            console.log(elements);
            elements[i].classList.add("light");
            elements[i].classList.remove("dark");
        }
    }
    else{
        let elements = document.querySelectorAll(".light");
        for(let i = 0; i < elements.length; i++){
            console.log(elements);
            elements[i].classList.add("dark");
            elements[i].classList.remove("light");
        }
    }
}

function scrollLeft(){
    if(posGallery > 0){
        posGallery--
    }
    else{
        posGallery = gallery.length -1;
    }
    console.log(posGallery);
    updateGallery();
}

function scrollRight(){
    posGallery++;
    if(posGallery == gallery.length){
        posGallery = 0;
    }
    console.log(posGallery);
    updateGallery();
}

function updateGallery(){
    for(let i = 0; i < gallery.length; i++){
        if(i == posGallery){
            gallery[i].style.display = "block";
        }
        else{
            gallery[i].style.display = "none";
        }
    }
}