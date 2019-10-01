$(document).ready(function() {

    $(".btn-alter").click(function(e) {

        e.preventDefault();
        var url = "clientes/model/alt.php";
        var dados = $('#edit').serialize();

        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: url,
            async: true,
            data: dados,
            success: function(dados) {
                if (dados.return == true) {
                    Swal.fire({
                        title: 'Mechanic Control!',
                        text: 'Alteração efetuada com sucesso!',
                        type: 'success',
                        confirmButtonText: 'Feito!'
                    })
                   
                } else {
                    Swal.fire({
                        title: 'Mechanic Controll!',
                        text: dados.return,
                        type: 'error',
                        cancelButtonText: 'Tentar novamente...'
                    })
                  
                }
              
            }
        })
   
       
    })
})