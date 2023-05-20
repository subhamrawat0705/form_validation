function seterror(id,error)
{
//sets error inside tag of id 

    element= document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;
 
}
function clearErrors()
{
    errors = document.getElementsByClassName('formerror');
    for(let item of errors)
    {
        item.innerHTML=  "";
    }
}
function validateForm()
{  var returnval = true;
    clearErrors();

    // perform validation and if validation fails, set the value of returnval to false.
   var name = document.forms['myForm']['fname'].value;
   if (name.length<3)
      {
        seterror("name","*length of name is too short!");
        returnval = false;
      }
   var name = document.forms['myForm']['fname'].value;   
    if(name.length>20)
    {
        seterror("name","length of name is too big!");
        returnval = false;
    }  
//    if (name.length == 0)
//       {
//         seterror("name","*Length of the name cannot be zero");
//         returnval = false;
//       }   
   var email = document.forms['myForm']["femail"].value;
   if (email.length>20)
      {
        seterror("email","*Email length is too long!");
        returnval = false;
      }

   var phone = document.forms['myForm']["fphone"].value;
   if(phone.length!=10)
      {
        seterror("phone","*Length of phone number should be 10 digits!");
        returnval = false;
      }

  var password = document.forms['myForm']['fpass'].value;
   if(password.length < 6||password.length > 8)
   {
    seterror("pass"," *Password should be atleast 6 character or 8 charecter long!");
    returnval = false;
   }
  var cpassword = document.forms['myForm']['fcpass'].value;
  if (cpassword != password)
  {
    seterror("cpass","*Password and Conform password should match!")
    returnval = false;
  }

   return returnval;
}