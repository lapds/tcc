<?php
include('../../services/conne.php');


$descris = $_POST['descri'];



$sql = "INSERT INTO pagamento (descri) VALUES

     (
        
         '".$descris."'
          
   
       )
    
       ";




 if(mysqli_query($conecta, $sql)){
 
    $data = array("return" => true);
}else{
          $data = mysqli_error($conecta);
}

   echo json_encode($data);
?>