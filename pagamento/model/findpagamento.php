<?php

include('../../services/conne.php');

$sqllist = mysqli_query($conecta, "SELECT * FROM pagamento WHERE idpagamento = ".$_POST['idpagamento']."");    
while($list = mysqli_fetch_assoc($sqllist)){
    $listpag[] = array_map('utf8_encode' , $list); 
}    
echo json_encode($listpag);
?>