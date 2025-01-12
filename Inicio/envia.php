<?php
 
    $nome = addcslashes($_POST{'nome'});
    $email = addcslashes($_POST{'email'});
    $mensagem = addcslashes($_POST{'mensagem'});

    $para = "helpinf305@gmail.com";
    $assunto = "Novo Contato - ".$nome."\n";

    $corpo = "Nome: ".$nome."/n"."Email: ".$email."\n"."Mensagem: ".$mensagem;

    $header = "From: teste@gmail.com"."\n"."Reply-to: ".$email."\n"."x=Mailer:PHP/".phpversion();

    if(mail($para.$assunto.$corpo.$header)){
        echo("Email enviado com sucesso!");
    }else{
        echo("Houve um erro ao enviar o email!");
    }

?> 