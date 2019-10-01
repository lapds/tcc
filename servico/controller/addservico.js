$(document).ready(function () {
    $(".btn-add").click(function (e) {
      e.preventDefault();
      var url = "servico/model/addservico.php";
      var dados = $('#addServico').serialize();
  
      $.ajax({
        type: 'POST',
        dataType: 'json',
        url: url,
        async: true,
        data: dados,
        success: function (dados) {
          if(dados.return == true){
            Swal.fire({
            title: 'Mechanic Control',
            text: 'Cadastro realizado com sucesso!',
            type: 'success',
            confirmButtonText: 'Feito!'
  
            })
          } else{
            Swal.fire({
              title: 'Mechanic Control',
              text: dados.return,
              type: 'error',
              confirmButtonText: 'Tente Novamente'
          })
  
        }
        $('#addServico input!').val("")
      }
      })
  
    })
    
  })