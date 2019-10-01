<?php

include('../../services/conne.php');

$sqllist = mysqli_query($conecta, "SELECT * FROM servico ");    
while($list = mysqli_fetch_assoc($sqllist)){
    $listservico[] = array_map('utf8_encode' , $list); 
}    
echo json_encode($listservico);
?>