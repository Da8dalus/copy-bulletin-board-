function displayFeed(group) {
   $(".box").empty();
   $.ajax({
      type: "GET",
      url: "../resources/classPosts.json",
      dataType: "json",
      success: function(responseData, status){
         var output = '<h3 id="title">' + group + '</h3>';  

         // Filter items based on the provided group
         var items = responseData[group];

         if (items) {
            $.each(items, function(i, item) {
               output += '<ul class="onePost"><li class="postTitle"><a href="' + item.attachment + '">' + item.title + '</a></li><li class="postContent">' + item.comment + '</li>';

               if (item.img !== ""){
                  output += '<li class="postImg"><img class="postPic" src="' + item.img + '" alt="' + item.title + '" height="600"></li>';
               }
               output += "</ul>"; 
            });
         } else {
            output += '<p class="postTitle">No posts available for this group.</p>';
         }

         
         $(".box").prepend(output);
      },
      error: function(msg) {
         alert("There was a problem: " + msg.status + " " + msg.statusText);
      }
   });
};
