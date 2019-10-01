$(document).ready(function(){
  $(".btn-logi").click(function(e){

e.preventDefault();
let usuario = $('#usuario').val();
let senha = $('#senha').val();
if (usuario == 'tcc' && senha == 'tcc123' ){
    let url = "mae.html";
    $(location).attr('href', url);

} else{
  Swal.fire({
    title: 'Mechanic Control',
    text: "Usuario e/ou senha incorretos...",
    type: 'error',
    confirmButtonText: 'Tente Novamente'
})
}

  })





})