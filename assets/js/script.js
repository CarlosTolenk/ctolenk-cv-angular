/*
 Theme Name: Mr.Lancer cv/resume personal template  - script.js
 Author: Phoenixcoded
 Site URL   :   http://www.phoenixcoded.com
 Follow us  :   https://themeforest.net/user/phoenixcoded

 Version: 1.0
 */

$(document).ready(function(){

    /*=======Side-bar Menu Starts ======= */
    var $window = $(window);
    $window.resize(function resize() {
        var toggleSide = true;
        if ($window.width() <= 1340) {
            $('body nav').css('left','-94px');       
          
        }
        else{
            $('body nav').css('left','0');      
        
        }
        $('#toggle_icon').on('click',function(){
            $(this).toggleClass('open');    
            toggleSide = !toggleSide;
            if(!toggleSide){         
                $('body nav').animate({
                    opacity: 1,
                    left: "0",                  
                  }, 500, function() {            
                //   console.log("ready");
                });      
                  
              
            }else{
              
                $('body nav').animate({
                    opacity: 1,
                    left: "-94",                  
                  }, 500, function() {            
                //   console.log("ready");
                });  
                
            }
                
        });
    }).trigger('resize');
    /*======= Side-bar Menu Ends ======= */

    /*Preloader Starts*/
    $(window).on('load',function(){
        $('#main_loader').fadeOut('slow');
    });
    /*Preloader Ends*/


    /*======= Banner ============*/
    $(".jumbotron").css({ height: $(window).height() + "px" });

    $(window).on("resize", function() {
    $(".jumbotron").css({ height: $(window).height() + "px" });
    });


});

/*======= Toggle Button Event js Starts ======= */
var sides = ["left", "top", "right", "bottom"];

// Initialize sidebars
for (var i = 0; i < sides.length; ++i) {
    var cSide = sides[i];
    console.log(cSide);
    $(".sidebar." + cSide).sidebar({side: cSide});
}

// Click handlers
$("#sidebar-btn").on("click", function () {
    var $this = $(this);
    var action = $this.attr("data-action"); 
    var side = $this.attr("data-side");
    $(".sidebar." + side).trigger("sidebar:" + action);
    return false;
});

/* ----------------------------------------
 Contact Form
 -------------------------------------------
 */

$("#submit-form").on("click", function(){
    send_form();
    return false;
});

function send_form(){

    //Firstname
    var input_first_name=$("input#first_name");
    var first_name =input_first_name.val();
    if (first_name == "") {
        input_first_name.focus();
        input_first_name.attr("placeholder", "Name must required");
        return false;
    }
    //Email
    var input_contact_email=$("input#contact_email");
    var email =input_contact_email.val();
    if (email == "") {
        input_contact_email.focus();
        input_contact_email.attr("placeholder", "Email address must required");
        return false;
    }
    else
    {
        var atpos = email.indexOf("@");
        var dotpos = email.lastIndexOf(".");
        if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length) {
            alert("Not a valid e-mail address");
            input_contact_email.focus();
            input_contact_email.attr("placeholder", "Please enter valid email address");
            return false;
        }
    }
    //Subject
    var input_subject=$("input#subject");
    var subject =input_subject.val();
    if (subject == "") {
        input_subject.focus();
        input_subject.attr("placeholder", "Subject must required..");
        return false;
    }

    //Message
    var contact_message=$("#contact_message");
    var message = contact_message.val();
    if (message == "") {
        contact_message.focus();
        contact_message.attr("placeholder", "Message field must required");
        return false;
    }
    //Datastring pass to mail.php
    var dataString = '&Name=' + first_name + '&subject=' + subject + '&email=' + email + '&message=' + message;
    var form = $(this);
    form.serialize();
    $.ajax({
        type: "POST", url: "mail/mail.php",	data: dataString, success: function() {
            alert('Thanks for your contact. Our team contact you soon as possible');
            $("#submit-form").attr('disabled','true');
        }
    });



    	/*Magnific Pop-Up Js starts*/
	$('#video_modal').magnificPopup({
		type: 'iframe',
		closeOnBgClick: false,
		iframe: {
			markup: '<div class="mfp-iframe-scaler">'+
			'<div class="mfp-close"></div>'+
			'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
			'<div class="mfp-title">Some caption</div>'+
			'</div>'
		},
		callbacks: {
			markupParse: function(template, values, item) {
				values.title = item.el.attr('title');
			}
		},
		removalDelay: 300,
		mainClass: 'mfp-fade'
	});
	/*Magnific Pop-Up Js ends*/

	/*Counter Js Starts*/

	$('.counter').counterUp({
		delay: 10, // the delay time in ms
		time: 900 // the speed time in ms
	});
    /*Counter Js Ends*/
    

    
}