<?php


$res = openssl_pkey_new();
$details = openssl_pkey_get_details($res);


// echo $details['key'];
// die();

//? TO DISPLAY PRIVATE KEY 
// openssl_pkey_export($res, $privateKey);
//echo $privateKey;


//? 2 WRITE PRIVATE KEY IN A FILE

openssl_pkey_export_to_file($res, './rsaPrivateKey.key');
// echo $privateKey;

// ? RETRIEVE PRIVATE KEY FROM A FILE
$privateKey = file_get_contents('.rsaPrivateKey.key');
// $rest = openssl_pkey_get_private($privateKey);
        // echo openssl_pkey_get_getails($rest)['key]

        // test 