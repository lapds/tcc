$(document).ready(function () {
    

    $('.btn-select').click(function(e){
        e.preventDefault()

    
      
        $.ajax({
            type: 'post',
            dataType: 'json',
            data: dados,
            url: 'ordem/model/nome.php',
            success: function (dados) {
        
        for (var list = 0; dados.length > list; list++) {
        let no = `
      
        <option name="modve" value=" ` + dados[list].idveiculo + `">` + dados[list].modelo+` </option>
        
        `
        $('#escolherveiculo').append(no)
        }
     
    }
   
})
})
})

