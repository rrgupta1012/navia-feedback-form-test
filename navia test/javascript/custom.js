
$(document).ready(function(){
$("#submit").click(function(){

    /* form validation start*/
	var x = document.forms["feedbackform"]["name"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }

    var y = document.forms["feedbackform"]["email"].value;
    if (y == "") {
        alert("email must be filled out");
        return false;
    }

    var n = document.forms["feedbackform"]["contact-number"].value;
         
        if (n == "") {
        alert("conact number must be filled out");
        return false;
    }
    else
    {  
    	var l = n.length;
    	 if (l <10 | l>10) {
        alert("please fill a valid mobile number ");
        return false;
    }
    }


        var z = document.forms["feedbackform"]["patient-status"].value;
    if (z == "") {
        alert("status must be filled out");
        return false;
    }

    var w = document.forms["feedbackform"]["result"].value;
    if (w == "") {
        alert("result must be filled out");
        return false;
    }

    /* end of form validation*/

    /*start function after succesfull submission*/
   document.write("<h1>thank you for your response</h1>");
   /* end function after succesfull submission*/
});

});

