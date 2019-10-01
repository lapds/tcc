<?php
include('../../services/conne.php');


$descr = $_POST['desc'];
$valor = $_POST['valor'];



  


$sql = "INSERT INTO servico (descri, valor) VALUES
        (
            '".$descr."',
            '".$valor."'
          
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