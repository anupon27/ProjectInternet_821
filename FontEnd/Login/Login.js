const API = 'http://localhost:8000'

    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");
    const toggleBtns = document.querySelectorAll(".toggle-btn");

    function showLogin() {
      loginForm.classList.add("active");
      registerForm.classList.remove("active");
      toggleBtns[0].classList.add("active");
      toggleBtns[1].classList.remove("active");
    }

    function showRegister() {
      registerForm.classList.add("active");
      loginForm.classList.remove("active");
      toggleBtns[1].classList.add("active");
      toggleBtns[0].classList.remove("active");
    }

//--
    
function setError(id, msg) {
  const el = document.getElementById('err-' + id)
  if (el) el.textContent = msg
}
 
function clearErrors(ids) {
  ids.forEach(id => setError(id, ''))
}

//--


function validateLogin(User, Password) {
  let valid = true
  clearErrors(['loginUser', 'loginPassword'])
  if (!User.trim()) { setError('loginUser', 'กรุณากรอกชื่อผู้ใช้'); valid = false }
  if (!Password.trim()) { setError('loginPassword', 'กรุณากรอกรหัสผ่าน'); valid = false }
  return valid
}
 
function validateRegister(data) {
  let valid = true
  clearErrors(['regFirstname', 'regLastname', 'regEmail', 'regUsername', 'regAGE', 'regPassword'])
 
  if (!data.Fristname.trim()) { setError('regFirstname', 'กรุณากรอกชื่อจริง'); valid = false }
  if (!data.Lastname.trim()) { setError('regLastname', 'กรุณากรอกนามสกุล'); valid = false }
  if (!data.Email.trim()) {setError('regEmail', 'กรุณากรอกอีเมล'); valid = false} 
  if (!data.User.trim()) { setError('regUsername', 'กรุณากรอกชื่อผู้ใช้'); valid = false }
  if (!data.Age || isNaN(data.Age) || data.Age <= 0) { setError('regAGE', 'กรุณากรอกอายุให้ถูกต้อง'); valid = false }
  if (!data.Password.trim()) {
    setError('regPassword', 'กรุณากรอกรหัสผ่าน'); valid = false
  } 
  return valid
}

//--

async function loginUser() {
  const User = document.getElementById('loginUser').value
  const Password = document.getElementById('loginPassword').value
 
  if (!validateLogin(User, Password)) return
 
  try {
    const res = await axios.post(`${API}/Accounts/login`, { User, Password })
    alert(res.data.message)
  } catch (error) {
    const msg = error.response?.data?.message || 'เกิดข้อผิดพลาด'
    setError('loginPassword', msg)
  }
}
 
//--

async function registerUser() {
  const data = {
    Fristname: document.getElementById('regFirstname').value,
    Lastname:  document.getElementById('regLastname').value,
    Email:     document.getElementById('regEmail').value,
    User:      document.getElementById('regUsername').value,
    Age:       Number(document.getElementById('regAGE').value),
    Password:  document.getElementById('regPassword').value,
  }
 
  if (!validateRegister(data)) return
 
  try {
    const res = await axios.post(`${API}/Accounts`, data)
    alert(res.data.message)
    showLogin()
  } catch (error) {
    const backendErrors = error.response?.data?.errors /////พี่จะมาแก้ ตรงนี้ให้มันแสดง error จาก backend ให้ส่งมาเป็น ข้อความเดียวกันหมดเลย ไม่ต้องแยกเป็น array เว้ยยย
    if (backendErrors) {
      setError('regPassword', backendErrors.join(' | '))
    } else {
      setError('regPassword', error.response?.data?.message || 'เกิดข้อผิดพลาด')
    }
  }
}

    