// Contact Form Handler using EmailJS
(function() {
  'use strict';

  // Inicializar EmailJS
  emailjs.init("TU_USER_ID_AQUI");

  // Obtener el formulario
  const form = document.querySelector('.contact-form');
  
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Mostrar estado de carga
      const submitBtn = form.querySelector('.form-submit');
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
      submitBtn.disabled = true;
      
      // Obtener datos del formulario
      const formData = {
        name: form.querySelector('#name').value,
        email: form.querySelector('#email').value,
        message: form.querySelector('#message').value
      };
      
      // Enviar email usando EmailJS
      emailjs.send('TU_SERVICE_ID', 'TU_TEMPLATE_ID', {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'sbarbosarivas@gmail.com'
      })
      .then(function(response) {
        // Éxito
        showMessage('¡Mensaje enviado con éxito! Te responderé pronto.', 'success');
        form.reset();
      })
      .catch(function(error) {
        // Error
        showMessage('Hubo un error al enviar el mensaje. Inténtalo de nuevo.', 'error');
        console.error('EmailJS Error:', error);
      })
      .finally(function() {
        // Restaurar botón
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
      });
    });
  }
  
  // Función para mostrar mensajes
  function showMessage(message, type) {
    // Crear elemento de mensaje
    const messageDiv = document.createElement('div');
    messageDiv.className = `form-message ${type}`;
    messageDiv.innerHTML = `
      <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
      <span>${message}</span>
    `;
    
    // Insertar después del formulario
    const formCard = document.querySelector('.form-card');
    formCard.appendChild(messageDiv);
    
    // Remover después de 5 segundos
    setTimeout(() => {
      messageDiv.remove();
    }, 5000);
  }
})();
