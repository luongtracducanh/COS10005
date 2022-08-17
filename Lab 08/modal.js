/* function showPwdWin will show the Password Rule window */
function showPwdWin() {
	var pwdHelpWin = document.getElementById("pwdHelpWin"); /*get element "pwdHelpWin" */
	var scrnOverlay = document.getElementById("scrnOverlay");	/*get element "scrnOverlay" */

	pwdHelpWin.style.display = "block";    			/*display element pwdHelpWin*/
	scrnOverlay.style.visibility = "visible";  		/*show element scrnOverlay */
}

/* function hidePwdWin will hide the Password Rule window */
function hidePwdWin() {
	var pwdHelpWin = document.getElementById("pwdHelpWin"); 	/*get element "pwdHelpWin" */
	var scrnOverlay = document.getElementById("scrnOverlay");  /*get element "scrnOverlay" */

	pwdHelpWin.style.display = "none";  	/* hide element pwdHelpWin by setting the CSS property display as "none" */

	scrnOverlay.style.visibility = "hidden";  	/* display element scrnOverlay by setting the CSS property visibility as "hidden" */
}
/* link functions to appropriate events of corresponding HTML elements*/
function init() {
	/* link the variables to the HTML elements */
	var pwdHelpBtn = document.getElementById("pwdHelpBtn");  /* get element "pwdHelpBtn" */
	var pwdHelpClose = document.getElementById("pwdHelpClose");  /* get element "pwdHelpClose" */

	pwdHelpBtn.onclick = showPwdWin;	/* link function showPwdWin to the onclick event of button pwdHelpBtn */
	pwdHelpClose.onclick = hidePwdWin;   	/* links function hidePwdWin to the onclick event of button pwdHelpClose*/
}

/* execute the initialisation function once the window*/
window.onload = init;
