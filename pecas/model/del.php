<?php

include('../../services/conne.php');


$sql = "DELETE FROM peca WHERE idpeca = ".$_POST['idpeca']."";

if(mysqli_query($conecta, $sql)){
    $data = array("return" => true);
}else{
    $data = array("return" => mysqli_error($conecta));
}

echo json_encode($data);

?>