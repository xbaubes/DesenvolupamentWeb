<!DOCTYPE html>
<html lang="ca">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <form action="processaFormulari.php" method="GET">
        Mamífers:
        <select name="mamifer">
            <option value="">---</option>
            <option value="lleo">Lleó</option>
            <option value="tigre">Tigre</option>
            <option value="elefant">Elefant</option>
            <option value="dofí">Dofí</option>
            <option value="giraffa">Girafa</option>
            <option value="goril·la">Goril·la</option>
            <option value="vaca">Vaca</option>
        </select><br>
        <input type="submit" value="Enviar">
    </form>

    <hr>

    <form action="processaFormulari.php" method="POST">
        Nom: <input type="text" name="nom"><br>
        Edat: <input type="number" name="edat"><br>
        Email: <input type="text" name="email"><br>
        <input type="submit" value="Enviar">
    </form>

</body>
</html>
