import { clientServices } from "../service/client-service.js";

const formulario = document.querySelector('[data-form]');

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const nombre = document.querySelector('[data-nombre]').value;
    const email = document.querySelector('[data-email]').value; 
    const asunto = document.querySelector('[data-asunto]').value;
    const mensaje = document.querySelector('[data-mensaje]').value;
    clientServices
        .crearCliente(nombre, email, asunto, mensaje)
        .then(() => {
            window.location.href = "/screens/registro_completado.html";
        })
        .catch( (err) => console.log(err));
});

