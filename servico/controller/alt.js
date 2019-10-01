$(document).ready(function() {

    $(".btn-alter").click(function(e) {

        e.preventDefault();
        var url = "servico/model/alt.php";
        var dados = $('#editar').serialize();

        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: url,
            async: true,
            data: dados,
            success: function(dados) {
                if (dados.return == true) {
                    Swal.fire({
                        title: 'Mechanic Controll!',
                        text: 'Alteração efetuada com sucesso!',
                        type: 'success',
                        confirmButtonText: 'OK!'
                    })
                   
                } else {
                    Swal.fire({
                        title:'Mechanic Controll!',
                        text: dados.return,
                        type: 'error',
                        confirmButtonText: 'Tentar novamente...'
                    })
                  
                }
            }
        })

       
    })
})