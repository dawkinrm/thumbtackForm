function validateForm()
{
var a=document.forms["signup"]["username"].value;
var b=document.forms["signup"]["pass"].value;
var c=document.forms["signup"]["passTwo"].value;
var x=document.forms["signup"]["email"].value;
var atpos=x.indexOf("@");
var dotpos=x.lastIndexOf(".");

if (a==null || a=="")
  {
  alert("Username is required!");
  return false;
  }
  
if (b==null || b=="")
  {
  	alert ("Password is required!");
  	return false;
  }

if ( c==null || c=="" || c!=b )
  {
  	alert ("Passwords do not match!");
  	return false;
  }
  
if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length)
  {
  alert("Not a valid e-mail address");
  return false;
  }
}
