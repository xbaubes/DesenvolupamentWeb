<!DOCTYPE html>
<html lang="ca">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Basics PHP</title>
</head>
<body>

    <?php

        /***** VARIABLES *****/

        $nom = "Maria"; // Variable que conté una cadena de text (String)
        $edat = 25; // Variable que conté un enter (Integer)
        $domicili = NULL; // Variable sense valor (NULL)

        $domicili = "Olot"; // La variable canvia de valor i tipus (NULL → String)

        echo "Nom: $nom<br>Edat: $edat<br>Domicili: $domicili<br><br>";
        // Amb cometes simples no interpreta les variables:
        echo 'Nom: $nom<br>Edat: $edat<br>Domicili: $domicili<br><br>';

        /***** OPERACIONS *****/

        $a = 10;
        $b = 5;
    
        $suma = $a + $b;            // 15
        $resta = $a - $b;           // 5
        $multiplicacio = $a * $b;   // 50
        $divisio = $a / $b;         // 2
        $modul = $a % $b;           // 0
    
        echo "Suma: $suma, Resta: $resta, Multiplicació:" .
        "$multiplicacio, Divisió: $divisio, Mòdul: $modul" . "<br>";
        // Podem concatenar strings usant "."
    
        /***** CONVERSIO TIPUS *****/

        $numString = "5";
        $convString = $numString + 10; // La cadena "5" es converteix en enter per realitzar la suma
        echo "Suma 5 (String) + 10 (Int): " . $convString . "<br>";
        // Es mes recomanable efectuar un cast:
        $convString = (int)$numString + 10;
        echo "Suma 5 (String) + 10 (Int) amb cast: " . $convString . "<br><br>";

        /***** COMPARACIONS *****/

        // Comparació: verificació si el llibre té més de 200 pàgines i el preu és menor que 25 euros
        $numeroPags = 250; // Número de pàgines del llibre
        $preu = 20; // Preu en euros
        
        if ($numeroPags > 200 && $preu < 25) {
            echo "Aquest llibre té més de 200 pàgines i costa menys de 25 euros.";
        } else {
            echo "El llibre no compleix les condicions.";
        }
        echo "<br><br>";

        // Comparació estricta: verifica si els valors són iguals i del mateix tipus
        $valorInt = 5;
        $valorString = '5';

        if ($valorInt === $valorString) {
            echo "Els valors són iguals i del mateix tipus.";
        } else {
            echo "Els valors no són iguals o no són del mateix tipus.";
        }
        echo "<br><br>";

        // Operador lògic AND: verifica si les dos condicions són certes
        $targeta = true;
        $saldoDisponible = 800;
        $importCompra = 999.99;
        $resposta;
    
        if ($targeta && $saldoDisponible > $importCompra) {
            $resposta = "Es realitza la compra.";
        } else {
            $resposta = "No es realitza la compra.";
        }
        echo $resposta . "<br>";

        // Operador lògic NOT: inverteix el valor booleà
        $plou = true;
        if($plou)
            echo "<h3>Plou.</h3>";
        if(!$plou)
            echo "<h3>No plou.</h3>";


        /***** CONDICIONALS *****/

        $edat = 20;
        $missatge;

        if ($edat < 18) {
            $missatge = "Ets menor d'edat.";
        } elseif ($edat == 18) {
            $missatge = "Acabes de complir 18!";
        } else {
            $missatge = "Ets major d'edat.";
        }
        echo $missatge . "<br><br>";

        // Usant operador ternari
        $missatge = ($edat >= 18) ? "Ets major d'edat." : "No ets major d'edat.";
        echo $missatge . "<br><br>";

    ?>

</body>
</html>
