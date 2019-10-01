$(document).ready(function () {

  $.ajax({
    type: 'POST',
    dataType: 'json',
    url: "veiculo/model/select_cli.php",
    async: true,

    success: function (dados) {

      for (var i = 0; dados.length > i; i++) {
        let danoninho = `
                
                <option name="nomecli" value=" ` + dados[i].idcliente + `">` + dados[i].nome+` </option>
                
                `
        $('#escolhercliente').append(danoninho);
      }

    }

  })

})

