document.addEventListener('DOMContentLoaded', function() {

const wrapper  = document.querySelector('.wrapper');
const loginLink  = document.querySelector('.login-link');
const registerLink  = document.querySelector('.register-link');

const btnPopup = document.querySelector('.btnLogin-popup')
const iconClose = document.querySelector('.icon-close')

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
})
loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
})


btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
})
iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
})


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


console.log(wrapper);

});

/*



document.addEventListener('DOMContentLoaded', function() {
    const wrapper = document.querySelector('.wrapper');
    const formBoxLogin = document.querySelector('.form-box.login');
    const formBoxRegister = document.querySelector('.form-box.register');
    const closeButton = document.querySelector('.icon-close');
    const btnPopup = document.querySelector('.btnLogin-popup');
    const loginLink = document.querySelector('.login-link');
    const registerLink = document.querySelector('.register-link');
  
    function togglePopup() {
      wrapper.classList.toggle('active-popup');
    }
  
    function closePopup() {
      wrapper.classList.remove('active-popup');
    }
  
    function isClickInsidePopup(event) {
      return (
        formBoxLogin.contains(event.target) ||
        formBoxRegister.contains(event.target) ||
        btnPopup.contains(event.target)
      );
    }
  
    document.addEventListener('click', function(event) {
      if (!isClickInsidePopup(event)) {
        closePopup();
      }
    });
  
    closeButton.addEventListener('click', function() {
      closePopup();
    });
  
    btnPopup.addEventListener('click', function() {
      togglePopup();
    });
  
    loginLink.addEventListener('click', function(event) {
      event.preventDefault();
      formBoxRegister.style.transform = 'translateX(400px)';
      formBoxLogin.style.transform = 'translateX(0)';
    });
  
    registerLink.addEventListener('click', function(event) {
      event.preventDefault();
      formBoxLogin.style.transform = 'translateX(-400px)';
      formBoxRegister.style.transform = 'translateX(0)';
    });
  });
  




*/