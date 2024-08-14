<!DOCTYPE html>
<html lang="ca">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Variables PHP llistades</title>
</head>
<body>

    <?php
        // Declarem les variables
        $variable1 = "Primera variable";
        $variable2 = "Segona variable";
        $variable3 = "Tercera variable";
    ?>

    <!-- Generem una llista HTML per mostrar les variables -->
    <ul>
        <li><?php echo $variable1; ?></li>
        <li><?php echo $variable2; ?></li>
        <li><?php echo $variable3; ?></li>
    </ul>

</body>
</html>
