<?php

include('../../services/conne.php');

$sql = mysqli_query($conecta, "SELECT * FROM cliente WHERE idcliente = ".$_POST['idcliente']." ");    
while($list = mysqli_fetch_assoc($sql)){
    $clientes[] = array_map('utf8_encode', $list); 
}    
echo json_encode($clientes);
?>