$(document).ready(function() {
    
    
    $('.btn-view').click(function(e) {

        e.preventDefault()

        $('.modal-title').empty()
        $('.modal-body').empty()
        $('.modal-footer').empty()


        var dados = 'idcliente='
        dados += $(this).attr('id')

        $.ajax({
            type: 'post',
            dataType: 'json',
            data: dados,
            url: 'clientes/model/view.php',
            success: function(dados) {
                for (var list = 0; dados.length > list; list++) {
                    let titulo = dados[list].nome
                    let clientes = `
                        <p>ID: ` + dados[list].idcliente + `</p>
                        <p>NOME: `  + dados[list].nome +  ` </p>
                        <p>CIDADE: `+ dados[list].cidade +` </p>
                        <p>RUA: `+ dados[list].rua +` </p>
                        <p>NÚMERO DA CASA : `+ dados[list].num_casa +` </p>
                        <p>TELEFONE: `+ dados[list].telefone +` </p>
                    `
                    $('.modal-title').append(titulo)
                    $('.modal-body').append(clientes)
                }
                $('#modal-dados').modal('show')
            }

        })
    })
})
