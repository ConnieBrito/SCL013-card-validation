import validator from './validator.js';

/*Input Datos Tarjeta*/
const creditCardNumber = document.getElementById('creditCardNumber'); //obtiene input número de tarjeta de crédito
const sendButton = document.getElementById('sendButton'); //obtiene información al presionar el botón "Validar"
const respuestaUsuario = document.getElementById('mensaje-usuario'); //para poder enviar mensaje con resultado al usuario
//condicional para que luego de la validación envíe el mensaje al usuario de validación "Correcta o Incorrecta" según corresponda
const capturarInformacionUsuario = (event) => {
    event.preventDefault();
    if (validator.isValid(creditCardNumber.value)) {
        respuestaUsuario.innerText = `Su Tarjeta de Crédito ${validator.maskify(creditCardNumber.value)} es Válida ¡Gracias por su Compra!`;
    } else {
        respuestaUsuario.innerText = `Su Tarjeta de Crédito ${validator.maskify(creditCardNumber.value)} no es Válida Por favor, ingrese sus datos nuevamente`
    }

};

sendButton.addEventListener('click', capturarInformacionUsuario);