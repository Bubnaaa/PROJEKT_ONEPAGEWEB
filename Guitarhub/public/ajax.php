<?php
header('Content-Type: text/html; charset=utf-8');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $jmeno = htmlspecialchars($_POST['jmeno'] ?? '');
    $email = htmlspecialchars($_POST['email'] ?? '');
    $zprava = htmlspecialchars($_POST['zprava'] ?? '');

    if (!empty($jmeno) && !empty($email) && !empty($zprava)) {
        $soubor = 'dotazy.json';

        $novyDotaz = [
            "datum" => date("d.m.Y H:i:s"),
            "jmeno" => $jmeno,
            "email" => $email,
            "zprava" => $zprava
        ];

        $data = [];
        if (file_exists($soubor)) {
            $data = json_decode(file_get_contents($soubor), true) ?? [];
        }
        $data[] = $novyDotaz;

        if (file_put_contents($soubor, json_encode($data, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT))) {
            echo "Díky, " . $jmeno . "! Tvůj dotaz byl úspěšně uložen.";
        } else {
            http_response_code(500);
            echo "Chyba při zápisu do souboru.";
        }
    } else {
        http_response_code(400);
        echo "Chyba: Vyplň všechna pole!";
    }
}
?>