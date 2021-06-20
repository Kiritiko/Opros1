<?php


if (isset($_POST['send'])){
$link=mysqli_connect("localhost", "root", "root", "stat");
$query = mysqli_query($link,"SELECT num FROM shablon3 ");
$rows=mysqli_num_rows($query);
}


if (isset($_POST['send'])){
	$num=$_POST['spisok'];
	$query1=mysqli_query($link,"SELECT * FROM shablon3 WHERE num='$num' ORDER BY num");
	$rows1=mysqli_num_rows($query1);
	if ($rows1) {
		echo "<table border='1'>";
		if ($num==1){
		echo "<tr><td>Опрос</td><td>На ленина 45</td><td>п-р Мира 12</td><td>Волкова 49</td><td>Строительный 5</td><td>Беляева 9</td></tr>";
		for ($i=0; $i<$rows; $i++){
		$row1 = mysqli_fetch_row($query1);
		echo "<tr><td>$row1[0]</td><td>$row1[1]</td><td>$row1[2]</td><td>$row1[3]</td><td>$row1[4]</td><td>$row1[5]</td></tr>";
		}
		}
		if ($num==2){
		echo "<tr><td>Опрос</td><td>Чай</td><td>Кола</td><td>Кофе</td><td>Кофе</td><td>Пепси</td><td>Фанта</td></tr>";
		for ($i=0; $i<$rows; $i++){
		$row1 = mysqli_fetch_row($query1);
		echo "<tr><td>$row1[0]</td><td>$row1[1]</td><td>$row1[2]</td><td>$row1[3]</td><td>$row1[4]</td><td>$row1[5]</td><td>$row1[6]</td></tr>";
		}
		}

		echo"</table>";
		}

	};
	/////

?>


<html>
<head>
<meta charset="utf-8">
<title>Конструктор опросов</title>
<link href='style.css' rel='styleshhet' type='text/css'></link>
<script type='text/javascript' src='jquery1.js'></script>
<script type='text/javascript' src='srip3.js'></script>
<script type="text/javascript" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/FileSaver.js"></script>
</head>
<body  >
<form action='' method='POST'>
<label for='spisok'>Выберите опрос</label>
<select name='spisok' id='spisok'>
<?php
for ($i=0; $i<$rows; $i++){
$row = mysqli_fetch_row($query);
echo "<option name='grup' value='$row[0]'>$row[0]</option>";
}
?>
</select><br>
<input type='submit' name='send' value='просмотр'>
</form>
</body>
</html>