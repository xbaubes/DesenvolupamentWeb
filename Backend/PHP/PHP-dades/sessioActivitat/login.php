<!DOCTYPE html>
<html lang="ca">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pàgina de Connexió</title>
</head>
<body>
    <h2>Inicia Sessió</h2>

    <form method="POST" action="login.php">
        <label for="username">Nom d'usuari:</label>
        <input type="text" id="username" name="username" required><br><br>

        <label for="password">Contrasenya:</label>
        <input type="password" id="password" name="password" required><br><br>

        <input type="submit" value="Iniciar Sessió">
    </form>

</body>
</html>