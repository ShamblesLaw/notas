
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mostrar</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <table id="tabla">
        <tr>
            <th>DNI</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Fec. de Nac.</th>
            <th>Direccion</th>
        </tr>

        <?php 
    include('conectar.php');
    
    $con=connection();

    $sql="SELECT * FROM cliente";
        $query = mysqli_query($con,$sql);
        while($row=mysqli_fetch_array($query)){
            echo '<tr>';
            echo '<td>'.$row['dniCliente'].'</td>';
            echo '<td>'.$row['nombreCliente'].'</td>';
            echo '<td>'.$row['apellidosCliente'].'</td>';
            echo '<td>'.$row['fecnacCliente'].'</td>';
            echo '<td>'.$row['dirCliente'].'</td>';
            echo '</tr>';
        }
        
        echo "Numero de registros: ".mysqli_num_rows($query);
    
    ?>
    </table>

    
</body>
</html>