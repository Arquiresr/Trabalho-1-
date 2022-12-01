function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  function abreMenu(item){

    switch(item){
        case 'u':
   document.getElementById("in").src = "Noticia.php";

break;
case 'a':
document.getElementById("in").src = "hj.php";

break;
case 'aa':
        document.getElementById("in").src = "i.php";

break;
case 'pr':
        document.getElementById("in").src = "jbc.php";
document.getElementById("spanTitulo").innerHTML = "Produto";
break;
case 'a':
        document.getElementById("in").src = "new.php";
document.getElementById("spanTitulo").innerHTML = "Produto";
break;
case 'a1':
        document.getElementById("in").src = "Sair.php";

break;

default:
     document.getElementById("in").src = "Imagem/ichigo.webp"
    }
}

function excluirMemorando(id){	
	if (window.confirm("Você realmente quer sair?")) {
             
        }
	
}
