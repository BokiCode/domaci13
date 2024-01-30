$(document).ready(function () {
    $("#addButton").click(function () {
        let num1 = parseInt($("#num1").val());
        let num2 = parseInt($("#num2").val());
        $("#resultHolder").html(num1 + num2);
    });
    $("#multiplyButton").click(function () {
        let num1 = parseInt($("#num1").val());
        let num2 = parseInt($("#num2").val());
        if (num1 !== 0 && num2 !== 0) {
            $("#resultHolder").html(num1 * num2);
        } else {
            $("#resultHolder").html("Ne mozete mnoziti sa nulom!");
        }
    });
    $("#divideButton").click(function () {
        let num1 = parseInt($("#num1").val());
        let num2 = parseInt($("#num2").val());
        if (num2 !== 0) {
            $("#resultHolder").html(num1 / num2);
        } else {
            $("#resultHolder").html("Ne mozete deliti sa nulom!");
        }
    });
    $("#subtractButton").click(function () {
        let num1 = parseInt($("#num1").val());
        let num2 = parseInt($("#num2").val());
        $("#resultHolder").html(num1 - num2);
    });
});