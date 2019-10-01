$(document).ready(function () {
    

    $('.btn-select').click(function(e){
        e.preventDefault()

    
        $.ajax({
            type: 'post',
            dataType: 'json',
            data: dados,
            url: 'ordem/model/pag.php',
            success: function (dados) {
        
        for (var list = 0; dados.length > list; list++) {
        let pa = `
        
        <div class="form-group form-check">
        <input type="checkbox" class="form-check-input"  value="`+dados[list].idpagamento+`" name="pa" id="pa">
        <label class="form-check-label" name="pag" id="pag" for="exampleCheck1">`+dados[list].descri+`</label>
        </div>
        
        
        `
        $('#pag').append(pa)
        }
        
        }
        })
        
        
        
        })
        
            })
        