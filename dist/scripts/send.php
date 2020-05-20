<?php 

session_start();


    require_once "connect.php";

    try
    {
        $polaczenie = new mysqli($host, $db_user, $db_password, $db_name);
        if($polaczenie->connect_errno!=0)
        {
            throw new Exception(mysqli_connect_errno());
        }
        else
        {
            $phoneNumber = $_POST['phoneNumber'];
		    $message = $_POST['message'];
    
            $phoneNumber = htmlentities($phoneNumber, ENT_QUOTES, "UTF-8");
            $message = htmlentities($message, ENT_QUOTES, "UTF-8");

            $phoneNumber = mysqli_real_escape_string($polaczenie,$phoneNumber);
            $message = mysqli_real_escape_string($polaczenie,$message);

            if(mysqli_query($polaczenie, "INSERT INTO wiadomosci VALUES (NULL,'$phoneNumber', '$message')")){
                header('Location: index.html');
            }
            else
            {
                throw new Exception($polaczenie->error);
            }
    
        }
    
        $polaczenie->close();
        session_unset();
    }
    catch(Exception $e)
    {
        echo '<span style="color:red;">Błąd serwera! Przepraszamy za niedogodności
            i prosimy o rejestrację w innym terminie</span>';
        echo '<br/>Informacja developerska: '.$e;
    }



?>