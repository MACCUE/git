 const idInput = document.getElementById('ID');
    idInput.type = 'text';        // Change input to show text
    idInput.value = 'type in correct ID';      // Put text inside input
    idInput.style.border = 'red'; // Make border red

    const passwordInput = document.getElementById('password');
    const toggleID = document.getElementById('togglePassword');
    const togglePassword = document.getElementById('togglePassword2');

    toggleID.onclick = function () {
      idInput.type = idInput.type === 'password' ? 'text' : 'password';
    };

    togglePassword.onclick = function () {
      passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
    };
    function goHome() {
  window.location.href = 'login.html';  // Back to login
}
// Login button click → go to dashboard
function loginUser() {
  const email = document.querySelector('input[type="email"]').value;
  const password = document.getElementById('password').value;
  
  // Simple check (change later for MySQL)
  if (email && password) {
    window.location.href = 'student-dashboard.html';  // Goes to your dashboard!
    return false;
  } else {
    document.getElementById('errorMsg').textContent = 'Please fill all fields';
    return false;
  }
}
