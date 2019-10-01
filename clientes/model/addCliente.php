<?php
include('../../services/conne.php');


$nome_cliente = $_POST['nome'];
$cidade = $_POST['cidade'];
$rua = $_POST['rua'];
$nume_casa = $_POST['nume_casa'];
$telefone = $_POST['telefone'];

if($nome_cliente == null){

  

}else{
$sql = "INSERT INTO cliente (nome, cidade, rua, num_casa, telefone) VALUES
        (
            '".$nome_cliente."',
            '".$cidade."',
            '".$rua."',
            '".$nume_casa."',
            '".$telefone."'
        )
        ";
}

// echo  $sql;

if(mysqli_query($conecta, $sql)){
    $data = array("return" => true);
}else{
    $data = mysqli_error($conecta);
}

echo json_encode($data);
?>