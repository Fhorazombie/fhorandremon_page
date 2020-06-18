$.fn.preload = function() {
    this.each(function(){
        $('<img/>')[0].src = this;
    });
}

// Usage:

$(['./img/home_buton.png','./img/home_buton.png','./img/brick.png', './img/home.png', './img/flor_carnivora.png', './img/flor.png', './img/VENTANAHIGS.png', './img/PUERTAHIG.png', './img/Proyectos.png']).preload();

console.log("  █████▒██░ ██  ▒█████   ██▀███   ▄▄▄       ███▄    █ ▓█████▄  ██▀███  ▓█████  ███▄ ▄███▓ ▒█████   ███▄    █ ")
console.log("▓██   ▒▓██░ ██▒▒██▒  ██▒▓██ ▒ ██▒▒████▄     ██ ▀█   █ ▒██▀ ██▌▓██ ▒ ██▒▓█   ▀ ▓██▒▀█▀ ██▒▒██▒  ██▒ ██ ▀█   █ ")
console.log("▒████ ░▒██▀▀██░▒██░  ██▒▓██ ░▄█ ▒▒██  ▀█▄  ▓██  ▀█ ██▒░██   █▌▓██ ░▄█ ▒▒███   ▓██    ▓██░▒██░  ██▒▓██  ▀█ ██▒")
console.log("░▓█▒  ░░▓█ ░██ ▒██   ██░▒██▀▀█▄  ░██▄▄▄▄██ ▓██▒  ▐▌██▒░▓█▄   ▌▒██▀▀█▄  ▒▓█  ▄ ▒██    ▒██ ▒██   ██░▓██▒  ▐▌██▒")
console.log("░▒█░   ░▓█▒░██▓░ ████▓▒░░██▓ ▒██▒ ▓█   ▓██▒▒██░   ▓██░░▒████▓ ░██▓ ▒██▒░▒████▒▒██▒   ░██▒░ ████▓▒░▒██░   ▓██░")
console.log(" ▒ ░    ▒ ░░▒░▒░ ▒░▒░▒░ ░ ▒▓ ░▒▓░ ▒▒   ▓▒█░░ ▒░   ▒ ▒  ▒▒▓  ▒ ░ ▒▓ ░▒▓░░░ ▒░ ░░ ▒░   ░  ░░ ▒░▒░▒░ ░ ▒░   ▒ ▒ ")
console.log(" ░      ▒ ░▒░ ░  ░ ▒ ▒░   ░▒ ░ ▒░  ▒   ▒▒ ░░ ░░   ░ ▒░ ░ ▒  ▒   ░▒ ░ ▒░ ░ ░  ░░  ░      ░  ░ ▒ ▒░ ░ ░░   ░ ▒░")
console.log(" ░ ░    ░  ░░ ░░ ░ ░ ▒    ░░   ░   ░   ▒      ░   ░ ░  ░ ░  ░   ░░   ░    ░   ░      ░   ░ ░ ░ ▒     ░   ░ ░ ")
console.log("        ░  ░  ░    ░ ░     ░           ░  ░         ░    ░       ░        ░  ░       ░       ░ ░           ░ ")
console.log("                                                       ░                                                     ")

var ultima = ""

$("#texto_bienvenidos").click(function(){
	$("#texto_bienvenidos").fadeOut()
})

$("#flor").click(function(){
	$("#texto_bienvenidos").fadeIn()
})

$("#home").click(function() {	
	console.log("Entro a clic home")
	regreso_animaciones()
	animaciones("home")
})

$("#proyectos").click(function() {
	console.log("Entro a clic proyectos")
	regreso_animaciones()
	animaciones("proyectos")

})




$("#skills").click(function() {
	console.log("Entro a clic skills")
	regreso_animaciones()
	animaciones("skills")

})




$("#contacto").click(function() {
	console.log("Entro a clic contacto")
	regreso_animaciones()
	animaciones("contacto")

})

function regreso_animaciones() {
	$("#texto").empty()
	$("#texto").css("display","none")
	$("#titulo").removeAttr( 'style' )
	$("#espacio").removeAttr( 'style' )
	$("#piso").removeAttr( 'style' )
	$("#menu").removeAttr( 'style' )
	$("#yo").css( "bottom", "" )
	$("#vicman").removeAttr( 'style' )
	switch (ultima) {

		case "proyectos":
			$("#cont_proyectos").removeAttr( 'style' )
			$("#yo").css( "-webkit-animation" , "compu_regreso 0.4s steps(11) forwards")
			$("#yo").css( "animation" , "compu_regreso 0.4s steps(11) forwards")
		break

		case "skills":
			$("#cont_skills").removeAttr( 'style' )
		break

		case "contacto":
			$("#cont_contacto").removeAttr( 'style' )
			$("#yo").css( "-webkit-animation" , "carta_regreso 0.4s steps(10) forwards")
			$("#yo").css( "animation" , "carta_regreso 0.4s steps(10) forwards")
		break
	}
}

function carta(){

	if (ultima != "contacto") {
		return
	} else {

		$("#yo").css( "animation" , "carta_stop 0.5s steps(2) infinite")
		$("#yo").css( "-webkit-animation" , "carta_stop 0.5s steps(2) infinite")

		setTimeout(function(){
			if (ultima == "contacto") {
				$("#yo").css( "animation" , "carta 2s steps(10) infinite")
				$("#yo").css( "-webkit-animation" , "carta 2s steps(10) infinite")
			}
		}, 5000)

		setTimeout(function(){
			if (ultima == "contacto") {	carta()}
		}, 6000)

	}

}

var width_anim = 0

width_anim = $( window ).width();

var height_anim = 0

height_anim = $( window ).height();


$( window ).resize(function() {
	console.log("cambio tamaño de pantalla")
	width_anim = $( window ).width();
	height_anim = $( window ).height();
	mobile_anima(ultima)
})


function mobile_anima(pagina) {
		console.log("Entro a mobile " + pagina)

		if (width_anim > 1000 ) {
			if (pagina == "home" || pagina == "") {
				return
			} else {
				$("#yo").css( "left", "7%" )
				$("#texto").fadeIn()
				return
			}
		} else if ( width_anim > height_anim && width_anim < 1000) {
			console.log("Entro a mobile-landscape")
			if (pagina == "home" || pagina == "") {
				return
			} else {
				$("#yo").css( "left", "5%" )
				$("#yo").css( "right", "" )
				$("#piso").css( "height", "20vh" )
				$("#yo").css( "bottom", "18%" )
				$("#menu").css( "margin-top", "67vh" )
				$("#titulo h1").css( "font-size", "0.8em" )
				$("#vicman").css( "display", "none" )
				return
			}
		}else {
			console.log("Entro a mobile-portrait")
			if (pagina == "home" || pagina == "") {
				return
			} else {
				$("#titulo").css("font-size",  "0.6em")
				$("#yo").css( "left", "0" )
				$("#yo").css( "right", "0" )
				$("#piso").css( "height", "20vh" )
				$("#yo").css( "bottom", "18%" )
				$("#menu").css( "bottom", "5%" )
				return
			}
		}
}

function ok_contacto(input) {

	console.log("Entro a ok contato")

	input = "." + input

	console.log(input)

	switch (input){

		case ".correo":
			$("#OK").attr("onclick", "ok_contacto('telefono')")
			$("#cancel").attr("onclick", "cancel_contacto('nombre')")
			$(".nombre").fadeOut(1)
			$("#cancel").fadeIn()
			$(input).fadeIn()
		break

		case ".telefono":
			$("#OK").attr("onclick", "ok_contacto('mensaje')")
			$("#cancel").attr("onclick", "cancel_contacto('correo')")
			$(".correo").fadeOut(1)
			$(input).fadeIn()
		break

		case ".mensaje":
			$("#OK").attr("onclick", "ok_contacto('g-recaptcha')")
			$("#cancel").attr("onclick", "cancel_contacto('telefono')")
			$(".telefono").fadeOut(1)
			$(input).fadeIn()
		break

		case ".g-recaptcha":
			$("#OK").attr("onclick", "ok_contacto('enviar')")
			$("#cancel").attr("onclick", "cancel_contacto('mensaje')")
			$(".mensaje").fadeOut(1)
			$(input).fadeIn()
		break

		case ".enviar":
			$("#OK").fadeOut(1)
			$("#cancel").attr("onclick", "cancel_contacto('g-recaptcha')")
			$(".g-recaptcha").fadeOut(1)
			$("#enviar").fadeIn()
		break

	}

}

function cancel_contacto(input) {

	console.log("Entro a ok contato")

	input = "." + input

	console.log(input)

	switch (input){

		case ".nombre":
			$("#OK").attr("onclick", "ok_contacto('correo')")
			$("#cancel").attr("onclick", "cancel_contacto('correo')")
			$("#cancel").fadeOut(1)
			$(input).fadeIn()
			$(".correo").fadeOut(1)
		break

		case ".correo":
			$("#OK").attr("onclick", "ok_contacto('telefono')")
			$("#cancel").attr("onclick", "cancel_contacto('nombre')")
			$(input).fadeIn()
			$(".telefono").fadeOut(1)
		break

		case ".telefono":
			$("#OK").attr("onclick", "ok_contacto('mensaje')")
			$("#cancel").attr("onclick", "cancel_contacto('correo')")
			$(input).fadeIn()
			$(".mensaje").fadeOut(1)
		break

		case ".mensaje":
			$("#OK").attr("onclick", "ok_contacto('g-recaptcha')")
			$("#cancel").attr("onclick", "cancel_contacto('telefono')")
			$(input).fadeIn()
			$(".g-recaptcha").fadeOut(1)
		break

		case ".g-recaptcha":
			$("#OK").attr("onclick", "ok_contacto('enviar')")
			$("#cancel").attr("onclick", "cancel_contacto('mensaje')")
			$(input).fadeIn()
			$("#enviar").fadeOut(1)
			$("#OK").fadeIn()
		break

	}

}

function animaciones(boton) {

	console.log(width_anim)

	switch (boton) {

		case "home":
			$("#home").removeAttr( 'style' )
			$("#skills").removeAttr( 'style' )
			$("#proyectos").removeAttr( 'style' )
			$("#contacto").removeAttr( 'style' )
			$("#menu").removeAttr( 'style' )
			setTimeout(function(){
			$("#yo").css( "transition" , "initial")
			$("#yo").css( "background-image" , "url(./img/home.png)")
			}, 800)
			setTimeout(function(){
			$("#yo").removeAttr( 'style' )
			$("#flor").removeAttr( 'style' )
			}, 820)
			$("#puerta").removeAttr( 'style' )
			$(".ventana").removeAttr( 'style' )
			ultima = "home"
		break

		case "proyectos":
			mobile_anima("proyectos")
			$("#titulo").css({"padding-top":"0", "padding-bottom":"2%"})
			$("br#espacio").css("display", "none")
			$("#flor").css( {"left" : "7%", "transform" : "rotate(-90deg)", "bottom" : "-20%" })
			$("#flor").css("opacity","0")
			$("#texto_bienvenidos").css("display","none")
			$("#texto").append("<p>Me gusta que en internet la gente tenga el derecho de expresarse libremente, por eso me especializo en hacer blog o páginas de publicaciones continuas para que todos dispongamos de un espacio cómodo para expresarnos seas un usuario experimentado o no y de esto puedas tener un beneficio si así lo prefieres.</p><p>Realizo herramientas flexibles y eficientes para los clientes en los que puedan estar cómodos de editar y publicar sus propias ideas.</p><p>La mayoría de los procesos de organización y feedback de las paginas los realizo con herramientas de videoconferencia, email y redes sociales.</p><br> <p>Y espero que con esto pueda encontrar la felicidad algún día.</p>")
			$("#cont_proyectos").css("display","block")
			setTimeout(function(){
			$("#flor").css( {"left" : "46%", "transform" : "rotate(90deg)", "bottom" : "100%" })
			$("#yo").css( "transition" , "initial")
			$("#yo").css( "-webkit-animation-iteration-count" , "1")
			$("#yo").css( "animation-iteration-count" , "1")
			}, 600)
			$("#puerta").css({"bottom" : "-100%", "display" : "none"})
			$(".ventana").css({"top" : "-100%", "display" : "none"})
			setTimeout(function(){
			$("#yo").css( "background-image" , "url(./img/Proyectos.png)")
			$("#yo").css( "animation" , "compu 2s steps(11) forwards")
			$("#yo").css( "-webkit-animation" , "compu 2s steps(11) forwards")
			}, 1000)
			ultima = "proyectos"
		break


		case "skills":
			mobile_anima("proyectos")
			$("#titulo").css({"padding-top":"0", "padding-bottom":"2%"})
			$("br#espacio").css("display", "none")
			$("#flor").css( {"left" : "7%", "transform" : "rotate(-90deg)", "bottom" : "-20%" })
			$("#flor").css("opacity","0")
			$("#texto_bienvenidos").css("display","none")
			$("#texto").append("<p>Me gusta mi trabajo, mi interés es encontrar proyectos en los que se relacionen el desarrollo y diseño web para una experiencia original e impresionante.</p><p>Siento que las páginas con identidad e interfaz visual propia son más eficientes, por que las personas reconocen la marca mucho más fácil.</p><p>\"<a id='zombie' href='#'>Jugar</a> es la condición fundamental para ser serio\"</p><p>Arquimides.</p>")
			$("#cont_skills").css("display","block")
			$("#skills").fadeOut()
			$("#proyectos").fadeOut()
			$("#contacto").fadeOut()
			$("#menu").css("width","17vh")
			$("#menu").css("margin-left","0")
			$("#home").css("width", "90%")
			setTimeout(function(){
			$("#flor").css( {"left" : "46%", "transform" : "rotate(90deg)", "bottom" : "100%" })
			$("#yo").css( "transition" , "initial")
			$("#yo").css( "-webkit-animation-iteration-count" , "1")
			$("#yo").css( "animation-iteration-count" , "1")
			}, 800)
			$("#puerta").css({"bottom" : "-100%", "display" : "none"})
			$(".ventana").css({"top" : "-100%", "display" : "none"})
			setTimeout(function(){
			$("#yo").css( "background-image" , "url(./img/skills_4.png)")
			$("#yo").css( "animation" , "skills 0.5s steps(4) infinite")
			$("#yo").css( "-webkit-animation" , "skills 0.5s steps(4) infinite")
			}, 1000)
			ultima = "skills"
		break


		case "contacto":
			mobile_anima("contacto")
			$("#titulo").css({"padding-top":"0", "padding-bottom":"2%"})
			$("br#espacio").css("display", "none")
			$("#flor").css( {"left" : "7%", "transform" : "rotate(-90deg)", "bottom" : "-20%" })
			$("#flor").css("opacity","0")
			$("#texto_bienvenidos").css("display","none")
			$("#texto").append("<p>Si tienes un proyecto original contactame al correo:</p><p><a href='mailto:yosh@fhorandremon.com?Subject=Sup!%20Bro!%20'>yosh@fhorandremon.com</a></p><p>Blog: <a href='http://xibalba-liberate.com/'>xibalba-liberate.com</a></p><p><a href='https://www.facebook.com/fhorandremon'><img style='width: 8%;' src='img/facebook.png'></a></p>")
			$("#cont_contacto").css("display","block")
			setTimeout(function(){
			$("#flor").css( {"left" : "46%", "transform" : "rotate(90deg)", "bottom" : "100%" })
			$("#yo").css( "transition" , "initial")
			$("#yo").css( "-webkit-animation-iteration-count" , "1")
			$("#yo").css( "animation-iteration-count" , "1")
			}, 600)
			$("#puerta").css({"bottom" : "-100%", "display" : "none"})
			$(".ventana").css({"top" : "-100%", "display" : "none"})
			setTimeout(function(){
			$("#yo").css( "background-image" , "url(./img/CONTACTOS.png)")
			$("#yo").css( "animation" , "carta 2s steps(10) infinite")
			$("#yo").css( "-webkit-animation" , "carta 2s steps(10) infinite")
			}, 1000)

			setTimeout(function(){
				carta()
			}, 2000)

			ultima = "contacto"
		break

	}

}


$("#enviar").click(function(){

	var nombre = $("#nombre").val();
	var email = $("#email").val();
	var telefono = $("#telefono").val();
	var mensaje = $("#mensaje").val();

	if(nombre==''||email==''||mensaje=='')
	{
	alert("Por favor llena todos los campos");
	}

	$.ajax({
		type: "POST",
		url: "cont/send.php",
		data: $('form').serialize(),
		cache: false,
		success: function(result){
			console.log(result);
			switch (result) {

				case "<p style='color:#f00 '>*Por favor dale click al captcha</p>":
				if ($("#cont_contacto p").length) {
					$("#cont_contacto p").remove();
				}
				$("#correo").removeAttr( 'style' )
				$("#cont_contacto").css("top","5%")
				$(".g-recaptcha div").css({"border":"1px solid #f00", "box-shadow" : "0px 0px 9px 4px #f00"})
				$("#cont_contacto").prepend(result)
				break

				case "<p style='color:#f00 '>*Tu email es incorrecto, por favor ingresa un mail verdadero</p>":
				if ($("#cont_contacto p").length) {
					$("#cont_contacto p").remove();
				}
				$(".g-recaptcha div").removeAttr( 'style' )
				grecaptcha.reset()
				$("#cont_contacto").css("top","5%")
				$("#correo").css({"border":"1px solid #f00", "box-shadow" : "0px 0px 9px 4px #f00"})
				$("#cont_contacto").prepend(result)
				break

				case "<h2>You are spammer ! Get the @$%K out</h2>":
				$("#cont_contacto").empty()
				$("#cont_contacto").append(result)
				break

				case "Tu email fue enviado exitosamente!!!":
				$("#cont_contacto").empty()
				$("#cont_contacto").append(result)
				break

				case "Uuuuups algo salio mal, pueden intentarlo de nuevo en un momento!!!!":
				$("#cont_contacto").empty()
				$("#cont_contacto").append(result)
				break

			}

		}
		,error: function(result) {
			console.log(result);
			$("#cont_contacto").empty()
			$("#cont_contacto").append(result)
        }
	})
})

var bandera_skills = 0

function clichabilidades(){
	$("#servicios").css("display","none")
	$("#menuskills h1:nth(1)").css("display","table-cell")
	$("#servicios").css("width","49%")
	$("#contenido_servicios").css("display","none")
	$("#contenido_habilidades").css("display","block")
	$("#habilidades").css("width","100%")
	$("#menuskills").css("display","table")
	$("#habilidades").fadeIn(function(){
			$("#menuskills h1:nth(0)").css("display","none")
	})
	$('#cont_skills').animate({
	    scrollTop: $("#cont_skills").offset().top
	}, 100);
}

function clicservicios(){
	$("#habilidades").css("display","none")
	$("#menuskills h1:nth(0)").css("display","table-cell")
	$("#habilidades").css("width","49%")
	$("#contenido_habilidades").css("display","none")
	$("#contenido_servicios").css("display","block")
	$("#servicios").css("width","100%")
	$("#menuskills").css("display","table")
	$("#servicios").fadeIn(function(){
			$("#menuskills h1:nth(1)").css("display","none")
	})
	$('#cont_skills').animate({
	    scrollTop: $("#cont_skills").offset().top
	}, 100);
}

$("#habilidades").click(function() {
	clichabilidades()
})

$("#menuskills h1:nth(0)").click(function() {
	clichabilidades()
})

$("#servicios").click(function() {
	clicservicios()
})
$("#menuskills h1:nth(1)").click(function() {
	clicservicios()
})

$("#cont_skills").hover(function(){},function(){

	$("#contenido_servicios").css("display","")
	$("#contenido_habilidades").css("display","")
	$(".skills").attr('style', '')
	$("#menuskills").attr('style', '')
})