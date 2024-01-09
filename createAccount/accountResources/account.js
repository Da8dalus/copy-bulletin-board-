
function createAccount(formObj) {
   var messages = [];
   var empty = false;
   var focus = false;
   var accountInfo = {"username" : "", "email" : "", "password" : "", "educator" : false}

   if (formObj.username.value == "") {
      messages.push("You must enter a username");
      empty = true;
      if (focus == false){
         formObj.username.focus();
         focus = true;
      }
   }
   else{
      accountInfo.username = formObj.username.value
   }
   
   if (formObj.email.value == "") {
      messages.push("You must enter an email");
      empty = true;
      if (focus == false){
         formObj.email.focus();
         focus = true;
      }
   }
   else{
      accountInfo.email = formObj.email.value
   }
// check confirm password
   if ((formObj.password.value == "" || "" == formObj.confirm.value) && formObj.password.value == formObj.confirm.value) {
      messages.push("You must enter and confirm password");
      empty = true;
      if (focus == false){
         formObj.password.focus();
         focus = true;
      }}
   else{
      accountInfo.password = formObj.password.value
   }

   if (formObj.educator.value == "") {
      messages.push("You must enter if you are an educator");
      empty = true;
      if (focus == false){
         formObj.educator.focus();
         focus = true;
      }
   }
   else{
      if (formObj.educator.value == "y"){
         accountInfo.educator = true
      }
   }

   if (empty == true){
      messages = messages.join("\n");
      alert(messages);
      return false;
   }
   else{
      
      // $.ajax({
      //    type: "POST",
      //    url: "../../resources/accounts.json",
      //    dataType: "json",
      //    data: JSON.stringify(accountInfo),
      //    success: function(data, status){
      //       $.getJSON("../../resources/accounts.json", function(existingData) {

      //          if (accountInfo.educator) {
      //             existingData.educator.push({
      //                "username": accountInfo.username,
      //                "email": accountInfo.email,
      //                "password": accountInfo.password
      //             });
      //             alert("Form was successfully submitted")
      //          } else {
      //             existingData.parent.push({
      //                "username": accountInfo.username,
      //                "email": accountInfo.email,
      //                "password": accountInfo.password
      //             });
      //             alert("Form was successfully submitted")
      //          }

      //       })
            
      //    }, error: function(msg) {
      //       alert("There was a problem: " + msg.status + " " + msg.statusText);
      //    }
      // });
      $.ajax({
         type: "POST",
         url: "../../resources/accounts.json", 
         contentType: "application/json",
         data: (accountInfo),
         success: function(response) {
            alert("Form was successfully submitted");
            window.location = "../signIn.html";
         },
         error: function(error) {
            alert("There was a problem: " + msg.status + " " + msg.statusText);
         }
      });
   }
}

