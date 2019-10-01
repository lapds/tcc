$(document).ready(function () {
    

    $('.btn-select').click(function(e){
        e.preventDefault()

    
      

        $.ajax({
            type: 'post',
            dataType: 'json',
            data: dados,
            url: 'ordem/model/serv.php',
            success: function (dados) {
        
        for (var list = 0; dados.length > list; list++) {
        let se = `
        
        <div class="form-group form-check">
        <input type="checkbox" class="form-check-input"  value="`+dados[list].idservico+`" name="serv" id="serv">
        <label class="form-check-label" name="servv" id="servv" for="exampleCheck1">`+dados[list].descri+`</label>
        </div>
        
        
        `
        $('#serv').append(se)
        }
        
        }
        })

    })
})
