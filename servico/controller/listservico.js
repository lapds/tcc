$(document).ready(function (){

    $('tbody').empty();
    $.ajax({
        type: 'post',
        dataType: 'json',
        url: 'servico/model/listservico.php',
        success: function(dados) {
            for (var list = 0; dados.length > list; list++) {
                let servico = `
                <tr>
                    <td class="text-center">` + dados[list].idservico + `</td>
                    <td class="text-center">` + dados[list].descri + `</td>
                    <td class="text-center">` + dados[list].valor + `</td>
                    <td class="text-center">
                        <button id="` + dados[list].idservico + `" class="btn btn-primary btn-sm btn-view" data-toggle="modal" data-target="#modal-dados"><i class="mdi mdi-eye mdi-18px"></i></button>
                        <button id="` + dados[list].idservico + `" class="btn btn-warning btn-sm btn-edit"><i class="mdi mdi-pencil mdi-18px"></i></button>
                        <button id="` + dados[list].idservico + `" class="btn btn-danger btn-sm btn-delete"><i class="mdi mdi-delete mdi-18px"></i></button>
                    </td>
                </tr>
                `
                $('tbody').append(servico)
            
            }
            $('body').append('<script src="servico/controller/edit.js"></script>')
            $('body').append('<script src="servico/controller/del.js"></script>')
            $('body').append('<script src="servico/controller/view.js"></script>')
            $('body').append('<script src="js/functioncancel.js"></script>')


        }
    })
});