<?php
	require "link.php";
	$table=$_POST['table'];
	
	$sql="select * ".
	 "from {$table}";
	 $result=mysql_query($sql,$conn);
	 if(!$result){
	 	die('查询失败'.mysql_error());
	 }
	 $arr;
	 $n=0;
	 while($rows=mysql_fetch_array($result,MYSQL_ASSOC)){
	 	  $arr=$rows;
		 $arr1[$n++]=$arr;
	 }
	 
	 echo json_encode($arr1);
?>