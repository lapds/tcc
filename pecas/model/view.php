<?php

include('../../services/conne.php');

$sql = mysqli_query($conecta, "SELECT * FROM peca WHERE idpeca = ".$_POST['idpeca']." ");    
while($list = mysqli_fetch_assoc($sql)){
    $pecas[] = array_map('utf8_encode', $list); 
}    
echo json_encode($pecas);
?>