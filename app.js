//sticky-top js
// var height = $('#hamburger').height();

// $(window).scroll(function(){
//     if($(this).scrollTop() > height){
//         $('.navbar').addClass('fixed');
//     } else{
//         $('.navbar').removeClass('fixed');
//     }
// })

//back to top btn
const toTop = document.querySelector(".top-btn");

window.addEventListener("scroll", () =>{
    if(window.pageYOffset > 100){
        toTop.classList.add("active");
    }else{
        toTop.classList.remove("active");
    }
})

// dropdown menu for skill section
const modalViews = document.querySelectorAll('.service-modals'),
    modalBtns = document.querySelectorAll('.service-modals-view'),
    modalCloses = document.querySelectorAll(".service-modals-close");

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}
modalBtns.forEach((modalBtn, i)=>{
    modalBtn.addEventListener('click',()=>{
        modal(i)
    })
    
})

modalCloses.forEach((modalClose)=>{
    modalClose.addEventListener('click',()=>{
        modalViews.forEach((modalView) =>{
            modalView.classList.remove('active-modal')
        })
    })
    
})

//smtp email section
function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "nashedshah.2016@gmail.com",
        Password : "Nashed22@",
        To : 'nashedshah@gmail.com',
        From : document.getElementById("email").value,
        Subject : "Enquiry about a new project",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}


jQuery(document).ready(function(){

    jQuery(".show").click(function(){
        jQuery(".sidebar").show(2000);
        jQuery(".show").hide();
        jQuery(".hide").show();

    });

    jQuery(".hide").click(function(){
        jQuery(".sidebar").hide(2000);
        jQuery(".show").show();
        jQuery(".hide").hide();

    });

    jQuery(".skill-down").click(function(){
        jQuery(".ui-ux-dropdown").show(2000);
        jQuery(".skill-up").show();
        jQuery(".skill-down").hide();
    });

    jQuery(".skill-up").click(function(){
        jQuery(".ui-ux-dropdown").hide(2000);
        jQuery(".skill-down").show();
        jQuery(".skill-up").hide();
    });

    jQuery(".skill-down1").click(function(){
        jQuery(".frontend-dropdown").show(2000);
        jQuery(".skill-up1").show();
        jQuery(".skill-down1").hide();
    });

    jQuery(".skill-up1").click(function(){
        jQuery(".frontend-dropdown").hide(2000);
        jQuery(".skill-down1").show();
        jQuery(".skill-up1").hide();
    });

    jQuery(".skill-down2").click(function(){
        jQuery(".mobile-dropdown").show(2000);
        jQuery(".skill-up2").show();
        jQuery(".skill-down2").hide();
    });

    jQuery(".skill-up2").click(function(){
        jQuery(".mobile-dropdown").hide(2000);
        jQuery(".skill-down2").show();
        jQuery(".skill-up2").hide();
    });

    jQuery(".skill-down3").click(function(){
        jQuery(".web-design-dropdown").show(2000);
        jQuery(".skill-up3").show();
        jQuery(".skill-down3").hide();
    });

    jQuery(".skill-up3").click(function(){
        jQuery(".web-design-dropdown").hide(2000);
        jQuery(".skill-down3").show();
        jQuery(".skill-up3").hide();
    });

    // projects
    jQuery(".all-btn").click(function(){
        jQuery(".android-projects").show(2000);
        jQuery(".web-projects").show(2000);
        jQuery(".ui-projects").show(2000);
    });
    jQuery(".android-btn").click(function(){
        jQuery(".android-projects").show(2000);
        jQuery(".web-projects").hide(2000);
        jQuery(".ui-projects").hide(200);
    });
    jQuery(".web-btn").click(function(){
        jQuery(".android-projects").hide(2000);
        jQuery(".web-projects").show(2000);
        jQuery(".ui-projects").hide(200);
    });
    jQuery(".ui-btn").click(function(){
        jQuery(".android-projects").hide(2000);
        jQuery(".web-projects").hide(2000);
        jQuery(".ui-projects").show(200);
    });

});


    



