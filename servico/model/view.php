<?php

include('../../services/conne.php');

$sql = mysqli_query($conecta, "SELECT * FROM servico WHERE idservico = ".$_POST['idservico']." ");    
while($list = mysqli_fetch_assoc($sql)){
    $servicos[] = array_map('utf8_encode', $list); 
}    
echo json_encode($servicos);
?>