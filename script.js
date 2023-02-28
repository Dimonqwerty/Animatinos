$(document).ready(function () {
    var box = $('#box2');
    $('#moveSquare').click(function () {
        box.animate({
            left: 300
        })
        box.animate({
            top: 300
        })
        box.animate({
            left: 0
        })
        box.animate({
            top: 0
        })
    })
    $('#moveTriangle').click(function () {
        box.animate({
            left: 150
        })
        box.animate({
            left: 270,
            top: 240
        })
        box.animate({
            left: 0
        })
        box.animate({
            left: 150,
            top: 0
        })
    })
    let triger = true
    $("#moveToggle").click(function () {
        if (triger) {
            box.animate({
                width: 400,
                height: 400,
                opacity: 0.1
            })
            triger = false
        } else {
            box.animate({
                width: 100,
                height: 100,
                opacity: 1
            })
            triger = true
        }
    })
})