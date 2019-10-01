$(document).ready(function () {
    $(".btn-add").click(function (e) {
      e.preventDefault();
      var url = "ordem/model/principal.php";
      var dados = $('#ord').serialize();
  
      $.ajax({
        type: 'POST',
        dataType: 'json',
        url: url,
        async: true,
        data: dados,
        success: function(dados) {
            if (dados.return == true) {
                Swal.fire({
                    title: 'Mechanic Control',
                    text: 'Cadastro efetuado com sucesso!',
                    type: 'success',
                    confirmButtonText: 'OK!'
                })
               
            } else {
                Swal.fire({
                    title: 'Mechanic Control',
                    text: dados.return,
                    type: 'error',
                    confirmButtonText: 'Tentar novamente...'
                })
              
            }
        }
    
    })
    $('centralizar_essa_bagaca').empty(ord);
  
    })
    
  })