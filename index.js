//----------social navigation pro---

// console.log(document.doctype);
// console.log(document.title);

// let popup = document.getElementById("social-pro");
// let popupkey= document.getElementById("social-icon");

// popupkey.addEventListener('click',function(){
//     popup.classList.remove("nav-off");
//     popup.classList.add("open-nav-5");
// });

// popup.addEventListener('mouseleave', function(){
//     popup.classList.remove("open-nav-5");
//     popup.classList.add("nav-off");
// });


$(document).ready(function(){
    $("#social-icon").click(function(){
        $("#social-pro").toggleClass("nav-off open-nav-5");
    });
    $("#m-menu").click(function(){
        $("#m-menu-open").toggleClass("m-menu-closed m-menu-open");
        $("body").toggleClass("m-menu-closed m-menu-open");
    });
    $("#m-menu-close").click(function(){
        $("#m-menu-open").toggleClass("m-menu-closed m-menu-open");
    });
});

//----add HTML External-----------//
