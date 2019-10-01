<?php
ini_set('display_erros', true);
error_reporting(E_ALL);

$local = "localhost";
$banco = "bancotcc3";
$usuario = "root";
$senha = "usbw";

if($conecta = mysqli_connect($local, $usuario, $senha, $banco)){
 
}else{
    echo "Erro: ".mysqli_connect_error();
}

?>