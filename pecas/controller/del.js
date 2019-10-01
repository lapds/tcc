$(document).ready(function() {

    $('.btn-delete').click(function(e) {
   
        e.preventDefault()

        var dados = 'idpeca='
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
                    url: 'pecas/model/del.php',
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
                                url: 'pecas/model/listapeca.php',
                                success: function(dados) {
                                    for (var list = 0; dados.length > list; list++) {
                                        let pecas = `
                                        <tr>
                                            <td class="text-center">` + dados[list].idpeca + `</td>
                                            <td class="text-center">` + dados[list].nome + `</td>
                                            <td class="text-center">` + dados[list].valor_compra + `</td>
                                            <td class="text-center">` + dados[list].valor_venda + `</td>
                                           
                                            <td class="text-center">
                                                <button id="` + dados[list].idpeca + `" class="btn btn-outline-primary btn-sm btn-view" data-toggle="modal" data-target="#modal-dados"><i class="mdi mdi-eye mdi-18px"></i></button>
                                                <button id="` + dados[list].idpeca + `" class="btn btn-outline-warning btn-sm btn-edit"><i class="mdi mdi-pencil mdi-18px"></i></button>
                                                <button id="` + dados[list].idpeca + `" class="btn btn-outline-danger btn-sm btn-delete"><i class="mdi mdi-delete mdi-18px"></i></button>
                                            </td>
                                        </tr>
                                            `
                                        $('tbody').append(pecas)
                                    }
                                    $('body').append('<script src="pecas/controller/view.js"></script>');
                                    $('body').append('<script src="pecas/controller/del.js"></script>');
                               
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