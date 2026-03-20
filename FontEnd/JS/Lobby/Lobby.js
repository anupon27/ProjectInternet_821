  const user = localStorage.getItem('user')
  if (!user) window.location.href = '../../Html/Login/Login.html'

  function logout() {
    localStorage.removeItem('user')
    window.location.href = '../../Html/Login/Login.html'
  }