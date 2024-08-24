<?php

    // Llegir una cookie
    if (!isset($_COOKIE['nom_usuari'])) {
        // Creació d'una cookie
        setcookie("nom_usuari", "Joan", time() + (30 * 24 * 60 * 60), "/");
        // Estableix una cookie que expira en 30 dies
        // Notació en segons: 30 dies * 24 hores que té un dia * 60 minuts que té una hora * 60 segons que té un minut
        // Si posem 0 la cookie expira al finalitzar la sessió

        // La cookie no estarà disponible fins la pròxima sol.licitud HTTP
        if (isset($_COOKIE['nom_usuari'])) {
            echo "La cookie s'ha creat correctament.<br> El valor és: " . $_COOKIE['nom_usuari'] . "<br>";
        } else {
            echo "La cookie encara no està disponible.";
        }
    } else {
        echo "La cookie ja estava creada.<br> El valor és: " . $_COOKIE['nom_usuari'] . "<br>";
    }

    // Eliminació d'una cookie
    if (isset($_POST['eliminar_cookie'])) {
        // Per eliminar una cookie, cal establir-la amb un temps passat
        setcookie("nom_usuari", "", time() - 3600, "/");
        echo "La cookie s'ha eliminat.<br>";
    }

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <!--Formulari per eliminar la cookie -->
    <form method="post" action="">
        <input type="submit" name="eliminar_cookie" value="Eliminar Cookie">
    </form>
</body>
</html>
