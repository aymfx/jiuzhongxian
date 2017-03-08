<?php
	header('Content-Type:text/html;charset="utf-8"');
	//连接数据库
	 $conn=mysql_connect('localhost','root','123456');
	 
	 //判断是否链接
	 if(!$conn){
	 	die('不能链接呀：'.mysql_error());
	 }
	 
	  $flag=mysql_select_db("jiuxianwang",$conn);//1.选择的数据库2.连接对象
	 if(!$flag){
	 	die('选择失败'.mysql_error());
	 }
	 
	 
	 
?>