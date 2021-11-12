$(document).ready(function(){
    $("#signup-form").validate({
        rules:{
            email:{
                required:true,
                email:true
            },
            password:{
                required:true,
                minlength:8
            }
        },
        messages:{
            email:{
                required: "Enter email address"
            },
            password:{
                required:"please enter password",
                minlength:"Enter atleast 8 characters"
            }
        }
    })
})