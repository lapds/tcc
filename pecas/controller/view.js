$(document).ready(function() {
    
    
    $('.btn-view').click(function(e) {

        e.preventDefault()

        $('.modal-title').empty()
        $('.modal-body').empty()
        $('.modal-footer').empty()


        var dados = 'idpeca='
        dados += $(this).attr('id')

        $.ajax({
            type: 'post',
            dataType: 'json',
            data: dados,
            url: 'pecas/model/view.php',
            success: function(dados) {
                for (var list = 0; dados.length > list; list++) {
                    let titulo = dados[list].nome
                    let pecas = `
                        <p>ID: ` + dados[list].idpeca + `</p>
                        <p>NOME: `  + dados[list].nome +  ` </p>
                        <p>VALOR COMPRA: `+ dados[list].valor_compra +` </p>
                        <p>VALOR VENDA: `+ dados[list].valor_venda +` </p>
                        
                    `
                    $('.modal-title').append(titulo)
                    $('.modal-body').append(pecas)
                }
                $('#modal-dados').modal('show')
            }

        })
    })
})
