<?php


if(move_uploaded_file($_FILES['filename']['tmp_name'], 'save/'.$_FILES['filename']['name']))
{
	echo 'файл скопирован на сервер';
} else {
	echo 'файл НЕ скопирован на сервер';
}
?>