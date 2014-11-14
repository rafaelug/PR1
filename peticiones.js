function inicio(respuesta,funcion){
    
    var now=new Date().getTime();
    while(new Date().getTime() < now + 10000){}
    
	console.log("Has entrado en la pagina de inicio");
	respuesta.writeHead(200,{"Content-Type":"text/html"});
	respuesta.write("Esta es la página de inicio");
	respuesta.end();
}

function pagina1(respuesta){
	console.log("Has entrado en la página número 1");
	respuesta.writeHead(200,{"Content-Type":"text/html"});
	respuesta.write("Esta es la página número 1");
	respuesta.end();
}

function pagina2(respuesta){
	console.log("Has entrado en la página número 2");
	respuesta.writeHead(200,{"Content-Type":"text/html"});
	respuesta.write("Esta es la página número 2");
	respuesta.end();
}

function favicon(respuesta){
	console.log("Se ha pedido el favicon");
	respuesta.writeHead(200,{"Content-Type":"text/html"});
	respuesta.write("");
	respuesta.end();
}


exports.inicio = inicio;
exports.pagina1 = pagina1;
exports.pagina2 = pagina2;
exports.favicon = favicon;
