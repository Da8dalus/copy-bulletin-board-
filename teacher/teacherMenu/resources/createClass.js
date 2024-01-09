function createClass(formObj) {
   var messages = [];
   var empty = false;
   var focus = false;
   var classInfo = {"name" : "", "description" : "", "attachment" : "", "img" : ""}

   if (formObj.Name.value == "") {
      messages.push("You must enter a title");
      empty = true;
      if (focus == false){
         formObj.Name.focus();
         focus = true;
      }
   }
   else{
      classInfo.name = formObj.Name.value
   }
   
   if (formObj.comments.value == "") {
      messages.push("You must enter a description");
      empty = true;
      if (focus == false){
         formObj.comments.focus();
         focus = true;
      }
   }
   else{
      classInfo.description = formObj.comments.value
   }



   if (empty == true){
      messages = messages.join("\n");
      alert(messages);
      return false;
   }
   else{
      window.location.href = "../teacherHome.html"
      // $.ajax({
      //    type: "POST",
      //    url: "../../resources/classPost.json", 
      //    contentType: "application/json",
      //    data: (classInfo),
      //    success: function(response) {
      //       alert("Form was successfully submitted");
      //    },
      //    error: function(error) {
      //       alert("There was a problem: " + msg.status + " " + msg.statusText);
      //    }
      // });
   }
}

