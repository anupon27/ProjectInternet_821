const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");

menuBtn.onclick = function () {
    sidebar.classList.toggle("active");
};

function searchUser() {
    let input = document.getElementById("searchUser").value;

    if (input === "") {
        alert("Please enter username");
    }
    else {
        alert("Searching for: " + input);
    }
}

function logout() {
    localStorage.removeItem('user')
    window.location.href = '../Login/Login.html'
  }