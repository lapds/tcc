$(document).ready(function() {
    
    
    $('.btn-view').click(function(e) {

        e.preventDefault()

        $('.modal-title').empty()
        $('.modal-body').empty()
        $('.modal-footer').empty()


        var dados = 'idservico='
        dados += $(this).attr('id')

        $.ajax({
            type: 'post',
            dataType: 'json',
            data: dados,
            url: 'servico/model/view.php',
            success: function(dados) {
                for (var list = 0; dados.length > list; list++) {
                    let titulo = dados[list].nome
                    let servicos = `
                        <p>ID: ` + dados[list].idservico + `</p>
                        <p>NOME: `  + dados[list].descri +  ` </p>
                        <p>VALOR: `+ dados[list].valor +` </p>
                    
                    `
                    $('.modal-title').append(titulo)
                    $('.modal-body').append(servicos)
                }
                $('#modal-dados').modal('show')
            }

        })
    })
})
