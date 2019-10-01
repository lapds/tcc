$(document).ready(function() {
    $('tbody').empty();
    $.ajax({
        type: 'post',
        dataType: 'json',
        url: 'pecas/model/listapeca.php',
        success: function(dados) {
            for (var list = 0; dados.length > list; list++) {
                let peca = `
                <tr>
                    <td class="text-center">` + dados[list].idpeca + `</td>
                    <td class="text-center">` + dados[list].nome + `</td>
                    <td class="text-center">` + dados[list].valor_compra + `</td>
                    <td class="text-center">` + dados[list].valor_venda + `</td>
                    <td class="text-center">
                        <button id="` + dados[list].idpeca + `" class="btn btn-primary btn-sm btn-view" data-toggle="modal" data-target="#modal-dados"><i class="mdi mdi-eye mdi-18px"></i></button>
                        <button id="` + dados[list].idpeca + `" class="btn btn-warning btn-sm btn-edit"><i class="mdi mdi-pencil mdi-18px"></i></button>
                        <button id="` + dados[list].idpeca + `" class="btn btn-danger btn-sm btn-delete"><i class="mdi mdi-delete mdi-18px"></i></button>
                    </td>
                </tr>
                `
                $('tbody').append(peca)
            
            }
            $('body').append('<script src="pecas/controller/edit.js"></script>')
            $('body').append('<script src="pecas/controller/del.js"></script>')
            $('body').append('<script src="pecas/controller/view.js"></script>')
            $('body').append('<script src="js/functioncancel.js"></script>')

            
        }
    })
})
        