window.addEventListener ("load", Main, false);

function Main(evt) {
	var forms=document.querySelectorAll("form");
	for(var i=0;i<forms.length;i++){
		var f=forms[i];
		f.setAttribute("autocomplete","on");
		var els=f.elements;
		for(var j=0;j<els.length;j++){
			var e=els[j];
			e.setAttribute("autocomplete","on");
		}	
	}
}