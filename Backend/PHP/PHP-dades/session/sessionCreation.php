    <?php
        session_start();
    ?>

<!DOCTYPE html>
<html lang="ca">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Sessió Mostrar Variables</title>
</head>
<body>

    <?php
        // Assignar valors a la sessió
        if (!isset($_SESSION['usuari']) && !isset($_SESSION['rol']))
        {
            echo "<p>CREACIO DADES SESSION</p>";
            $_SESSION['usuari'] = 'Joan';
            echo "<p>Usuari assignat</p>";
            $_SESSION['rol'] = 'admin';
            echo "<p>Rol assignat</p>";
        }
    ?>

    <a href="sessionUnset.php">
        <button>Testing session : Show values</button>
    </a>

</body>
</html>
