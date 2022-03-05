$(document).ready(function(){
    $(".nav-item").on("click","a", function (event) {

        // $(this) - получаем текущий объект, на котором было вызвано событие. 
        if($(this).hasClass("ty")){

        }
        else{
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1000);
        }
        
    });

    
});