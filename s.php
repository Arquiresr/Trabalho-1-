
	<?php
	$usuario = $_POST["txtlogin"];
	$senha =$_POST["txtsenha"];
	if(isset($usuario) && isset($senha)){	
	if($usuario=='adm' && $senha=='1234'){
		$_SESSION['txtlogin']=$usuario;
		echo 'ok';
		header("Location: Cadastro.html");
	}
	else{
		echo 'Usuário ou senha incorretos';
	}
}
?>
