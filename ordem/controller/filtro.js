$(document).ready(function () {
  $(".btn-filtro").click(function (e) {
    e.preventDefault();

    var dados = $('#ordem').serialize();

    $('.modal-body').empty()
    $('.modal-footer').empty()
    
    $.ajax({
      type: 'POST',
      dataType: 'json',
      url: "ordem/model/filtro.php",

      data: dados,
      success: function (dados) {
        for (var list = 0; dados.length > list; list++) {

           let ordem = `
                   <button id="`+ dados[list].idcliente + `" class=" btn btn-primary btn-block btn-select">` + dados[list].idcliente + ` - ` + dados[list].nome + `</button>
                
              `
          $('.modal-body').append(ordem)
        }
        $('body').append('<script src="ordem/controller/nome.js"></script>')
        $('#modal-dados').modal('show')
      }
    })
  })
})
