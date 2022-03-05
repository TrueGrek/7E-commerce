$(document).ready(function(){
    $(".nav-item").on("click","a", function (event) {

        // $(this) - получаем текущий объект, на котором было вызвано событие. 
        if($(this).hasClass("ty")){

        }
        else{
            event.preventDefault();
            window.location.href='index.html';

        }
        
    });
});