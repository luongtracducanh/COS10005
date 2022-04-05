/* function validate()will validate form data */
		function validate() {
		var sid = $("#sid").val();
		var pwd1 = $("#pwd1").val();
		var pwd2 = $("#pwd2").val();
		var uname = $("#uname").val();
		var genm = $("#genm").prop("checked");
		var genf = $("#genf").prop("checked");

	var errMsg = "";								/* create variable to store the error message */
	var result = true;								/* assumes no errors */
	var pattern = /^[a-zA-Z ]+$/;					/* regular expression for letters and spaces only */

	/* Rule 1, check if all required date are entered */
	if (sid == "") { //check whether User ID is empty
		errMsg += "<li>User ID cannot be empty.</li>";
		}
		if (pwd1 == "") { //check whether Password is empty
		errMsg += "<li>Password cannot be empty.</li>";
		}
		if (pwd2 == "") { //check whether re-typed Password is empty
		errMsg += "<li>Retype password cannot be empty.</li>";
		}
		if (uname == "") { //check whether User Name is empty
		errMsg += "<li>User name cannot be empty.</li>";
		}
		if ((!genm)&&(!genf)) { //check whether gender is selected
		errMsg += "<li>A gender must be selected.</li>";
		}
		/* Rule 2, check if the user ID contains an @ symbol */
		if (sid.indexOf('@') == 0 ) {
		errMsg += "<li>User ID cannot start with an @ symbol.</li>";
		}
		if (sid.indexOf('@') < 0 ) {
		errMsg += "<li>User ID must contain an @ symbol.</li>";
		}
		/* Rule 3, check if password and retype password are the same */
		if (pwd1 != pwd2) {
		errMsg += "<li>Passwords do not match.</li>";
		}
		/* Rule 4, check if user name contains only letters and spaces */
		if (! uname.match (pattern)) {
		errMsg += "<li>User name contains symbols.</li>";
		}

	/* Display error message any error(s) is/are detected */
			if (errMsg != "") {
		errMsg = "<div id='scrnOverlay'></div>"                   //8.3
		+ "<section id='errWin' class='window'><ul>"
		+ errMsg                                                  //8.4
		+ "</ul><a href='#' id='errBtn' class='button'>Close</a></section>";
		var numOfItems = ((errMsg.match(/<li>/g)).length) + 6;    //8.5
		$("body").after(errMsg); //8.6
		$("#scrnOverlay").css('visibility', 'visible');           //8.7
		$("#errWin").css('height', numOfItems.toString() + 'em'); //8.8
		$("#errWin").css('margin-top', (numOfItems/-2).toString() + 'em'); //8.8
		$("#errWin").show(); //8.9
		$("#errBtn").click (function () { //8.10
		$("#scrnOverlay").remove();
		$("#errWin").remove();
		} );
		result = false;
		}
	return result;
}

function toggle (){
				$(this).parent().next().slideToggle(); 
				if ($(this).html() == "[-]"){ /* Update the symbol on the "button" */
				$(this).html("[+]");
				} else { /* [-] <-> [+] */
				$(this).html("[-]");
				}
				}
				/* link HTML elements to corresponding event function */
				function init() {
				$(".collapse").click(toggle); //link function toggle() to appropriate events
				$("#regform").submit(validate);/*link function validate() to the submit event
				of the form */
				}

/* link HTML elements to corresponding event function */

/* execute function init() once the window is loaded*/
$(document).ready(init);
