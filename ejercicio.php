<?php

//ACTIVIDAD 1
$text = "A";
$num = 5;
$bool = true;

echo $text." | ".$num." | ".$bool.'<br>';

//ACTIVIDAD 2

if($_POST){
    $emax = 0;
    $emin;
    $aux;


    $nombres=array($_POST['name1'], $_POST['name2'], $_POST['name3']);
    $edades=array($_POST['edad1'],$_POST['edad2'],$_POST['edad3']);

    for ($i=0; $i < count($edades); $i++) { 

        if($edades[$i] > $emax && $i <= 2){
            // $emax = $nombres[$i]." es el mayor y tiene ".$edades[$i]." años.";
            $emax = $edades[$i];
            $aux = $emax." ";
        }
    }


}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>clase 2</title>
</head>
<body>
    <form action="ejercicios.php" method="post">
    <input type="text" placeholder="nombre 1" name="name1" id=""><br>
    <input type="number" placeholder="edad 1" name="edad1" id=""><br>
    <br>
    <input type="text" placeholder="nombre 2" name="name2" id=""><br>
    <input type="number" placeholder="edad 2" name="edad2" id=""><br>
    <br>
    <input type="text" placeholder="nombre 3" name="name3" id=""><br>
    <input type="number" placeholder="edad 3" name="edad3" id=""><br>
    <br>
    <input type="submit" value="Enviar"><br>
    </form>

</body>
</html>
