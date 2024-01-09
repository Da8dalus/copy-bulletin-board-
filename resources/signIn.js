function signIn(formObj) {
   const username = formObj.username.value;
   const password = formObj.password.value;

   if (!username) {
      alert("You must enter a username");
      formObj.username.focus();
      return false;
   }

   if (!password) {
      alert("You must enter and confirm a password");
      formObj.password.focus();
      return false;
   }

   $.ajax({
      type: "GET",
      url: "../../resources/accounts.json",
      dataType: "json",
      success: function(responseData, status) {
         const foundUser = checkCredentials(responseData.parent, username, password);

         if (foundUser) {
            window.location.href = "parent/parentHome.html";
         } else {
            const foundTeacher = checkCredentials(responseData.educator, username, password);

            if (foundTeacher) {
               window.location.href = "teacher/teacherHome.html";
            } else {
               alert("Account not found");
            }
         }
      },
      error: function(error) {
         alert("There was a problem: " + error.status + " " + error.statusText);
      }
   });

   return false;
}

function checkCredentials(users, inputUsername, inputPassword) {
   let found = false;

   $.each(users, function(i, info) {
      if (info.username === inputUsername && info.password === inputPassword) {
         found = true;
         return false; 
      }
   });

   return found;
}
