window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

document.addEventListener('DOMContentLoaded', function(event){

    const engagement = document.getElementById("serviceOne");
    const serviceBox = document.getElementsByClassName("serviceBox");
    const toggleMenu = document.getElementById("toggleMenu");
    const collMenu = document.getElementById("collMenu");
    
    console.log("loaded");

    window.addEventListener('scroll', function(){
        var navi = document.querySelector('.header');

        if(this.window.scrollY > 0) {
            navi.className += ' scrolledHeader';
        } else {
            console.log("reached top");
            navi.classList.remove("scrolledHeader");
        }
    });

    for(i = 0; i < serviceBox.length; i++) {
        serviceBox[i].addEventListener('touchstart', function(){
            this.classname= '.hover';
            console.log('touchstart');
        });
    }

    toggleMenu.addEventListener('change', function(event){
        if(toggleMenu.checked) {
            collMenu.style.display = "block";
            console.log("checked");
        } else {
            collMenu.style.display = "none";
            console.log("unchecked");
        }
    });
        

});

// document.getElementById('close').addEventListener('click', bottomClose());
function bottomClose(){
    document.getElementById('bottom').style.display = 'none';
    document.getElementById('bottom').style.transition = .6;
    document.getElementById('footer-b').style.bottom = 0;
}


var clickControl = true;
function headerColor(){
    if(clickControl){
        document.getElementById('header').style.backgroundColor = "black";
        clickControl = !clickControl;
    }else{
        document.getElementById('header').style.backgroundColor = "transparent";
        clickControl = !clickControl;
    }
}

var btn = document.getElementsByClassName("btn-test");
var slide = document.getElementById("slide-test");

btn[0].onclick = function(){
    slide.style.transform = "translateX(0px)";
    for(i=0;i<4;i++){
        btn[i].classList.remove("active-test");
    }
    this.classList.add("active-test");
}
btn[1].onclick = function(){
    slide.style.transform = "translateX(-640px)";
    for(i=0;i<4;i++){
        btn[i].classList.remove("active-test");
    }
    this.classList.add("active-test");
}
btn[2].onclick = function(){
    slide.style.transform = "translateX(-1280px)";
    for(i=0;i<4;i++){
        btn[i].classList.remove("active-test");
    }
    this.classList.add("active-test");
}
btn[3].onclick = function(){
    slide.style.transform = "translateX(-1920px)";
    for(i=0;i<4;i++){
        btn[i].classList.remove("active-test");
    }
    this.classList.add("active-test");
}
btn[4].onclick = function(){
    slide.style.transform = "translateX(-2560px)";
    for(i=0;i<=4;i++){
        btn[i].classList.remove("active-test");
    }
    // this.classList.add("active-test");
}


$(".num").counterUp({delay:10,time:1000})