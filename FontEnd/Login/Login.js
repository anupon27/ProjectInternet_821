
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


    