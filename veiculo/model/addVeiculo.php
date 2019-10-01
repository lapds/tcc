<?php
include('../../services/conne.php');

$marca = $_POST['marca'];
$ano = $_POST['ano'];
$tipo = $_POST['tipo'];
$motor = $_POST['motor'];
$pla = $_POST['placa'];
$cli = $_POST['escolhercliente'];



$sql = "INSERT INTO veiculo (marca, ano, tipo, motor, placa, cliente_idcliente) VALUES
        (
            '".$marca."',
            '".$ano."',
           '".$tipo."',
           '".$motor."',
           '".$pla."',
           '".$cli."'
           
    )
     ";

     echo $sql;
    
if(mysqli_query($conecta, $sql)){
    $data = array("return" => true);
}else{
   $data = mysqli_error($conecta);
}

echo json_encode($data);
?>

  