<?php

include('../../services/conne.php');


$sql = "DELETE FROM PAGAMENTO WHERE idpagamento = ".$_POST['idpagamento']."";

if(mysqli_query($conecta, $sql)){
    $data = array("return" => true);
}else{
    $data = array("return" => mysqli_error($conecta));
}

echo json_encode($data);

?>