<?php

	require "link.php";
//判断用户是否存在
//$iphone=$_POST["iphone"];
	$sql="select * ".
	 "from jiuxianwang.user where iphone='13767490475' ";
	 $result=mysql_query($sql,$conn);
	
	 if(mysql_fetch_array($result)){
	 	echo 1;
	 }else{
	 	echo 0;
	 }






?>