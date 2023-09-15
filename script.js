function MostrarLogin() {
  var login = document.getElementById("login-container");
  login.style.display = 'block'
}


  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      var login = document.getElementById("login-container");
      login.style.display = 'none';
    }
  });
  
