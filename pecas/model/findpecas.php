<?php

include('../../services/conne.php');

$sqllist = mysqli_query($conecta, "SELECT * FROM peca WHERE idpeca = ".$_POST['idpeca']."");    
while($list = mysqli_fetch_assoc($sqllist)){
    $listcli[] = array_map('utf8_encode' , $list); 
}    
echo json_encode($listcli);
?>