	/*Script de menu*/
	/*Crea una variable con todos los atributos de list__button--click*/
	let listElements = document.querySelectorAll('.list__button--click');
	
	listElements.forEach(listElement => {
		listElement.addEventListener('click', ()=>{
				/*A los elemenos con click se les agrega arrow*/
				listElement.classList.toggle('arrow');
				/*Se declara height en 0 para que esten ocultos*/
				let height = 0;
				let menu = listElement.nextElementSibling;
				/*Nos dice el height minimo para que se vea*/
				console.log(menu.scrollHeight)
				/*si el alto de menu es 0,entra al if y lo cambia por el alto minimo para verse*/
				if(menu.clientHeight == "0"){
					height = menu.scrollHeight;
				}
				/*Si no entra en el if pone el alto en 0*/
				menu.style.height = height+"px"
			})
		});
	
	
	/*Script que esconde y muestra el menu*/
	function muestra(){
		/*Cambia el estilo principal al de la clase hijo*/
		document.getElementById("switch").classList.toggle("bay");
	}
	
	
	/*Script de el icono de menu*/
	var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))
		for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);
		else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};
		/*Busca todos los atributos de la clase hamburger*/
		var hamburgers = document.querySelectorAll(".hamburger");
		/*Si su length es mayor a 0 le agrega el atributo is-activate y lo conecta con su css*/
		if (hamburgers.length > 0) {
		  forEach(hamburgers, function(hamburger) {
			hamburger.addEventListener("click", function() {
			  this.classList.toggle("is-active");
			}, false);
		  });
		}