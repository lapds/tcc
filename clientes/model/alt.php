<?php

include('../../services/conne.php');


$id = $_POST['idcliente'];
$nome = $_POST['nome'];
$cid = $_POST['cidade'];
$num = $_POST['num_casa'];
$rua= $_POST['rua'];
$tel= $_POST['telefone'];

$sql = " UPDATE cliente
        SET nome = '".$nome."',
        cidade = '".$cid."',
        rua = '".$rua."',
        num_casa = '".$num."',
            telefone= '".$tel."'
         
        WHERE idcliente = ".$id."
        
";

if(mysqli_query($conecta, $sql)){
    $data = array("return" => true);
}else{
    $data = array("return" => mysqli_error($conecta));
}

echo json_encode($data);



?>