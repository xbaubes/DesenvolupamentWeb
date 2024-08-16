<?php

    if ($_SERVER['REQUEST_METHOD'] == 'GET') { // GET
        if (isset($_GET['mamifer']) && !empty($_GET['mamifer'])) {
            $mamifer = $_GET['mamifer'];
            echo "Mamífer seleccionat: " . htmlspecialchars($mamifer);
        } else {
            echo "No s'han rebut dades vàlides per mètode GET.";
        }
    } else if ($_SERVER['REQUEST_METHOD'] == 'POST') { // POST
        if (isset($_POST['nom']) && !empty($_POST['nom']) &&
        isset($_POST['edat']) && filter_var($_POST['edat'], FILTER_VALIDATE_INT) &&
        isset($_POST['email']) && filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)){
            $nom = $_POST['nom'];
            $edat = $_POST['edat'];
            $email = $_POST['email'];
            echo "Nom: " . htmlspecialchars($nom) . "<br>";
            echo "Edat: " . intval($edat) . "<br>";
            echo "Email: " . htmlspecialchars($email) . "<br>";
        } else {
            echo "No s'han rebut dades vàlides per mètode POST.";
        }
    }

?>
