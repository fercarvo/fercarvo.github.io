function main(){

	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if (xhttp.readyState == 4 && xhttp.status == 200){
			var json = JSON.parse(xhttp.responseText);			
			json.forEach(function(user){
				var txtInput = document.querySelector(".login input");

				if (user.username == txtInput.value){
					if (user.id == 1){
						console.log(txtInput.value);
			            location.href = "index/usuario.html";
		        	}
		        	else if (user.id == 2){
		        		console.log(txtInput.value);
			            location.href = "index/operario.html";
		        	}
		        	else if (user.id == 3){
		        		console.log(txtInput.value);
			            location.href = "index/laboratorista.html";
		        	}
				}
			});
			
		}
	};
	xhttp.open("GET", "json/users4.json",true);
	xhttp.send();
}

function resgistrarEventos() {
    var item = document.getElementById("one");
    item.addEventListener("click", main, false);
}

window.addEventListener("load", resgistrarEventos, false);