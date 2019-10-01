<?php

include('../../services/conne.php');

$sqllist = mysqli_query($conecta, "SELECT * FROM peca ");    
while($list = mysqli_fetch_assoc($sqllist)){
    $listpeca[] = array_map('utf8_encode' , $list); 
}    
echo json_encode($listpeca);
?>