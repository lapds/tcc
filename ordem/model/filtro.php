<?php

include('../../services/conne.php');

$no = $_POST['nome'];

$sqllist = mysqli_query($conecta, "SELECT * FROM cliente  WHERE nome LIKE '%$no%'");    



while($lists = mysqli_fetch_assoc($sqllist)){
   $listv[] = array_map('utf8_encode' , $lists); 
}  

echo json_encode($listv);
?>