/*=============================================
OBJETOS CON LAS PROPIEDADES DEL SLIDER
=============================================*/

var p = {

	paginacion: document.querySelectorAll("#paginacion li"),
	botonImgs: 0,
	cajaSlide: document.querySelector("#slide ul"),
	animacionSlide: "slide",
	imgSlide: document.querySelectorAll("#slide ul li"),
	avanzar: document.querySelector("#slide #avanzar"),
	retroceder: document.querySelector("#slide #retroceder"),
	velocidadSlide: 3000,
	reiniciarIntervalo: false

}

/*=============================================
OBJETOS CON LOS METODOS DEL SLIDER
=============================================*/

var m = {

	inicioSlide: function() {

		for (var i = 0; i < p.paginacion.length; i++) {

			p.paginacion[i].addEventListener("click", m.paginacionSlide);
			p.imgSlide[i].style.width = (100/p.paginacion.length) + "%";
		}

		p.avanzar.addEventListener("click", m.avanzar)
		p.retroceder.addEventListener("click", m.retroceder)

		m.intervalo();

		p.cajaSlide.style.width = (p.paginacion.length*100) + "%";

	},

	paginacionSlide: function(imgs) {

		p.botonImgs = imgs.target.parentNode.getAttribute("img") - 1;
		m.movimientoSlide(p.botonImgs);

	},

	avanzar: function() {

		if (p.botonImgs == p.imgSlide.length - 1) {

			p.botonImgs = 0;

		} else {

			p.botonImgs++;

		}

		m.movimientoSlide(p.botonImgs);

	},

	retroceder: function() {

		if (p.botonImgs == 0) {

			p.botonImgs = p.imgSlide.length - 1;

		} else {

			p.botonImgs--;

		}

		m.movimientoSlide(p.botonImgs);

	},

	movimientoSlide: function(img) {

		p.reiniciarIntervalo = true;

		p.cajaSlide.style.left = img * -100 + "%";

		for (var i = 0; i < p.paginacion.length; i++) {

			p.paginacion[i].style.opacity = .5;

		}

		p.paginacion[img].style.opacity = 1;

		if (p.animacionSlide == "slide") {

			p.cajaSlide.style.transition = ".7s left ease-in-out";

		}

		if (p.animacionSlide == "fade") {

			p.imgSlide[img].style.opacity = 0;
			p.imgSlide[img].style.transition = ".7s opacity ease-in-out";

			setTimeout(function() {

				p.imgSlide[img].style.opacity = 1;

			}, 500)

		}

	},

	intervalo: function() {

		setInterval(function() {

			if (p.reiniciarIntervalo) {

				p.reiniciarIntervalo = false;
			} else {

				m.avanzar();

			}

		}, p.velocidadSlide)

	}

}

m.inicioSlide();