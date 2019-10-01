$(document).ready(function() {
    
    
    $('.btn-view').click(function(e) {

        e.preventDefault()

        $('.modal-title').empty()
        $('.modal-body').empty()
        $('.modal-footer').empty()


        var dados = 'idpagamento='
        dados += $(this).attr('id')

        $.ajax({
            type: 'post',
            dataType: 'json',
            data: dados,
            url: 'pagamento/model/view.php',
            success: function(dados) {
                for (var list = 0; dados.length > list; list++) {
                    let titulo = dados[list].nome
                    let pagamento = `
                        <p>ID: ` + dados[list].idpagamento + `</p>
                        <p>Forma de pagamento: `  + dados[list].descri +  ` </p>

                    `
                    $('.modal-title').append(titulo)
                    $('.modal-body').append(pagamento)
                }
                $('#modal-dados').modal('show')
            }

        })
    })
})
