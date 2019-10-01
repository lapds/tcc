$(document).ready(function() {
    
    
    $('.btn-view').click(function(e) {

        e.preventDefault()

        $('.modal-title').empty()
        $('.modal-body').empty()
        $('.modal-footer').empty()


        var dados = 'idveiculo='
        dados += $(this).attr('id')

        $.ajax({
            type: 'post',
            dataType: 'json',
            data: dados,
            url: 'veiculo/model/view.php',
            success: function(dados) {
                for (var list = 0; dados.length > list; list++) {
                    let titulo = dados[list].nome
                    let veiculos = `
                        <p>ID: ` + dados[list].idveiculo + `</p>
                        <p>MARCA: `  + dados[list].marca +  ` </p>
                        <p>ANO: `+ dados[list].ano +` </p>
                        <p>TIPO: `+ dados[list].tipo +` </p>
                        <p>MOTOR: `+ dados[list].motor +` </p>
                        <p>PLACA: `+ dados[list].placa +` </p>
                        <p>CLIENTE: `+ dados[list].nome +` </p>
                    `
                    $('.modal-title').append(titulo)
                    $('.modal-body').append(veiculos)
                }
                $('#modal-dados').modal('show')
            }

        })
        $('body').append('<script src="veiculo/controller/select_cli.js"></script>')
    })
})
