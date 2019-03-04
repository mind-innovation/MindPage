'use strict';

$("#enviar").click(function(){
    let user = $("#user").val();
    let email = $("#email").val();
    let message = $("#message").val();

    
    console.log(user);
    console.log(email);
    console.log(message);
    //console.log("clic al boton enviar");
    
    let parametros = new FormData();
    parametros.append('user',user);
    parametros.append('email',email);
    parametros.append('message',message);

        //console.log(datos);
    let ruta = 'http://localhost:81/MindMean/';
    $.ajax({
        url: ruta + 'ajax/send.php',
        method: 'post',
        data: parametros,
        cahe: false,
        contentType: false,
        processData: false,
        beforeSend: function() {
            // setting a timeout
            $("#response").html("Espere por favor....");
        },
        success:function(respuesta){
            console.log(respuesta);
            if(respuesta == '1'){
                $("#response").html("");
                Swal.fire({
                    position: 'center',
                    type: 'error',
                    title: 'Oops...',
                   text: 'Sorry, something went wrong. Please try again later.',
                    showConfirmButton: false,
                    timer: 1800
                  })
            }else if (respuesta == '2') {
                $("#response").html("");
                Swal.fire({
                    position: 'center',
                    type: 'success',
                    title: '¡OK!',
                   text: 'Message sent! Thanks for contacting us.',
                    showConfirmButton: false,
                    timer: 1800
                  })
            }else{
                $("#response").html("");
                Swal.fire({
                    position: 'center',
                    type: 'error',
                    title: 'Oops...',
                   text: 'Invalid email address, message ignored.',
                    showConfirmButton: false,
                    timer: 1800
                  })
            }
        }
    })

   
})