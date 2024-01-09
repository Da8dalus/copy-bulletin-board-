
$(document).ready(function() {
   $.ajax({
      type: "GET",
      url: "../resources/accounts.json",
      dataType: "json",
      success: function(responseData, status){ 
         var output = '';  
         $.each(responseData.educator, function(i, item) {
            if (item.username == "KC"){ 
               $.each(item.classes, function(i, group){
                  output += '<button class="classes" onclick="return displayFeed(\'' + group + '\')">' + group + "</button>";

               });
            }
         });

         $(".tab").prepend(output)
      }, error: function(msg) {
         alert("There was a problem: " + msg.status + " " + msg.statusText);
      }
   });


});