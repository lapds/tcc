$(document).ready(function () {

    $('.btn-edit').click(function (e) {

        e.preventDefault()

        //alert("CLICOUUUUUUUUUUUUU")

        $('tbody').empty();

        var dados = 'idservico='
        dados += $(this).attr('id')

        $('#centralizar_essa_bagaça').empty()

        $.ajax({
            type: 'post',
            dataType: 'json',
            data: dados,
            url: 'servico/model/findservico.php',
            success: function (dados) {
                for (var i = 0; dados.length > i; i++) {
                    let editar = `
                    <div class="row">
                  <div class="col-3"></div>
                  <div class="col-6">
                    <h1 class="o">Cadastro de Serviço</h1>
                     <form id="editar">
                    
                     <div class="form-group">
                       <label for="exampleInputEmail1">Descrição:</label>
                       <input type="text" class="form-control" name="descri" value ="` + dados[i].descri + `" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Descrição">
                      </div>
                     <div class="form-group">
                       <label for="exampleInputPassword1">Valor:</label>
                       <input type="tex" class="form-control" name="valor" value ="` + dados[i].valor + `" id="exampleInputPassword1" placeholder="Valor">
                     </div>
                
              
                  
                            
                            
                            <input type="hidden" value="` + dados[i].idservico+ `" name="idservico">
                            <button class="btn btn-warning btn-alter salvar-serv-alt"><i class="mdi mdi-content-save "></i> Salvar</button>
                            <button class="btn btn-danger btn-can cancelar-servico"><i class="mdi mdi-content-save "></i> Cancelar</button>
                        </form>
                        </div>
                     `

                     $('#centralizar_essa_bagaça').append(editar)
                    }
                   $('body').append('<script src="servico/controller/alt.js"></script>');
                   $('body').append('<script src="js/functioncancel.js"></script>');
            }

        })
    })
})



