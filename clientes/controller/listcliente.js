$(document).ready(function() {
    $('tbody').empty();
    $.ajax({
        type: 'post',
        dataType: 'json',
        url: 'clientes/model/listacliente.php',
        success: function(dados) {
            for (var list = 0; dados.length > list; list++) {
                let cliente = `
                <tr>
                    <td class="text-center">` + dados[list].idcliente + `</td>
                    <td class="text-left">` + dados[list].nome + `</td>
                    <td class="text-left">` + dados[list].telefone + `</td>
                  
                    <td >
                        <button id="` + dados[list].idcliente + `" class="btn btn-primary btn-sm btn-view" data-toggle="modal" data-target="#modal-dados"><i class="mdi mdi-eye mdi-18px"></i></button>
                        <button id="` + dados[list].idcliente + `" class="btn btn-warning btn-sm btn-edit"><i class="mdi mdi-pencil mdi-18px"></i></button>
                        <button id="` + dados[list].idcliente + `" class="btn btn-danger btn-sm btn-delete"><i class="mdi mdi-delete mdi-18px"></i></button>
                    </td>
                </tr>
                `
                $('tbody').append(cliente)
            
            }
            $('body').append('<script src="clientes/controller/view.js"></script>')
            $('body').append('<script src="clientes/controller/edit.js"></script>')
            $('body').append('<script src="clientes/controller/del.js"></script>')
            $('body').append('<script src="js/functioncancel.js"></script>')
       


        }
    })
})
        
       