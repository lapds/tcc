<?php

include('../../services/conne.php');

$id= $_POST['idveiculo'];
$marca = $_POST['marca'];
$mod = $_POST['modelo'];
$ano=$_POST['ano'];
$tipo= $_POST['tipo'];
$motor= $_POST['motor'];
$placa= $_POST['placa'];
$cli = $_POST['escolhercliente'];


$sql = " UPDATE veiculo
        SET modelo= '".$mod."',
         marca= '".$marca."',
        ano= '".$ano."',
        tipo = '".$tipo."',
        motor = '".$motor."',
            placa= '".$placa."',
            cliente_idcliente= '".$cli."'

         
        WHERE idveiculo = ".$id."
        
";

if(mysqli_query($conecta, $sql)){
    $data = array("return" => true);
}else{
    $data = array("return" => mysqli_error($conecta));
}

echo json_encode($data);



?>