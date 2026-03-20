const menuBtn = document.getElementById("menuBtn");
const sideBar = document.getElementById("sidebar");

function logout() {
    localStorage.removeItem('user')
    window.location.href = '../Login/Login.html'
  }

menuBtn.addEventListener("click", () => {
    sideBar.classList.toggle("active");
});