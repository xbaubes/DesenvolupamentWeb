    <?php
        session_start();
    ?>

<!DOCTYPE html>
<html lang="ca">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Sessió Assignar Valor Variables</title>
</head>
<body>

    <?php
        // Intentar accedir a les variables de sessió
        if (isset($_SESSION['usuari']) && isset($_SESSION['rol']))
        {
            echo "<p>ACCES A DADES SESSION</p>";
            echo "<p>Usuari: " . $_SESSION['usuari'] . "</p><p>Rol: " . $_SESSION['rol'] . "</p>"; 
        }

        // Buidar totes les variables de sessió
        session_unset();
    ?>

    <a href="sessionCreation.php">
        <button>Testing session : Setting values</button>
    </a>

</body>
</html>
