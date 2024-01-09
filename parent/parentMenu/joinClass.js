
function joinClass(formObj) {

   var messages = [];
   var empty = false;
   var focus = false;

   if (formObj.classCode.value == "") {
      messages.push("You must enter a class code");
      empty = true;
      formObj.classCode.focus();
      focus = true;
   }

   if (empty == true){
      messages = messages.join("\n");
      alert(messages);
      return false;
   }
   else{
      $.ajax({
         type: "POST",
         url: "../../resources/accounts.json",
         dataType: "json",
         success: function(responseData, status){
            var output = '<ul> <li class="labTitle">ITWS Labs: </li>';  
            $.each(responseData.labItems, function(i, labItems) {
   
               output += '<li class="labList"><a href="' + labItems.loc + '">' + labItems.Title + ":</a> " + labItems.description + "</li>";
   
            });
            output += "</ul>"; 
            $("#ITWS").prepend(output)
         }, error: function(msg) {
            alert("There was a problem: " + msg.status + " " + msg.statusText);
         }
      });
      alert("Form was successfully submitted")
      return true;
   }
}

