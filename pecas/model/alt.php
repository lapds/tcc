<?php

include('../../services/conne.php');


$id = $_POST['idpeca'];
$nome = $_POST['nome'];
$vc = $_POST['valor_compra'];
$vv = $_POST['valor_venda'];

$sql = " UPDATE peca
        SET nome = '".$nome."',
        valor_compra = '".$vc."',
        valor_venda = '".$vv."'
     
        WHERE idpeca = ".$id."
        
";

if(mysqli_query($conecta, $sql)){
    $data = array("return" => true);
}else{
    $data = array("return" => mysqli_error($conecta));
}

echo json_encode($data);



?>