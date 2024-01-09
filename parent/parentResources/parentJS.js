
$(document).ready(function() {
   $.ajax({
      type: "GET",
      url: "../resources/accounts.json",
      dataType: "json",
      success: function(responseData, status){ 
         var output = '';  
         $.each(responseData.parent, function(i, item) {
            if (item.username == "Jonathan"){ 
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


// function displayFeed(group){
//    $.ajax({
//       type: "GET",
//       url: "../resources/classPosts.json",
//       dataType: "json",
//       success: function(responseData, status){
//          var output = '<ul>';  
//          $.each(responseData.group, function(i, post) {

//             output += '<li class="post"><a href="' + post.attachment + '">' + post.title + "</a><br>" + post.comment + "</li>";
//             if (post.comment != ''){
//                output += '<br>' + post.comment;
//             }
//             output += "</li>";
//          });
//          output += "</ul>"; 
//          $("#ITWS").prepend(output)
//       }, error: function(msg) {
//          alert("There was a problem: " + msg.status + " " + msg.statusText);
//       }
//    });
// }