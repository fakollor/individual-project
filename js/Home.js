let i = 0;
let images = [];
let time = 3000;
                    
images[0] = "images/Resume1.png";
images[1] = "images/Resume2.png";
images[2] = "images/Resume3.png";
                    
function change() {
    document.slider.src = images[i];
    if (i < images.length - 1){
        i++;
    } else {
        i = 0;
    }
    setTimeout("change()", time);
}
window.onload = change;


document.getElementById("button").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "flex";
})

document.querySelector(".close").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "none";
})