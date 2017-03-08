<?php
	header('Content-Type:text/html;charset="utf-8"');
	//连接数据库
	 $conn=mysql_connect('localhost','root','123456');
	/*
	 * 第一参数：地址 	localhost代表本地
	 * 第二参数:用户名 	默认root
	 *第三个参数：密码	123456
	 *  */
	 //判断是否链接
	 if(!$conn){
	 	die('不能链接呀：'.mysql_error());
	 }
	 //设置字符集
	 //mysql_query('SET NAMES UTF8');
	 
	 //创建数据库
	 /*$sql='create database ly';
	 $retval=mysql_query($sql,$conn);//1.sql语句2.链接对象
	 if(!$retval){
	 	die('创建失败'.mysql_error());
	 }*/
	 
	 //选择数据库
	 $flag=mysql_select_db("ly",$conn);//1.选择的数据库2.连接对象
	 if(!$flag){
	 	die('选择失败'.mysql_error());
	 }
	 
	//删除数据库
	/*$sql='drop database ly';
	$retval=mysql_query($sql,$conn);
	if(!$retval){
	 	die('删除数据库失败'.mysql_error());
	 }*/
	 
	 //创建表结构
	 /*$sql="create table yueguang(".
	 "yg_id tinyint not null auto_increment, ".
	 "yg_title varchar(100) not null, ".
	 "yg_atuhor varchar(40) not null, ".
	 "sub_date DATE, ".
	 "primary key (yg_id));";
	 $retval=mysql_query($sql,$conn);
	 if(!$retval){
	 	die('删除数据库失败'.mysql_error());
	 }*/
	 
	 //删除表
	/*$sql='drop table yueguang';
	$retval=mysql_query($sql,$conn);
	if(!$retval){
	 	die('删除数据表失败'.mysql_error());
	 }*/
	 
	 //插入数据
	 /*$sql="insert into ly.yueguang(yg_title,yg_atuhor,sub_date) ".
	 "values('你的孤独虽败犹荣','刘同',NOW());";
	 $retval=mysql_query($sql,$conn);
	 if(!$retval){
	 	die('插入失败'.mysql_error());
	 }*/
	 
	 //查询数据
	 /*$sql="select yg_id,yg_title,yg_atuhor,sub_date ".
	 "from ly.yueguang";
	 $result=mysql_query($sql,$conn);
	 if(!$result){
	 	die('查询失败'.mysql_error());
	 }*/
	 //mysql_fetch_array: 从结果集中取得一行作为关联数组，或数字数组，或二者兼有
	 //1.结果集 2.可选参数
	 
	 //MYSQL_NUM 
	 //print_r(mysql_fetch_array($result,MYSQL_NUM));
	 //显示数字Array ( [0] => 1 [1] => 挪威森林 [2] => 村上春树 [3] => 2017-03-07 )
	 //MYSQL_ASSOC
	 //print_r(mysql_fetch_array($result,MYSQL_ASSOC));
	 //显示属性：Array ( [yg_id] => 1 [yg_title] => 挪威森林 [yg_atuhor] => 村上春树 [sub_date] => 2017-03-07 )
	 
	 //MYSQL_BOTH  默认
	//print_r(mysql_fetch_array($result));
	 //Array ( [0] => 1 [yg_id] => 1 [1] => 挪威森林 [yg_title] => 挪威森林 [2] => 村上春树 [yg_atuhor] => 村上春树 [3] => 2017-03-07 [sub_date] => 2017-03-07 )
	 
	 /*while($rows=mysql_fetch_array($result,MYSQL_ASSOC)){
	 	echo "我的id{$rows['yg_id']}:{$rows['yg_title']}:{$rows['yg_atuhor']}:{$rows['sub_date']} </br>";
	 }*/
/*	我的id1:挪威森林:村上春树:2017-03-07 
	我的id2:我的太阳:我的:2017-03-07 
	我的id3:从你的全世界路过:张嘉佳:2017-03-07 */
	
	//where
	/*$sql="select yg_id,yg_title,yg_atuhor,sub_date ".
	 "from ly.yueguang where yg_id=2 ";
	 $result=mysql_query($sql,$conn);
	 if(!$result){
	 	die('查询失败'.mysql_error());
	 }
	
	while($rows=mysql_fetch_array($result,MYSQL_ASSOC)){
	 	echo "我的id{$rows['yg_id']}:{$rows['yg_title']}:{$rows['yg_atuhor']}:{$rows['sub_date']} </br>";
	 }*/
	//我的id2:我的太阳:我的:2017-03-07 
	 
	 //updata更新数据
	 /*$sql="update ly.yueguang set yg_title='我要太阳'".
	 "where yg_id=2 ";
	 $result=mysql_query($sql,$conn);
	 if(!$result){
	 	die('更新失败'.mysql_error());
	 }
	 
	 $sql="select yg_id,yg_title,yg_atuhor,sub_date ".
	 "from ly.yueguang where yg_id=2 ";
	 $result=mysql_query($sql,$conn);
	 if(!$result){
	 	die('查询失败'.mysql_error());
	 }
	
	while($rows=mysql_fetch_array($result,MYSQL_ASSOC)){
	 	echo "我的id{$rows['yg_id']}:{$rows['yg_title']}:{$rows['yg_atuhor']}:{$rows['sub_date']} </br>";
	 }*/
	
	//删除数据项
	/*$sql="delete from ly.yueguang where yg_id=2";
	$result=mysql_query($sql,$conn);
	 if(!$result){
	 	die('删除数据项'.mysql_error());
	 }*/
	 
	 //like匹配
	/* $sql="select * from ly.yueguang where yg_atuhor like '%村%'";
	$result=mysql_query($sql,$conn);
	 if(!$result){
	 	die('查找数据项'.mysql_error());
	 }
	 while($rows=mysql_fetch_array($result,MYSQL_ASSOC)){
	 	echo "我的id{$rows['yg_id']}:{$rows['yg_title']}:{$rows['yg_atuhor']}:{$rows['sub_date']} </br>";
	 }*/
	 
	 //我的id1:挪威森林:村上春树:2017-03-07 
	 
	 //排序
	  $sql="select * from ly.yueguang order by yg_id desc";
	$result=mysql_query($sql,$conn);
	 if(!$result){
	 	die('查找数据项'.mysql_error());
	 }
	 while($rows=mysql_fetch_array($result,MYSQL_ASSOC)){
	 	echo "我的id{$rows['yg_id']}:{$rows['yg_title']}:{$rows['yg_atuhor']}:{$rows['sub_date']} </br>";
	 }
	 
	 /*我的id5:你的孤独虽败犹荣:刘同:2017-03-07 
我的id4:摆渡人:佚名:2017-03-07 
我的id3:从你的全世界路过:张嘉佳:2017-03-07 
我的id1:挪威森林:村上春树:2017-03-07 */
	 //关闭数据库链接
	 mysql_close($conn);
	 
	 
	 
	//创建数据库
	
	
?>