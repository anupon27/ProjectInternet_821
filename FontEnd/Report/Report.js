const menuBtn = document.getElementById("menuBtn");
const sideBar = document.getElementById("sidebar");

menuBtn.onclick = function () { 
    sideBar.classList.toggle("active");
};