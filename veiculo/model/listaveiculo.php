<?php

include('../../services/conne.php');


$sqllist = mysqli_query($conecta, "SELECT v.idveiculo, v.modelo, v.marca, v.ano, v.tipo, v.motor, v.placa, c.nome, c.idcliente, v.cliente_idcliente
FROM veiculo v, cliente c
WHERE c.idcliente = v.cliente_idcliente
ORDER BY c.nome ASC");    

while($lists = mysqli_fetch_assoc($sqllist)){
    $listv[] = array_map('utf8_encode' , $lists); 
}  

echo json_encode($listv);
?>