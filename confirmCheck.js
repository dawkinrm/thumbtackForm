function validateForm()
{
var a=document.forms["signup"]["username"].value;
var b=document.forms["signup"]["pass"].value;
var c=document.forms["signup"]["passTwo"].value;
var d=document.forms["signup"]["email"].value;
var atpos=d.indexOf("@");
var dotpos=d.lastIndexOf(".");

var x=a.search(/\s/);

if (a==null || a=="")
	{
		alert("Username is required!");
		return false;
	}
	
if (x > -1)
	{
		alert("Not a valid username!");
		return false;
	}
  
if (b==null || b=="")
	{
  		alert ("Password is required!");
  		return false;
	}

if (c==null || c=="" || c!=b)
	{
  		alert ("Passwords do not match!");
  		return false;
	}
  
if (d==null || d=="")
	{
		alert ("E-mail is required!");
		return false;
	}	
  
if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length)
	{
  		alert("Not a valid e-mail address");
  		return false;
	}
}
