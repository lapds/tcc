<?php

include('../../services/conne.php');

$sqllist = mysqli_query($conecta, "SELECT * FROM  cliente c , veiculo v  WHERE idcliente = ".$_POST['idcliente']." AND v.cliente_idcliente = c.idcliente");    

while($list = mysqli_fetch_assoc($sqllist)){
    $listv[] = array_map('utf8_encode' , $list); 
}    
echo json_encode($listv);
?>