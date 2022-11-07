function validate()
{
    var thePasstag = document.getElementById("password").value;
    var thePasstag2 = document.getElementById("password2").value;
    console.log(thePasstag);
    console.log(thePasstag2);
    if (thePasstag == thePasstag2)
    {
		let j = 0;
        for (let i = 0; i < thePasstag.length; i++)
        {
            j++;
        }
        if (j<=7)
        {
            return("Password not at least 8 characters long");
        }
		else
		{
        return("Password Validated!");
		}
    }
    else
    {
        return("Passwords entered do not match");
    }
}