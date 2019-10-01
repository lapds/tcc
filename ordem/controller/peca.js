$(document).ready(function () {
    

    $('.btn-select').click(function(e){
        e.preventDefault()

    
    
        $.ajax({
            type: 'post',
            dataType: 'json',
            data: dados,
            url: 'ordem/model/peca.php',
            success: function (dados) {
        
        for (var list = 0; dados.length > list; list++) {
        let pe = `
        
        <div class="form-group form-check">
        <input type="checkbox" class="form-check-input"  value="`+dados[list].idpeca+`" name="pe" id="pe">
        <label class="form-check-label" name="pec" id="pec" for="exampleCheck1">`+dados[list].nome+`</label>
        </div>
        
        
        `
        $('#pe').append(pe)
        }
        
        }
        })
    })
})
       