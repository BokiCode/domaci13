$(document).ready(function () {

    $("#clickButton").click(function () {
        console.log("test");
    });

    $(".anchorLink").click(function () {
        $(this).css({
            backgroundColor: "red",
            color: "white"
        });
    });
    $("#hideParagraph").click(function () {
        $("#paragraph").slideToggle();
    });

});