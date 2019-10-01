$(document).ready(function () {

    $('.btn-edit').click(function (e) {

        e.preventDefault()

        //alert("CLICOUUUUUUUUUUUUU")

        $('tbody').empty();

        var dados = 'idpeca='
        dados += $(this).attr('id')

        $('#centralizar_essa_bagaça').empty()

        $.ajax({
            type: 'post',
            dataType: 'json',
            data: dados,
            url: 'pecas/model/findpecas.php',
            success: function (dados) {
                for (var i = 0; dados.length > i; i++) {
                    let editar = `
                    <form class="mt-3" id="edit-contato">
                    <div class="row">
                    <div class="col-3"></div>

                    <div class="col-6">
                    <h1> Alterar informações da peça</h1>
                   <form  id="edit">
                       <div class="row mt-2">
                    <div class="col-12 col-md-12">
                      <label for="exampleInputEmail1">Nome:</label>
                      <input type="text" class="form-control" name="nome" value="` + dados[i].nome + `" aria-describedby="emailHelp" placeholder="Nome">
                    </div>
                    </div>

                    <div class="row">
                    <div class="col-6 col-md-6">
                      <label for="exampleInputEmail1">Valor de Compra:</label>
                      <input type="text" class="form-control" name="valor_compra" value="` + dados[i].valor_compra + `" aria-describedby="emailHelp" placeholder="Valor de Compra">
                    </div>
                    <div class="col-6 col-md-6">
                      <label for="exampleInputPassword1">Valor de Venda:</label>
                      <input type="tex" class="form-control" name="valor_venda" value="` + dados[i].valor_venda+ `"  placeholder="Cidade">
                    </div>
                    </div>
                    
                           
                           
                           <input type="hidden" value="` + dados[i].idpeca + `" name="idpeca">

                           <div class="row mt-3">
                           <div class="col-2">
                           <button class="btn btn-primary btn-alter"><i></i> Salvar</button>
                           </div>
                           <div class="col-2">
                           <button class="btn btn-primary btn-can cancelar-peca"><i></i> Cancelar</button>
                           </div>
                           </div>
                           
                           </form>
                           </div>
                           </div>
                     `

                     $('#centralizar_essa_bagaça').append(editar)
                    }
                   $('body').append('<script src="pecas/controller/alt.js"></script>');
                   $('body').append('<script src="js/functioncancel.js"></script>');
            }

        })
    })
})



