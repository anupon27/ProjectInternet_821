
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

    function registerUser() {
      let email = document.getElementById("regEmail").value;
      let password = document.getElementById("regPassword").value;

      if(email && password) {
        localStorage.setItem("userEmail", email);
        localStorage.setItem("userPassword", password);
        alert("Sucess to login! Pls join with us");
        showLogin();
      } else {
        alert("กรุณากรอกข้อมูลให้ครบถ้วน");
      }
    }