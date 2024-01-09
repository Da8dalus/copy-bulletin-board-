function createPost(formObj) {
   var messages = [];
   var empty = false;
   var focus = false;
   var postInfo = {"comment" : "", "title" : "", "attachment" : "", "img" : ""}

   if (formObj.firstName.value == "") {
      messages.push("You must enter a title");
      empty = true;
      if (focus == false){
         formObj.firstName.focus();
         focus = true;
      }
   }
   else{
      postInfo.title = formObj.firstName.value
   }
   
   if (formObj.comments.value == "") {
      messages.push("You must enter a comment");
      empty = true;
      if (focus == false){
         formObj.comments.focus();
         focus = true;
      }
   }
   else{
      postInfo.comment = formObj.comments.value
   }



   if (empty == true){
      messages = messages.join("\n");
      alert(messages);
      return false;
   }
   else{
      window.location = "../teacherHome.html"
      // $.ajax({
      //    type: "POST",
      //    url: "../../resources/classPost.json", 
      //    contentType: "application/json",
      //    data: (postInfo),
      //    success: function(response) {
      //       alert("Form was successfully submitted");
      //    },
      //    error: function(error) {
      //       alert("There was a problem: " + msg.status + " " + msg.statusText);
      //    }
      // });
   }
}

