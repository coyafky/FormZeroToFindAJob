document
  .getElementById('registration-form')
  .addEventListener('submit', function (event) {
    event.preventDefault();
    validateForm();
  });

function validateForm() {
  const username = document.getElementById('username');
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const confirmPassword = document.getElementById('confirm-password');

  resetErrors();

  if (!validateUsername(username)) return;
  if (!validateEmail(email)) return;
  if (!validatePassword(password)) return;
  if (!validateConfirmPassword(confirmPassword, password)) return;

  alert('注册成功！');
}

function validateUsername(username) {
  if (username.validity.valueMissing) {
    setError(username, '用户名不能为空');
    return false;
  }
  if (username.validity.patternMismatch) {
    setError(username, '用户名必须为 4 到 12 位的字母或数字');
    return false;
  }
  return true;
}

function validateEmail(email) {
  if (email.validity.valueMissing) {
    setError(email, '电子邮件不能为空');
    return false;
  }
  if (email.validity.typeMismatch) {
    setError(email, '请输入有效的电子邮件地址');
    return false;
  }
  return true;
}

function validatePassword(password) {
  if (password.validity.valueMissing) {
    setError(password, '密码不能为空');
    return false;
  }
  if (password.validity.tooShort) {
    setError(password, '密码必须至少 8 个字符');
    return false;
  }
  return true;
}

function validateConfirmPassword(confirmPassword, password) {
  if (confirmPassword.validity.valueMissing) {
    setError(confirmPassword, '确认密码不能为空');
    return false;
  }
  if (confirmPassword.value !== password.value) {
    setError(confirmPassword, '密码不匹配');
    return false;
  }
  return true;
}

function setError(input, message) {
  const errorElement = input.nextElementSibling;
  errorElement.textContent = message;
  errorElement.style.display = 'block';
  input.setCustomValidity(message);
}

function resetErrors() {
  const errors = document.querySelectorAll('.error');
  errors.forEach((error) => {
    error.textContent = '';
    error.style.display = 'none';
  });
  const inputs = document.querySelectorAll('input');
  inputs.forEach((input) => {
    input.setCustomValidity('');
  });
}
