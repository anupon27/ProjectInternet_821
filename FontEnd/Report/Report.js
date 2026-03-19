const menuBtn = document.getElementById("menuBtn");
const sideBar = document.getElementById("sidebar");

const validateItems = () => {

}

menuBtn.onclick = function () { 
    sideBar.classList.toggle("active");
};

const user = localStorage.getItem('user')
  if (!user) window.location.href = '../Login/Login.html'

  function logout() {
    localStorage.removeItem('user')
    window.location.href = '../Login/Login.html'
  }

async function IDFind () {
    const Id_Items = document.getElementById('ID_Items').value
    if (!Id_Items.trim()) {
        alert('กรุณากรอก ID ของครุภัณฑ์')
        return
    }
    try {
        const response = await axios.get(`http://localhost:3000/items/${Id_Items}`)
        console.log(response.data)
    } catch (error) {
        console.error(error)
    }
}