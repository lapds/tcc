<?php
include('../../services/conne.php');


$nome = $_POST['nome'];
$vc = $_POST['vc'];
$vv = $_POST['vv'];



$sql = "INSERT INTO  peca (nome, valor_compra, valor_venda)  VALUES
        (
            '".$nome."',
            '".$vc."',
            '".$vv."'
            
        )
        ";


// echo  $sql;

if(mysqli_query($conecta, $sql)){
    $data = array("return" => true);
}else{
    $data = mysqli_error($conecta);
}

echo json_encode($data);
?>