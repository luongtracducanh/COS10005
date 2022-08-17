/* write functions that define the action for each event */
function validate() {
	var sid = document.getElementById("sid").value;
	var pwd1 = document.getElementById("pwd1").value;
	var pwd2 = document.getElementById("pwd2").value;
	var uname = document.getElementById("uname").value;
	/* __(1)__ */
	var genm = document.getElementById("genm").checked;
	var genf = document.getElementById("genf").checked;

	var errMsg = "";								/* stores the error message */
	var result = true;							/* assumes no errors */
	var pattern = /^[a-zA-Z ]+$/;		/* regular expression for letters and spaces only */

	/* Rule 1, check if all required inputs have value */
	/* __(2)__ */
	if (sid == "") {
		errMsg += "User ID cannot be empty.\n";
	}
	if (pwd1 == "") {
		errMsg += "Password cannot be empty.\n";
	}
	if (pwd2 == "") {
		errMsg += "Retype password cannot be empty.\n";
	}
	if (uname == "") {
		errMsg += "User name cannot be empty.\n";
	}
	if ((genm == "") && (genf == "")) {
		errMsg += "A gender must be selected.\n";
	}

	/* Rule 2, check if the user ID contains an @ symbol  */
	/* __(3)__ */
	if (sid.indexOf('@') == 0) {
		errMsg += "User ID cannot start with an @ symbol.\n";
	}
	if (sid.indexOf('@') < 0) {
		errMsg += "User ID must contain an @ symbol.\n";
	}

	/* Rule 3, check if password and retype password are the same */
	if (pwd1 != pwd2) {
		errMsg += "Passwords do not match.\n";
	}

	/* Rule 4, check if user name contains only letters and spaces */
	if (!uname.match(pattern)) {
		errMsg += "User name contains symbols.\n";
	}

	/* Display error message any error(s) is/are detected */
	if (errMsg != "") {
		alert(errMsg);
		result = false;
	}
	return result;
}

/* link HTML elements to corresponding event function */
function init() {
	/* link the variables to the HTML elements */
	var regForm = document.getElementById("regform");

	/* assigns functions to corresponding events */
	regForm.onsubmit = validate;
}

/* execute the initialisation function once the window*/
window.onload = init;