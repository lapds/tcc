$(document).ready(function() {

    $('.btn-delete').click(function(e) {
   
        e.preventDefault()

        var dados = 'idveiculo='
        dados += $(this).attr('id')

        Swal.fire({
            title: 'Mechanic Control',
            text: 'Você tem certeza que deseja excluir o registro?',
            type: 'warning',
            showCancelButton: true,
            cancelButtonText: 'Desistir da exclusão',
            confirmButtonText: 'Confirmar a exclusão'
        }).then((result) => {
            if (result.value) {
                $.ajax({
                    type: 'post',
                    dataType: 'json',
                    data: dados,
                    url: 'veiculo/model/del.php',
                    success: function(dados) {
                        if (dados.return == true) {
                            Swal.fire({
                                title: 'Mechanic Control!',
                                text: 'Exclusão efetuada com sucesso!',
                                type: 'success',
                                confirmButtonText: 'Feito!'
                            })

                            $('tbody').empty()
                            $.ajax({
                                type: 'post',
                                dataType: 'json',
                                url: 'veiculo/model/listaveiculo.php',
                                success: function(dados) {
                                    for (var list = 0; dados.length > list; list++) {
                                        let veiculo = `
                                        <tr>
                                            <td class="left">` + dados[list].idveiculo + `</td>
                                            <td class="left">` + dados[list].nome + `</td>
                                            <td class="left">` + dados[list].marca + `</td>
                                            <td class="left">` + dados[list].ano + `</td>
                                            <td class="left">` + dados[list].motor + `</td>
                                            <td class="left">` + dados[list].tipo + `</td>
                                            <td class="left">` + dados[list].placa + `</td>
                                          
                                           
                                            <td class="text-left">
                                                <button id="` + dados[list].idveiculo + `" class="btn btn-outline-primary btn-sm btn-view" data-toggle="modal" data-target="#modal-dados"><i class="mdi mdi-eye mdi-18px"></i></button>
                                                <button id="` + dados[list].idveiculo + `" class="btn btn-outline-warning btn-sm btn-edit"><i class="mdi mdi-pencil mdi-18px"></i></button>
                                                <button id="` + dados[list].idveiculo + `" class="btn btn-outline-danger btn-sm btn-delete"><i class="mdi mdi-delete mdi-18px"></i></button>
                                            </td>
                                        </tr>
                                            `
                                        $('tbody').append(veiculo)
                                    }
                                    $('body').append('<script src="veiculo/controller/view.js"></script>');
                                    $('body').append('<script src="veiculo/controller/del.js"></script>');
                                }
                            })

                        } else {
                            Swal.fire({
                                title: 'Mechanic Control!',
                                text: 'Exclusão não pode ser efetuada!',
                                type: 'error',
                                confirmButtonText: 'Tentar novamente...'
                            })
                        }
                    }
                })
            }
        })
    })
})