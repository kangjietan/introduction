const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const mobileSignUpButton = document.getElementById('mobileSignUp');
const mobileSignInButton = document.getElementById('mobileSignIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
  container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
  container.classList.remove('right-panel-active');
});

mobileSignUpButton.addEventListener('click', () => {
  container.classList.add('right-panel-active');
});

mobileSignInButton.addEventListener('click', () => {
  container.classList.remove('right-panel-active');
});