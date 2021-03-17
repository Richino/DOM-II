//load
window.addEventListener("load", function () {
	//declare variables
	var nav = document.getElementsByClassName("nav-link");
	//mouseover
	Array.prototype.forEach.call(nav, function (element) {
		element.addEventListener("mouseover", function () {
			element.style.color = "#00adef";
		});

		element.addEventListener("mouseout", function () {
			element.style.color = null;
		});
	});
	//keydown
	window.addEventListener("keydown", function (event) {
		let easterEggTxt = document.getElementsByClassName("logo-heading");
		if (event.keyCode === 65) {
			Array.prototype.forEach.call(easterEggTxt, function (e) {
				e.innerHTML = "Easter egg has been found";
				e.select();
			});
		}
	});

	var busImg = document.getElementById("bus");
	busImg.addEventListener("wheel", function () {
		busImg.style.width = "80%";
		busImg.style.margin = "auto";
	});

	window.addEventListener("scroll", function () {
		document.getElementsByTagName("body")[0].style.backgroundColor =
			"#00adef";
	});

	var content = document.getElementsByClassName("intro");
	content[0].addEventListener("dblclick", function () {
		let paragraph = document.getElementById("content-paragraph");
		paragraph.innerHTML = "Hello Friend";
	});

	window.addEventListener("resize", function () {
		document.getElementsByTagName("footer")[0].innerHTML =
			"Hello Im under the water pls help";
	});
});
