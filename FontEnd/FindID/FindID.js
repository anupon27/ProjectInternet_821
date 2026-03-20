const api = 'http://localhost:8000'

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
  
async function IDFind() {
    const Id_Items = document.getElementById('ID_Items').value
    const errEl   = document.getElementById('err-items')
    const result  = document.getElementById('result')

    errEl.textContent = ''
    result.style.display = 'none'

    if (!Id_Items.trim()) {
        errEl.textContent = 'กรุณากรอก ID ของครุภัณฑ์'
        return
    }
    try {
        const response = await axios.get(`${api}/ItemsType/${encodeURIComponent(Id_Items)}`)
        const data = response.data
        document.getElementById('res-name').textContent = data.DuraticlesName
        result.style.display = 'block'

    } catch (error) {
        errEl.textContent = 'ไม่พบ ID ครุภัณฑ์นี้'
    }
}