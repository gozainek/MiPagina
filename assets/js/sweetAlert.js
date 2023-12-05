window.addEventListener("load", function() {
    document.getElementById("boton").addEventListener("click", function(event){
        event.preventDefault();
    Swal.fire({ 

        title: "Tu mensaje a sido enviado!",
        text: "A la brevedad te responderemos!",
        icon: "success",
        confirmButtonText: 'OK'
    
    });
});
});





