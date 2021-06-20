<?php
session_start();
$num=1;
$_SESSION['NUM']=$num;
$var1=0;
$var2=0;
$var3=0;
$var4=0;
$var5=0;
$var6=0;
$link=mysqli_connect("localhost", "root", "root", "stat");
$query = mysqli_query($link,"SELECT num FROM shablon3 WHERE num='".mysqli_real_escape_string($link,$num)."' LIMIT 1");
$data = mysqli_fetch_assoc($query);
$id=$data['num'];
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
// $mysql=new mysqli("localhost","u107370_admin","Xb8GlBmO","u107370_kurs_c");
$mysql->query("UPDATE `shablon3` SET `var1`=`var1`+$var1, `var2`=`var2`+$var2, `var3`=`var3`+$var3, `var4`=`var4`+$var4, `var5`=`var5`+$var5, `var6`=`var6`+$var6 WHERE `num`=$num");
}
else
{
$mysql=new mysqli("localhost","root","root","stat");
// $mysql=new mysqli("localhost","u107370_admin","Xb8GlBmO","u107370_kurs_c");
$mysql->query("INSERT INTO `shablon3` (`var1`,`var2`,`var3`,`var4`,`var5`,`var6`) VALUES('$var1','$var2','$var3','$var4','$var5','$var6')");
}
}
?>
<head>
<meta charset="utf-8">
<title>Конструктор опросов</title>
<link href="style.css" rel="styleshhet" type="text/css">
<script type="text/javascript" src="jquery1.js"></script>
<script type="text/javascript" src="srip3.js"></script>
<script type="text/javascript" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/FileSaver.js"></script>
</head>
<body bgcolor="rgb(200,200,102)" id="bod">


<br>

<center><h1><font face="Verdana" color="white">
<div id="shablon">Что лучше отремонтировать</div>
</font></h1></center>
<h3><center>
<br>

</center></h3>

<center>



<center><input type="button" value="Получить ссылку" id="otp" visibility:="" hidden="" style="display: none;"></center>
<div id="d1">
<table id="t1" border="5" botdercolor="rgb(100,150,100)" width="65%" align="center" bgcolor="DarkSlateBlue">
<tbody><tr><td>
<h3><center><font face="Verdana" color="white"><i>
<div id="qn1">Детские сады</div>

</i></font></center></h3>
<h4 id="h4"><font color="rgb(100,150,100)">

<br>

</font></h4>
</td></tr>
<tr><td>
<div id="test1"> 
<form method='POST' action='спс.php' >
 <div id="ques"><input type="radio" name="ff1" value='1'><div id="q1" style="font-size: 20px">На ленина 45</div>
<br></div><div id="ques"><input type="radio" name="ff1" value='2'><div id="q1" style="font-size: 20px">п-р Мира 12</div>
<br></div><div id="ques"><input type="radio" name="ff1" value='3'><div id="q1" style="font-size: 20px">Волкова 49</div>
<br></div><div id="ques"><input type="radio" name="ff1" value='4'><div id="q1" style="font-size: 20px">Строительный 5</div>
<br></div><div id="ques"><input type="radio" name="ff1" value='5'><div id="q1" style="font-size: 20px">Беляева 9</div>
<br></div>
<center><input type='submit' value="Отправить" name='send' id="otp1" ></center>

</form>
</div>
</td>
</tr></tbody></table><br><br></div>
<br>

 

</body>