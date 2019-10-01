$(document).ready(function() {

    $('.btn-delete').click(function(e) {
   
        e.preventDefault()

        var dados = 'idcliente='
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
                    url: 'clientes/model/del.php',
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
                                url: 'clientes/model/listacliente.php',
                                success: function(dados) {
                                    for (var list = 0; dados.length > list; list++) {
                                        let cliente = `
                                        <tr>
                                            <td class="text-left">` + dados[list].idcliente + `</td>
                                            <td class="text-left">` + dados[list].nome + `</td>
                                            <td class="text-left">` + dados[list].telefone + `</td>

                                            <td class="text-left">
                                                <button id="` + dados[list].idcliente + `" class="btn btn-primary btn-sm btn-view" data-toggle="modal" data-target="#modal-dados"><i class="mdi mdi-eye mdi-18px"></i></button>
                                                <button id="` + dados[list].idcliente + `" class="btn btn-warning btn-sm btn-edit"><i class="mdi mdi-pencil mdi-18px"></i></button>
                                                <button id="` + dados[list].idcliente + `" class="btn btn-danger btn-sm btn-delete"><i class="mdi mdi-delete mdi-18px"></i></button>
                                            </td>
                                        </tr>
                                            `
                                        $('tbody').append(cliente)
                                    }
                                    $('body').append('<script src="clientes/controller/view.js"></script>');
                                    $('body').append('<script src="clientes/controller/del.js"></script>');
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