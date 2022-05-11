$("#formulario1").validate({
    rules: {
        "txtEmail": {
            required: true,
            email: true
        },
        "txtContrasena": {
            required: true,
            minlength: 8
        },
        "txtRepetirContrasena": {
            required: true,
            equalTo: '#id_txtContrasena'
        }
    }, // --> Fin de reglas
    messages: {
        "txtEmail": {
            required: 'Ingrese email!',
            email: 'No es un correo'
        },
        "txtContrasena": {
            required: 'Ingrese Password!!!',
            minlength: 'Caracteres minimo 8'
        },
        "txtRepetirContrasena": {
            required: 'Repita el Password!!',
            equalTo: ' Deben ser iguales!!!!'
        }
    } //-->Fin de mensajes
 
});
