$(document).ready(function () {

    $('.btn-edit').click(function (e) {

        e.preventDefault()

     

        $('tbody').empty();

        var dados = 'idveiculo='
        dados += $(this).attr('id')

        $('#centralizar_essa_bagaça').empty()

        $.ajax({
            type: 'post',
            dataType: 'json',
            data: dados,
            url: 'veiculo/model/findveiculo.php',
            success: function (dados) {
                for (var i = 0; dados.length > i; i++) {
                    let editar = `
                    <div class="row">
  <div class="col-3"></div>

  <div class="col-6">
        <h1 >Cadastro de Veículo</h1>
     
      <form id="alterveiculo">
             <div class="form-group">  
  <div class="row">
          <div class="col-6 col-md-6">
         <label class="my-1 mr-2" >Marca</label>
         <select class="custom-select my-1 mr-sm-2" id="marca" name="marca">
         <option name="nomecli"  >`+dados[i].marca+`</option>
         <option value="Fiat">Fiat</option>
         <option value="Volkswagen">Volkswagen</option>
         <option value="Toyota">Toyota</option>
         <option value="Ford">Ford</option>
         <option value="Nissan">Nissan</option>
         <option value="Honda">Honda</option>
         <option value="Hyundai">Hyundai</option>
         <option value="Chevrolet">Chevrolet</option>
       </select>
       </div> 
       <div class=" col-6 col-md-6">
          <label>Modelo</label>
          <input type="text" class="form-control" id="modelo" value="` + dados[i].modelo + `" placeholder="Modelo" name="modelo">
       </div>
</div>
       <div class="row">
          <div class="col-6 col-md-6">
           <label>Ano do Carro</label>
          <input type="text" class="form-control" id="ano" value="` + dados[i].ano + `" placeholder="Ano do Carro" name="ano">
         </div>
         <div class="col-6 col-md-6">
            <label class="my-1 mr-2" >Tipo Combustível</label>
            <select class="custom-select my-1 mr-sm-2" id="tipo" name="tipo">
            <option name="nomecli" >`+dados[i].tipo+`</option>
            <option value="Gasolina">Gasolina</option>
            <option value="Etanol">Etanol</option>
            <option value="Flex">Flex</option>
        </select>
            </div>
       </div>
    
       <div class="row">
       
         <div class="col-6 col-md-6">
       
             <label>Tipo de Motor</label>
             <input type="text" class="form-control" id="motor" value="` + dados[i].motor + `" placeholder="Tipo de Motor" name="motor">
         </div>
         <div class="col-6 col-md-6">
         <label class="my-1 mr-2" >Cliente</label>
         <select class="custom-select cliselect my-1 mr-sm-2" id="escolhercliente" name="escolhercliente">
         <option name="nomecli" value="`+dados[i].cliente_idcliente+`" >`+dados[i].nome+`</option>
         <div id="escolhercliente"></div>
           
         </select>
       </div>
         </div>
         <div class="row">
         <div class="col-6 col-md-6">
          <label>Placa</label>
          <input type="text" class="form-control" id="placa"  value="` + dados[i].placa + `"  placeholder="Placa" name="placa">
         </div>
        
       
       </div>
             
       
                            
                            <input type="hidden" value="` + dados[i].idveiculo + `" name="idveiculo">
                            <button class="btn btn-outline-warning btn-alter salvar-veiculo-alt"><i class="mdi mdi-content-save "></i> Salvar</button>
                            <button class="btn btn-outline-danger btn-can cancelar-veiculo"><i class="mdi mdi-content-save "></i> Cancelar</button>
                        </form>
                        </div>
                        </div>
                     `

                     $('#centralizar_essa_bagaça').append(editar)
                   

                    }
                   $('body').append('<script src="veiculo/controller/alt.js"></script>');
                   $('body').append(' <script src="veiculo/controller/select_cli.js"></script>');
                   $('body').append('<script src="js/functioncancel.js"></script>');
                 
            }

        })
    })
})



