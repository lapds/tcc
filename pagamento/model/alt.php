<?php

include('../../services/conne.php');


$id = $_POST['idpagamento'];
$descri = $_POST['descri'];


$sql = " UPDATE pagamento
        SET descri = '".$descri."'
         
        WHERE idpagamento = ".$id."
        
";

if(mysqli_query($conecta, $sql)){
    $data = array("return" => true);
}else{
    $data = array("return" => mysqli_error($conecta));
}

echo json_encode($data);



?>