


// arr = ['name','email', 'number']



// console.log(arr);

// for(let i=0; i<arr.length; i++) {
//     if (arr[i] == 0) {
//         console.log('Please Fill Out Required Fields')
//     }
// }

$(document).ready(function () {
    $("#submit").on("click", function (e) {

  required = [$("#name"),$("#email"),$("number") ]

      let message = $("#message").html("Please Fill Out");
  
      for (i = 0; i < required.length; i++) {
        if (required[i].val() == 0) {
          message.addClass("warning");
          required[i].prev().addClass("warning");
        }
        if (required[i].val () !== 0){
            required[i].prev().removeClass('warning');
            }
        if (!$("label").hasClass("warning")) {
            $("#form").remove();
            $('h2').html('Thanks for your feedback!')
        }
      }
    });
  });