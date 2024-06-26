document.querySelector('.login-form').addEventListener('submit', function(event) {
      event.preventDefault();
      
      const emailInput = event.target.elements.email;
      const passwordInput = event.target.elements.password;

      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();

      if (email === '' || password === '') {
        alert('All form fields must be filled in');
        return;
      }

      const formData = {
        email: email,
        password: password
      };

      console.log(formData);

      event.target.reset();
    });
