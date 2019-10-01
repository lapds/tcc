<?php

include('../../services/conne.php');

$sql = mysqli_query($conecta, "SELECT * FROM pagamento WHERE idpagamento = ".$_POST['idpagamento']." ");    
while($list = mysqli_fetch_assoc($sql)){
    $pagamentos[] = array_map('utf8_encode', $list); 
}    
echo json_encode($pagamentos);
?>