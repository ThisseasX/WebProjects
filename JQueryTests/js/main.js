window.onload = function () {
    names = [
        "MouseEnter",
        "MouseOver"
    ]

    $(names).each(function (index, elem) {
        $("body").append($("<div>")
            .attr("id", elem)
            .attr("class", "outer"))
    })

    $("body").append($("<div>")
        .attr("id", "count"));

    $(".outer").each(function (index) {
        $("<div>")
            .text(names[index])
            .addClass("inner")
            .appendTo(this);
    })

    var i = 0;
    const animationDelay = 100;

    $("#" + names[0]).on("mouseenter", function () {
        i++;
        $("#count").text(i).fadeIn(animationDelay);
        $(this).css("color", "magenta");
    }).mouseleave(function () {
        i++;
        $("#count").text(i).fadeOut(animationDelay);
        $(this).css("color", "black")
    });

    $("#" + names[1]).mouseover(function () {
        i++;
        $("#count").text(i).fadeIn(animationDelay);
        $(this).css("color", "magenta")
    }).mouseout(function () {
        i++;
        $("#count").text(i).fadeOut(animationDelay);
        $(this).css("color", "black")
    });
}