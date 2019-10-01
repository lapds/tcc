$(document).ready(function() {

    $(".btn-alter").click(function(e) {

        e.preventDefault();
        var url = "pecas/model/alt.php";
        var dados = $('#edit-contato').serialize();

        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: url,
            async: true,
            data: dados,
            success: function(dados) {
                if (dados.return == true) {
                    Swal.fire({
                        title: 'Mechanic Control',
                        text: 'Alteração efetuada com sucesso!',
                        type: 'success',
                        confirmButtonText: 'Feito!'
                    })
                   
                } else {
                    Swal.fire({
                        title: 'Mechanic Control',
                        text: dados.return,
                        type: 'error',
                        confirmButtonText: 'Tentar novamente...'
                    })
                  
                }
            }
        })

       
    })
})