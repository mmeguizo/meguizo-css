document.addEventListener('DOMContentLoaded', function() {
  const wrapper = document.querySelector('.wrapper');
  const loginLink = document.querySelector('.login-link');
  const registerLink = document.querySelector('.register-link');
  const btnPopup = document.querySelector('.btnLogin-popup');
  const iconClose = document.querySelector('.icon-close');

  registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
  });

  loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
  });

  btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
  });

  iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
  });

  function isClickInsidePopup(event) {
    return (
      wrapper.contains(event.target) ||
      btnPopup.contains(event.target)
    );
  }

  document.addEventListener('click', function(event) {
    if (!isClickInsidePopup(event)) {
      wrapper.classList.remove('active-popup');
    }
  });
});
