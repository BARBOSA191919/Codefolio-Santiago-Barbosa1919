// Contact Form Handler using EmailJS (v4 sendForm)
(function() {
  'use strict';

  document.addEventListener('DOMContentLoaded', function onReady() {
    const MAX_RETRIES = 50; // ~5s
    let attempts = 0;
    let cdnInjected = false;
    let initialized = false;
    let formBound = false;

    function injectEmailJsCdn() {
      if (cdnInjected) return;
      cdnInjected = true;
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
      script.async = true;
      script.onload = function() {
        tryInit(true);
      };
      script.onerror = function() {
        console.error('No se pudo cargar el CDN de EmailJS.');
      };
      document.head.appendChild(script);
    }

    function tryInit(forceAttempt = false) {
      if (!initialized && window.emailjs && typeof window.emailjs.init === 'function') {
        initialized = true; // evita inicializar dos veces
        emailjs.init('AgjEA-I48OajuwXRh'); // Tu Public Key
        bindForm();
        return;
      }
      if (!cdnInjected) injectEmailJsCdn();

      attempts += 1;
      if (forceAttempt || attempts <= MAX_RETRIES) {
        setTimeout(tryInit, 100);
      } else if (!initialized) {
        console.error('EmailJS no se cargó. Verifica el script CDN en el layout.');
      }
    }

    tryInit();

    function bindForm() {
      if (formBound) return; // evita doble listener
      const form = document.getElementById('form');
      const btn = document.getElementById('button');
      if (!form) return;
      formBound = true;

      form.addEventListener('submit', function(e) {
        e.preventDefault();

        if (btn) btn.value = 'Enviando...';

        // Sincroniza nombres que algunas plantillas requieren
        const fromName = form.querySelector('[name="from_name"]')?.value || '';
        const replyTo = form.querySelector('[name="reply_to"]')?.value || '';
        setHidden(form, 'name', fromName);
        setHidden(form, 'email', replyTo);
        setHidden(form, 'to_email', 'sbarbosarivas@gmail.com');

        const serviceID = 'service_ilg72hl'; // o 'default_service'
        const templateID = 'template_m3x3wr8';

        emailjs.sendForm(serviceID, templateID, this)
          .then(() => {
            if (btn) btn.value = 'Enviar Mensaje';
            showMessage('¡Mensaje enviado con éxito! Te responderé pronto.', 'success');
            form.reset();
          }, (err) => {
            if (btn) btn.value = 'Enviar Mensaje';
            console.error('EmailJS sendForm error:', err);
            showMessage('No se pudo enviar. Revisa los nombres de variables en tu plantilla (name/from_name, email/reply_to, message, title, to_email).', 'error');
          });
      });
    }

    function setHidden(form, name, value) {
      let input = form.querySelector(`input[name="${name}"]`);
      if (!input) {
        input = document.createElement('input');
        input.type = 'hidden';
        input.name = name;
        form.appendChild(input);
      }
      input.value = value;
    }

    function showMessage(message, type) {
      const messageDiv = document.createElement('div');
      messageDiv.className = `form-message ${type}`;
      messageDiv.innerHTML = `
        <i class=\"fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}\"></i>
        <span>${message}</span>
      `;

      const formCard = document.querySelector('.form-card');
      formCard?.appendChild(messageDiv);

      setTimeout(() => {
        messageDiv.remove();
      }, 5000);
    }
  });
})();
