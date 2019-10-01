<?php

include('../../services/conne.php');


$id = $_POST['idservico'];
$descri = $_POST['descri'];
$v = $_POST['valor'];


$sql = " UPDATE servico
        SET descri = '".$descri."',
        valor = '".$v."'
     
     
        WHERE idservico = ".$id."
        
";

if(mysqli_query($conecta, $sql)){
    $data = array("return" => true);
}else{
    $data = array("return" => mysqli_error($conecta));
}

echo json_encode($data);



?>