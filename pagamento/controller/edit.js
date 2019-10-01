$(document).ready(function () {

    $('.btn-edit').click(function (e) {

        e.preventDefault()

        //alert("CLICOUUUUUUUUUUUUU")

        $('tbody').empty();

        var dados = 'idpagamento='
        dados += $(this).attr('id')

        $('#centralizar_essa_bagaça').empty()

        $.ajax({
            type: 'post',
            dataType: 'json',
            data: dados,
            url: 'pagamento/model/findpagamento.php',
            success: function (dados) {
                for (var i = 0; dados.length > i; i++) {
                    let editar = `
                    <form class="mt-3" id="editar">
                    <div class="row">
                    <div class="col-3"></div>

                    <div class="col-6">
                    <h1> Alterar informações de pagamento</h1>
                   <form  id="edit">
                       <div class="row mt-2">
                    <div class="col-12 col-md-12">
                      <label for="exampleInputEmail1">Forma de pagamento:</label>
                      <input type="text" class="form-control" name="descri" value="` + dados[i].descri + `" aria-describedby="emailHelp" >
                    </div>
                    </div>
                           
                           
                           <input type="hidden" value="` + dados[i].idpagamento + `" name="idpagamento">

                           <div class="row mt-3">
                           <div class="col-2">
                           <button class="btn btn-primary btn-alter-sal "><i></i> Salvar</button>
                           </div>
                           <div class="col-2">
                           <button class="btn btn-primary btn-can cancelar-pagamento"><i></i> Cancelar</button>
                           </div>
                           </div>
                           
                           </form>
                           </div>
                           </div>
                     `

                     $('#centralizar_essa_bagaça').append(editar)
                    }
                   $('body').append('<script src="pagamento/controller/alt.js"></script>');
                   $('body').append('<script src="js/functioncancel.js"></script>');
            }

        })
    })
})



