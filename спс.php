<?php
session_start();
$num=$_SESSION['NUM'];
$var1=0;
$var2=0;
$var3=0;
$var4=0;
$var5=0;
$var6=0;
if(array_key_exists('send',$_POST))
{
$link=mysqli_connect("localhost", "root", "root", "stat");
$query = mysqli_query($link,"SELECT num FROM shablon3 WHERE num='".mysqli_real_escape_string($link,$num)."' LIMIT 1");
$data = mysqli_fetch_assoc($query);
$id=$data['num'];
}

if(array_key_exists('send',$_POST))
{
if ($_POST['ff1']=='1') {
$var1++;
}
if ($_POST['ff1']=='2') {
$var2++;
}
if ($_POST['ff1']=='3') {
$var3++;
}
if ($_POST['ff1']=='4') {
$var4++;
}
if ($_POST['ff1']=='5') {
$var5++;
}
if ($_POST['ff1']=='6') {
$var6++;
}

if ($id==$num) {
$mysql=new mysqli("localhost","root","root","stat");
$mysql->query("UPDATE `shablon3` SET `var1`=`var1`+$var1, `var2`=`var2`+$var2, `var3`=`var3`+$var3, `var4`=`var4`+$var4, `var5`=`var5`+$var5, `var6`=`var6`+$var6 WHERE `num`=$num");
}
else
{
$mysql=new mysqli("localhost","root","root","stat");
$mysql->query("INSERT INTO `shablon3` (`var1`,`var2`,`var3`,`var4`,`var5`,`var6`) VALUES('$var1','$var2','$var3','$var4','$var5','$var6')");
}
}

?>
<html>
<head>
<meta charset="utf-8">
</head>
<body>
<h1 align=center>
Спасибо за ваши ответы<br>
</h1>
<a href="for top.html">
Главная страница конструктора
</a>
</body>
</html>