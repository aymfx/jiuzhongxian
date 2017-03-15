<?php
	require "link.php";
	
	//获取用户数据
	$iphone=$_POST["iphone"];
	$password=md5($_POST["password"]);
	$email=$_POST["email"];
	$flag=false;
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
			break;
	 	}else{
	 		$flag=true;
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
	 }else{
	 	echo "注册失败";
	 }
	 mysql_close($conn);
	
	
	
?>