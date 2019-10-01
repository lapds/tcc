<?php
include('../../services/conne.php');


$serv[] = $_POST['serv'];
// $date = $_POST['date'];
// $status = $_POST['status'];
// $veiculo = $_POST['modve']; 
// $pecas[] = $_POST['pe']; 
// $pag[]= $_POST['pag']; 

 $result= count($serv);
 echo $result;
 
// $sql = "INSERT INTO ordem_servico(data,status,peca_idpeca,pagamento_idpagamento,servico_idservico,veiculo_idveiuclo) VALUES
//         (
//             '".variaveis."',
            
//         )
//         ";
// }

// // echo  $sql;

// if(mysqli_query($conecta, $sql)){
//     $datas = array("return" => true);
// }else{
//     $datas = mysqli_error($conecta);
// }

// echo json_encode($datas);
?>