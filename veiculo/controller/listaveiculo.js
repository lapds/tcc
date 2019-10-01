$(document).ready(function() {
    $('tbody').empty();
    $.ajax({
        type: 'post',
        dataType: 'json',
        url: 'veiculo/model/listaveiculo.php',
        success: function(dados) {
            for (var list = 0; dados.length > list; list++) {
                let cliente = `
                <tr>
                    <td class="text-left">` + dados[list].idveiculo + `</td>
                    <td class="text-left">` + dados[list].nome+ `</td>
                    <td class="text-left">` + dados[list].modelo+ `</td>
                    <td class="text-left">` + dados[list].marca + `</td>
                    <td class="text-left">` + dados[list].ano + `</td>
                    <td class="text-left">` + dados[list].motor + `</td>
                    <td class="text-left">` + dados[list].tipo + `</td>
                    <td class="text-left">` + dados[list].placa + `</td>
                    
                    
                  
                    <td class="text-left">
                        <button id="` + dados[list].idveiculo + `" class="btn btn-primary btn-sm btn-view" data-toggle="modal" data-target="#modal-dados"><i class="mdi mdi-eye mdi-18px"></i></button>
                        <button id="` + dados[list].idveiculo + `" class="btn btn-warning btn-sm btn-edit"><i class="mdi mdi-pencil mdi-18px"></i></button>
                        <button id="` + dados[list].idveiculo + `" class="btn btn-danger btn-sm btn-delete"><i class="mdi mdi-delete mdi-18px"></i></button>
                    </td>
                </tr>
                `
                $('tbody').append(cliente)
            
            }
            $('body').append('<script src="veiculo/controller/edit.js"></script>')
            $('body').append('<script src="veiculo/controller/del.js"></script>')
            $('body').append('<script src="veiculo/controller/view.js"></script>')
            $('body').append('<script src="js/functioncancel.js"></script>')

        }
    })
})
        
       