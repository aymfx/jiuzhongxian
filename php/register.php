<?php
	require "link.php";
	
	//获取用户数据
	$iphone=$_POST["iphone"];
	$password=$_POST["password"];
	$email=$_POST["email"];
	$flag=true;
	//判断用户是否存在
	$sql="select * ".
	 "from jiuxianwang.user";
	 $result=mysql_query($sql,$conn);
	 if(!$result){
	 	die('查询失败'.mysql_error());
	 }
	 while($rows=mysql_fetch_array($result,MYSQL_ASSOC)){
	 	if($rows['iphone']==$iphone){
	 		  $flag=false;
			echo "手机号已经存在";
	 	}
	 }
	 if($flag){
	 	//插入用户注册的信息
	 	$sql="insert into jiuxianwang.user ".
	 "values(null,'".$iphone."'".",'".$email."','".$password."');";
	 $retval=mysql_query($sql,$conn);
	 echo "注册成功";
	 if(!$retval){
	 	die('插入失败'.mysql_error());
	 }
	 }
	
	
	
	 
	
	
	 mysql_close($conn);
	
	
	
?>