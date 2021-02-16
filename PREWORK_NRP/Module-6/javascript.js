document.getElementById("growbtn").addEventListener("click", function(){
    document.getElementById("box").style.height = "500px";
});
document.getElementById("growbtn").addEventListener("click", function(){
    document.getElementById("box").style.width = "500px";
});
document.getElementById("bluebtn").addEventListener("click", function(){
    document.getElementById("box").style.backgroundColor= "blue";
});
document.getElementById("fadebtn").addEventListener("click", function(){
    document.getElementById("box").style.opacity = "0.5";
});
document.getElementById("shrinkbtn").addEventListener("click", function(){
    document.getElementById("box").style.height = "1px";
});
document.getElementById("shrinkbtn").addEventListener("click", function(){
    document.getElementById("box").style.width = "1px";
});
document.getElementById("resetbtn").addEventListener("click", function(){
    document.getElementById("box").style.opacity = "1.0";  
});
document.getElementById("resetbtn").addEventListener("click", function(){
    document.getElementById("box").style.backgroundColor = "orange";
});
document.getElementById("resetbtn").addEventListener("click", function(){
    document.getElementById("box").style.height = "150px";
});
document.getElementById("resetbtn").addEventListener("click", function(){
    document.getElementById("box").style.width = "150px";
});