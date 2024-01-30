$(document).ready(function () {
    //
    // $("#clickButton").click(function () {
    //     console.log("test");
    // });
    //
    // $(".anchorLink").click(function () {
    //     $(this).animate({
    //         backgroundColor: "red",
    //         color: "white"
    //     }, 2000);
    // });
    // $("#hideParagraph").click(function () {
    //     $("#paragraph").slideToggle();
    // });

    $("#hideTextButton").click(function () {
        let currentText = $(this).text();
        if (currentText === "Hide Text") {
            $(this).text("Show Text");
        } else {
            $(this).text("Hide Text");
        }
        $(".readLess").toggle();
    });

});