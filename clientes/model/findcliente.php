<?php

include('../../services/conne.php');

$sqllist = mysqli_query($conecta, "SELECT * FROM cliente WHERE idcliente = ".$_POST['idcliente']."");    
while($list = mysqli_fetch_assoc($sqllist)){
    $listcli[] = array_map('utf8_encode' , $list); 
}    
echo json_encode($listcli);
?>