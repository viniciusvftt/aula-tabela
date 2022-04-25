$.support.cors = true;

$(document).ready(
    function(){
        $('#conteudo').load("pages/pagina01.html")
    }
);

$('#btPagina1').click(
    function (){
        $('#conteudo').load("pages/pagina01.html")
    }
)

$('#btPagina2').click(
    function() {
        $('#conteudo').load("pages/pagina02.html")
    }
)