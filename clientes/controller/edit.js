$(document).ready(function () {

    $('.btn-edit').click(function (e) {

        e.preventDefault()

        //alert("CLICOUUUUUUUUUUUUU")

        $('tbody').empty();

        var dados = 'idcliente='
        dados += $(this).attr('id')

        $('#centralizar_essa_bagaça').empty()

        $.ajax({
            type: 'post',
            dataType: 'json',
            data: dados,
            url: 'clientes/model/findcliente.php',
            success: function (dados) {
                for (var i = 0; dados.length > i; i++) {
                    let editar = `
                    <div class="row">
                    <div class="col-3"></div>
                  
                    <div class="col-6">
                  <h1> Alterar Dados do Cliente</h1>
                     <form  id="edit">
                     <div class="row mt-2">
                     <div class="col-12 col-md-12">
                       <label for="exampleInputEmail1">Nome:</label>
                       <input type="text" class="form-control" name="nome" value="` + dados[i].nome + `" aria-describedby="emailHelp" placeholder="Nome">
                     </div>
                    </div>

                   <div class="row">
                     <div class="col-6 col-md-6">
                       <label for="exampleInputPassword1">Rua:</label>
                       <input type="tex" class="form-control" name="rua" value="` + dados[i].rua + `" placeholder="rua">
                     </div>
                     <div class="col-6 col-md-6">
                       <label for="exampleInputEmail1">Nº Casa:</label>
                       <input type="number" class="form-control" name="num_casa" value="` + dados[i].num_casa + `" aria-describedby="emailHelp" placeholder="N°Casa">
                     </div>
                     </div>

                     <div class="row">
                     <div class="col-6 col-md-6">
                       <label for="exampleInputPassword1">Cidade:</label>
                       <input type="tex" class="form-control" name="cidade" value="` + dados[i].cidade + `"  placeholder="Cidade">
                     </div>
                     <div class="col-6 col-md-6">
                        <label for="exampleInputEmail1">Telefone:</label>
                        <input type="text" class="form-control" name="telefone" value="` + dados[i].telefone + `" aria-describedby="emailHelp" placeholder="Telefone">
                     </div>
                    </div>
                            
                            <input type="hidden" value="` + dados[i].idcliente + `" name="idcliente">
                          
                            <div class="row mt-3">
                                <div class="col-2">
                                  <button class="btn btn-alter btn-warning btn-lg salvar-cli "> Salvar </button>
                                </div>
                                  <div class="col-2">
                                  <button class="btn btn-can btn-danger btn-lg cancel ">Cancelar</button>
                                </div>
                              </div>
                           
                    
                            </form>
                            </div>
                            </div>
                     
                     `

                     $('#centralizar_essa_bagaça').append(editar)
                    }
                   $('body').append('<script src="clientes/controller/alt.js"></script>');
                  $('body').append('<script src="js/functioncancel.js"></script>');
            }

        })
    })
})



