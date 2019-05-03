<?php
	include "DbManage.php";
	$db =  new DbManage();	

	$name = $_GET['name']?$_GET['name']:'empty';
	$name = $_GET['phone']?$_GET['phone']:'empty';
	$name = $_GET['email']?$_GET['email']:'empty';
	$name = $_GET['msg']?$_GET['msg']:'empty';

	date_default_timezone_set('PRC');
	$dateTime = date('Y-m-d H:i:s');

	$sqlTxt = "INSERT INTO messages (name,phone,mail,msg,time) VALUES ('". $name ."','".$phone."','".$mail."','".$msg."','".$dateTime."')";
	//echo $sqlTxt;
	header('content-type:text/html;charset=uft-8');
    header('location:../index.html');
	$db->executeSqlTxt($sqlTxt);
?>