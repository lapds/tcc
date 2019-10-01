$('.cancel').click(function () {
    $('#centralizar_essa_bagaça').empty()

    let menuCliente = `
   
    <div class="row">
        <div class=" offset-md-4 col-md-4">
            <a class="btn btn-outline-dark btn-block text-center cadastroclientes">
                <i class="mdi mdi-plus mdi-48px"></i><br>
                Cadastrar Clientes
            </a>
        </div>
    </div>
    <div class="row mt-3">
        <div class="offset-md-4 col-md-4">
            <a class="btn btn-outline-dark btn-block text-center listacliente">
                <i class="mdi mdi-account mdi-48px"></i> <br>
                Clientes
            </a>
        </div>
    </div>
    <div class="row mt-3">
        <div class="offset-md-4 col-md-4">
            <a href="mae.html" class="btn btn-outline-dark btn-block text-center ">
                <i class="mdi mdi-application-export mdi-48px"></i> <br>
                Voltar para o menu
            </a>
        </div>
    </div>
    `
    $('#centralizar_essa_bagaça').append(menuCliente);


    $('.cadastroclientes').click(function () {
        $('#centralizar_essa_bagaça').load('clientes/view/cadastroclientes.html');
    });

    $('.listacliente').click(function () {
        $('#centralizar_essa_bagaça').load('clientes/view/listacliente.html');
    });

});


// Veiculo
$('.cancelveiculo').click(function () {
    $('#centralizar_essa_bagaça').empty()

    let menuVeiculo = `
    <div class="row">
        <div class=" offset-md-4 col-md-4">
            <a  class="btn btn-outline-dark btn-block text-center cadastroveiculo">
                <i class="mdi mdi-plus mdi-48px"></i><br>
                Cadastrar Veículo
            </a>
        </div>
    </div>
    <br>
    <div class="row">
        <div class="offset-md-4 col-md-4">
            <a class="btn btn-outline-dark btn-block text-center listaveiculo">
                <i class="mdi mdi-car-multiple mdi-48px"></i> <br>
                Veículos
            </a>
        </div>
    </div>
    <br>
    <div class="row">
        <div class="offset-md-4 col-md-4">
            <a href="mae.html" class="btn btn-outline-dark btn-block text-center ">
                <i class="mdi mdi-application-export mdi-48px"></i> <br>
                Voltar para o menu
            </a>
        </div>

    </div>`
    $('#centralizar_essa_bagaça').append(menuVeiculo);




    $('.cadastroveiculo').click(function () {
        $('#centralizar_essa_bagaça').load('veiculo/view/cadastroveiculo.html');


    })
    $('.listaveiculo').click(function () {
        $('#centralizar_essa_bagaça').load('veiculo/view/listaveiculo.html');


    })
})

//peças
$('.cancelpecas').click(function () {
    $('#centralizar_essa_bagaça').empty()

    let menuPecas = `
    <div class="row">
      <div class=" offset-md-4 col-md-4">
          <a  class="btn btn-outline-dark btn-block text-center cadastropecas">
              <i class="mdi mdi-plus mdi-48px"></i><br>
              Cadastrar Peças
          </a>
      </div>
  </div>
  <br>
  <div class="row">
      <div class="offset-md-4 col-md-4">
          <a  class="btn btn-outline-dark btn-block text-center listapecas">
              <i class="mdi mdi-cogs mdi-48px"></i> <br>
              Peças
          </a>
      </div>
  </div>
  <br>
  <div class="row">
      <div class="offset-md-4 col-md-4">
          <a href="mae.html" class="btn btn-outline-dark btn-block text-center ">
              <i class="mdi mdi-application-export mdi-48px"></i> <br>
              Voltar para o menu
          </a>
      </div>

  </div>`
    $('#centralizar_essa_bagaça').append(menuPecas);


    $('.cadastropecas').click(function () {
        $('#centralizar_essa_bagaça').load('pecas/view/cadastropecas.html');


    })
    $('.listapecas').click(function () {
        $('#centralizar_essa_bagaça').load('pecas/view/listapecas.html');


    })
})

//Formas de pagamento

$('.cancelpag').click(function () {
    $('#centralizar_essa_bagaça').empty()

    let menuPag = `
    <div class="row">
      <div class=" offset-md-4 col-md-4">
          <a  class="btn btn-outline-dark btn-block text-center cadastropag">
              <i class="mdi mdi-plus mdi-48px"></i><br>
              Cadastrar Forma de Pagamento
          </a>
      </div>
  </div>
  <br>
  <div class="row">
      <div class="offset-md-4 col-md-4">
          <a  class="btn btn-outline-dark btn-block text-center listapag">
              <i class="mdi mdi-coin mdi-48px"></i> <br>
              Formas de Pagamento
          </a>
      </div>
  </div>
  <br>
  <div class="row">
      <div class="offset-md-4 col-md-4">
          <a href="mae.html" class="btn btn-outline-dark btn-block text-center ">
              <i class="mdi mdi-application-export mdi-48px"></i> <br>
              Voltar para o menu
          </a>
      </div>

  </div>`
    $('#centralizar_essa_bagaça').append(menuPag);


    $('.cadastropag').click(function () {
        $('#centralizar_essa_bagaça').load('pagamento/view/cadastropag.html');


    })
    $('.listapag').click(function () {
        $('#centralizar_essa_bagaça').load('pagamento/view/listapag.html');


    })
})

//Serviços
$('.cancelservicos').click(function () {
    $('#centralizar_essa_bagaça').empty()

    let menuServicos = `
    <div class="row">
    <div class=" offset-md-4 col-md-4">
        <a  class="btn btn-outline-dark btn-block text-center cadastroservicos">
            <i class="mdi mdi-plus mdi-48px"></i><br>
            Cadastrar Serviços
        </a>
    </div>
    </div>
    <br>
    <div class="row">
    <div class="offset-md-4 col-md-4">
        <a  class="btn btn-outline-dark btn-block text-center listaservico">
            <i class="mdi mdi-wrench-outline mdi-48px"></i> <br>
            Serviços
        </a>
    </div>
    </div>
    <br>
    <div class="row">
    <div class="offset-md-4 col-md-4">
        <a href="mae.html" class="btn btn-outline-dark btn-block text-center ">
            <i class="mdi mdi-application-export mdi-48px"></i> <br>
            Voltar para o menu
        </a>
    </div>
    
    </div>`
    $('#centralizar_essa_bagaça').append(menuServicos);



    $('.cadastroservicos').click(function () {
        $('#centralizar_essa_bagaça').load('servico/view/cadastroservicos.html');


    })
    $('.listaservico').click(function () {
        $('#centralizar_essa_bagaça').load('servico/view/listaservico.html');


    })
})







$(document).ready(function () {
    //cancelar alterar
    $('.return-list').click(function (e) {
        e.preventDefault()
        $('#centralizar_essa_bagaça').load('clientes/view/listacliente.html');

    });
})

$(document).ready(function () {
    //cancelar alterar
    $('.cancelar-veiculo').click(function (e) {
        e.preventDefault()
        $('#centralizar_essa_bagaça').load('veiculo/view/listaveiculo.html');

    });
})

$(document).ready(function () {
    //cancelar alterar
    $('.cancelar-peca').click(function (e) {
        e.preventDefault()
        $('#centralizar_essa_bagaça').load('pecas/view/listapecas.html');

    });
})

$(document).ready(function () {
    //cancelar alterar
    $('.cancelar-servico').click(function (e) {
        e.preventDefault()
        $('#centralizar_essa_bagaça').load('servico/view/listaservico.html');

    });
})


//botão novo 

$(document).ready(function () {
    
    $('.novo').click(function (e) {
        e.preventDefault()
        $('#centralizar_essa_bagaça').load('clientes/view/cadastroclientes.html');

    });
})

$(document).ready(function () {
    
    $('.novo-veiculo').click(function (e) {
        e.preventDefault()
        $('#centralizar_essa_bagaça').load('veiculo/view/cadastroveiculo.html');

    });
})

$(document).ready(function () {
    
    $('.novo-peca').click(function (e) {
        e.preventDefault()
        $('#centralizar_essa_bagaça').load('pecas/view/cadastropecas.html');

    });
})

$(document).ready(function () {
    
    $('.novo-pag').click(function (e) {
        e.preventDefault()
        $('#centralizar_essa_bagaça').load('pagamento/view/cadastropag.html');

    });
})

$(document).ready(function () {
    
    $('.novo-serv').click(function (e) {
        e.preventDefault()
        $('#centralizar_essa_bagaça').load('servico/view/cadastroservicos.html');

    });
})




//quando clicar no salvar
$(document).ready(function () {
    
    $('.salvar').click(function (e) {
        e.preventDefault()
        $('#centralizar_essa_bagaça').load('clientes/view/listacliente.html');

    });
})

$(document).ready(function () {
    
    $('.btn-addv').click(function (e) {
        e.preventDefault()
        $('#centralizar_essa_bagaça').load('veiculo/view/listaveiculo.html');

    });
})

$(document).ready(function () {
    
    $('.salvar-peca').click(function (e) {
        e.preventDefault()
        $('#centralizar_essa_bagaça').load('pecas/view/listapecas.html');

    });
})

$(document).ready(function () {
    
    $('.salvar-pag').click(function (e) {
        e.preventDefault()
        $('#centralizar_essa_bagaça').load('pagamento/view/listapag.html');

    });
})

$(document).ready(function () {
    
    $('.salvar-serv').click(function (e) {
        e.preventDefault()
        $('#centralizar_essa_bagaça').load('servico/view/listaservico.html');

    });
})




//salvar alterar

$(document).ready(function () {
    
    $('.salvar-cli').click(function (e) {
        e.preventDefault()
        $('#centralizar_essa_bagaça').load('clientes/view/listacliente.html');

    });
})

$(document).ready(function () {
    
    $('.salvar-veiculo-alt').click(function (e) {
        e.preventDefault()
        $('#centralizar_essa_bagaça').load('veiculo/view/listaveiculo.html');

    });
})

$(document).ready(function () {
    
    $('.salvar-peca-alt').click(function (e) {
        e.preventDefault()
        $('#centralizar_essa_bagaça').load('pecas/view/listapecas.html');

    });
})

$(document).ready(function () {
    
    $('.salvar-serv-alt').click(function (e) {
        e.preventDefault()
        $('#centralizar_essa_bagaça').load('servico/view/listaservico.html');

    });
})

$(document).ready(function () {
    
    $('.btn-alter-sal').click(function (e) {
        e.preventDefault()
        $('#centralizar_essa_bagaça').load('pagamento/view/listapag.html');

    });
})
