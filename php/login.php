<?php
	require "link.php";
	$iphone=$_POST["iphone"];
	$password=$_POST["password"];
	$email=$_POST["email"];
	$flag=true;
	$sql="select * ".
	 "from jiuxianwang.user";
	 $result=mysql_query($sql,$conn);
	 if(!$result){
	 	die('查询失败'.mysql_error());
	 }
	 
	 while($rows=mysql_fetch_array($result,MYSQL_ASSOC)){
	 	 if($rows['iphone']==$iphone || $rows['email']==$email){
	 	 		if($rows['password']==$password){
	 	 			echo "登录成功";
					$flag=false;
	 	 		}else{
	 	 			echo "登录失败：密码错误";
					$flag=false;
	 	 		}
	 	 }
	 }
	 
	 if($flag){
	 	 echo "登录失败：用户不存在";
	 }
	
?>