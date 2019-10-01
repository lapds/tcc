 $(document).ready(function () {


    $('.btn-select').click(function (e) {
        e.preventDefault()


        $('#ordem').empty()

        var dados = 'idcliente='
        dados += $(this).attr('id')
        $.ajax({
            type: 'post',
            dataType: 'json',
            data: dados,
            async:false,
            url: 'ordem/model/cli.php',
            success: function (dados) {

                for (var list = 0; dados.length > list; list++) {
                    let novinho = `
                    
<form id="ord">
<div class="form-group">
                
                    <div class="row">
      <div class=" col-6 col-md-6">
      <p name="nome"> <h5>Nome do cliente:</h5> `+ dados[list].nome + ` </p>
      </div>
<div class=" col-6 col-md-6">
      <label class="my-1 mr-2" ><h5>Veículos:</h5></label>
      <select class="custom-select cliselect my-1 mr-sm-2" id="escolherveiculo" name="escolherveiculo">
          <option name="modve" value="">Escolher veículo</option>
          <div id="escolherveiculo"></div>
        
      </select>
      </div>
      </div>
      <div class="row">
      <div class=" col-6 col-md-6">
      <p> <h5>Serviços:</h5> </p>
    <div id="serv"></div>
    </div>
 <div class=" col-6 col-md-6">
    <p> <h5>Peças:</h5> </p>
    <div id="pe"></div>
    </div>
</div>
<div class="row">
<div class=" col-6 col-md-6">
    <p> <h5>Pagamento:</h5> </p>
    <div id="pag"></div>
    </div>
    </div>
    <div class="row">
    <div class=" col-6 col-md-6">
    <label class="my-1 mr-2" ><h5>Data:</h5></label>
    <input type="date" class="form-control" name="date" id="date" >
    </div>
    <div class=" col-6 col-md-6">
    <label class="my-1 mr-2" ><h5>Status:</h5></label>
    <select class="form-control" nome="status" id="status">
    <option >Escolher Status</option>
      <option value="aberta">Aberta</option>
      <option value="fechada">Fechada</option>
     
    </select>
    </div>
    </div>
    <div class="form-group">
    <div class="row">
        <div class="col-6 col-md-2">
          <button class="btn btn-add btn-warning btn-lg "> Salvar </button>
        </div>
          <div class="col-6 col-md-2">
          <button class="btn btn-can btn-danger btn-lg cancel ">Cancelar</button>
        </div>
      </div>
      </div>
      </div>
      </div>




        `
                    $('#ordem').append(novinho)
                }
                $('body').append('<script src="ordem/controller/salvar.js"></script>')

            }
        })

        $.ajax({
            type: 'post',
            dataType: 'json',
            data: dados,
            async:false,
            url: 'ordem/model/nome.php',
            success: function (dados) {

                for (var list = 0; dados.length > list; list++) {
                    let no = `
  
    <option name="modve" value=" ` + dados[list].idveiculo + `">` + dados[list].modelo + ` </option>
    
    `
                    $('#escolherveiculo').append(no)
                }

            }

        })
        $.ajax({
            type: 'post',
            dataType: 'json',
            data: dados,
            async:false,
            url: 'ordem/model/serv.php',
            success: function (dados) {

                for (var list = 0; dados.length > list; list++) {
                    let se = `

<div class="form-group form-check">
<input type="checkbox" class="form-check-input"  value="`+ dados[list].idservico + `" name="serv[]" id="serv">
<label class="form-check-label" name="servv" id="servv" for="exampleCheck1">`+ dados[list].descri + `</label>
</div>


`
                    $('#serv').append(se)
                }

            }
        })
        $.ajax({
            type: 'post',
            dataType: 'json',
            data: dados,
            async:false,
            url: 'ordem/model/peca.php',
            success: function (dados) {

                for (var list = 0; dados.length > list; list++) {
                    let pe = `

<div class="form-group form-check">
<input type="checkbox" class="form-check-input"  value="`+ dados[list].idpeca + `" name="pe[]" id="pe">
<label class="form-check-label" name="pec" id="pec" for="exampleCheck1">`+ dados[list].nome + `</label>
</div>


`
                    $('#pe').append(pe)
                }

            }
        })
        $.ajax({
            type: 'post',
            dataType: 'json',
            data: dados,
            async:false,
            url: 'ordem/model/pag.php',
            success: function (dados) {

                for (var list = 0; dados.length > list; list++) {
                    let pa = `

<div class="form-group form-check">
<input type="checkbox" class="form-check-input"  value="`+ dados[list].idpagamento + `" name="pa[]" id="pa">
<label class="form-check-label" name="pag" id="pag" for="exampleCheck1">`+ dados[list].descri + `</label>
</div>


`
                    $('#pag').append(pa)
                }
              

            }
        })

    })

 })



