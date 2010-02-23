function change(idm) {
	idr='rub' + idm;
	img= 'plusmoins' + idm;
	if (document.getElementById) {
		if (document.getElementById(idr)) {
			if (document.getElementById(idr).style.display != "block") {
				document.getElementById(idr).style.display="block";
				document.getElementById(img).style.background="url('./moins.gif')";
			} else {
				document.getElementById(idr).style.display="none";
				document.getElementById(img).style.background="url('./plus.gif')";
			}
		}
	} else if (document.all) {
		if (document.all[idr]) {
			if (document.all[idr].style.display != "block") {
				document.all[idr].style.display="block";
				document.all[img].style.background="url('./images/moins.gif')";
			} else {
				document.all[idr].style.display="none";
				document.all[img].style.background="url('./images/plus.gif')";
			}
		}
	} else if (document.layers) {
		if (document.layers[idr]) {
			if (document.all[idr].style.display != "block") {
				document.layers[idr].style.display="block";
				document.layers[img].style.background="url('./images/moins.gif')";
			} else {
				document.layers[idr].style.display="none";
				document.layers[img].style.background="url('.images//plus.gif')";
			}
		}
	}	
}