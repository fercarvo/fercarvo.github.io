function mainde(){
	var url = "../json/users.json"
	$.getJSON("test.json", function(respuesta){
		respuesta.users.forEach(function(user){
			if (user.name == "radix"){
				function Redirect() {
	               window.location="../index/usuario.html";
	            }
			}
			if (user.name == "pancake"){
				function Redirect() {
	               window.location="../index/operario.html";
	            }
			}
			if (user.name == "quick"){
				function Redirect() {
	               window.location="../index/laboratorista.html";
	            }
			}
		});
	});
}

function resgistrarEventos() {
    var item = document.getElementById("one");
    item.addEventListener("click", mainde, false);
}

window.addEventListener("load", resgistrarEventos, false);