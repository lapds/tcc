$(document).ready(function() {
    $('tbody').empty();
    $.ajax({
        type: 'post',
        dataType: 'json',
        url: 'pagamento/model/listapag.php',
        success: function(dados) {
            for (var list = 0; dados.length > list; list++) {
                let pagamento = `
                <tr>
                    <td class="text-center">` + dados[list].idpagamento + `</td>
                    <td class="text-center">` + dados[list].descri+ `</td>
                  
                  
                    <td>
                    <button id="` + dados[list].idpagamento + `" class="btn btn-primary btn-sm btn-view" data-toggle="modal" data-target="#modal-dados"><i class="mdi mdi-eye mdi-18px"></i></button>
                    <button id="` + dados[list].idpagamento + `" class="btn btn-warning btn-sm btn-edit"><i class="mdi mdi-pencil mdi-18px"></i></button>
                    <button id="` + dados[list].idpagamento + `" class="btn btn-danger btn-sm btn-delete"><i class="mdi mdi-delete mdi-18px"></i></button>
                </td>
                </tr>
                `
                $('tbody').append(pagamento)
            
            }
            $('body').append('<script src="pagamento/controller/view.js"></script>')
            $('body').append('<script src="pagamento/controller/edit.js"></script>')
            $('body').append('<script src="pagamento/controller/del.js"></script>')
            $('body').append('<script src="js/functioncancel.js"></script>')


        }
    })
})
        
       