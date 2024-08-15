<!DOCTYPE html>
<html lang="ca">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Algorismica PHP</title>
</head>
<body>

    <?php

        /***** FUNCIONS *****/

        // Funcions predefinides
        echo date("d/m/Y H:i:s") . "<br><br>";

        // Funcions personalitzades
        function saludar($nom) {
            return "Hola, " . $nom . "!";
        }
        echo saludar("Joan") . "<br><br>";  // Crida la funció amb el nom "Joan"

        /***** ARRAYS I ITERACIO *****/

        // Array indexat
        $fruites = ["Poma", "Plàtan", "Mango"];
        echo "M'agrada menjar " . $fruites[0] . " i " . $fruites[2] . ".<br><br>";
        // Afegir un element
        $fruites[] = "Raïm"; // Afegir un element al final
        // Eliminar un element
        unset($fruites[1]); // Elimina l'element amb index 1 (Plàtan)
        // Array indexat iterat
        for ($i = 0; $i < count($fruites); $i++) {
            echo $i+1 . " : " . $fruites[$i] . "<br>";
        }
        foreach ($fruites as $fruita) {
            echo $fruita . "<br>";
        }
        echo "<br>";

        // Array associatiu
        $edats = ["Joan" => 25, "Maria" => 22, "Pere" => 30];
        echo "Maria té " . $edats['Maria'] . " anys.<br><br>";
        // Afegir un element
        $edats["Ramon"] = 55; // Afegir un nou parell clau-valor
        // Eliminar un element
        unset($edats["Maria"]); // Elimina el parell amb clau Maria
        // Array associatiu iterat
        foreach ($edats as $nom => $edat) {
            echo "$nom té $edat anys.<br>";
        }
        echo "<br>";

        // Array multidimensional
        $notesEstudiants = [
            "Joan" => ["Matemàtiques" => 8, "Ciències" => 7, "Història" => 9],
            "Maria" => ["Matemàtiques" => 6, "Ciències" => 8, "Història" => 7],
            "Pere" => ["Matemàtiques" => 9, "Ciències" => 6, "Història" => 8]
        ];
        echo "Nota d'en Joan en matemàtiques: " . $notesEstudiants["Joan"]["Matemàtiques"] . "<br><br>";
        // Array multidimensional iterat
        echo "Notes d'en Joan:<br>";
        foreach ($notesEstudiants["Joan"] as $materia => $nota) { // Mostra les notes d'en Joan
            echo "$materia: $nota<br>";
        }
        echo "<br>";
        foreach ($notesEstudiants as $nom => $notes) { // Mostra les notes de tots els estudiants
            echo "Notes de " . $nom . ":<br>";
            foreach ($notes as $assignatura => $nota) {
                echo $assignatura . ": " . $nota . "<br>";
            }
            echo "<br>";
        }

    ?>

</body>
</html>
