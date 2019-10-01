<?php

include('../../services/conne.php');



$sqllist = mysqli_query($conecta, "SELECT * FROM cliente WHERE idcliente = ".$_POST['idcliente']."");    



while($lists = mysqli_fetch_assoc($sqllist)){
   $listv[] = array_map('utf8_encode' , $lists); 
}  

echo json_encode($listv);
?>