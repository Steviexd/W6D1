

$(document).ready(function () {

    $(".button").click(function() {

       let current_theme = $("html").attr("data-theme");
        console.log(current_theme);
    if(current_theme == "dark") {
        $('html').attr('data-theme', "light");
    }

    else if(current_theme == "light"){
        $('html').attr('data-theme', "dark");
    }

    });

    });




    
      

    