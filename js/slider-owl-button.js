$(document).ready(function() {

    var parent = document.querySelector(".owl-prev");
    var child = parent.querySelector("span");
    $(child).remove();

    var sliderBtn_img1 = $("<img src='../img/dec/Vector\ \(7\).png' class='slider-img__btn'>");
    $(parent).append(sliderBtn_img1);

    var parent2 = document.querySelector(".owl-next");
    var child2 = parent2.querySelector("span");
    $(child2).remove();

    var sliderBtn_img2 = $("<img src='../img/dec/Vector\ \(8\).png' class='slider-img__btn'>");
    $(parent2).append(sliderBtn_img2);



    // var abcd = document.querySelector("owl-next");
    // abcd.classList.add("owl-next__custom");



    // document.getElementsByTagName('p')

    // //событие, которое меняет элемент по нажатию
    // document.querySelectorAll('.text').forEach(function(el){
    //     el.addEventListener('click', function(event) {
    //         event.target.classList.toggle('malert')// без точки в классе
    //     })
    // })
});
