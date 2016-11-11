$(document).ready(function() {

    $(document).on("click", ".tic-cell", function() {
    alert($(this).html());
});

    var mySquare = $(".tic-cell");

    mySquare.on("click", function() {
        $(this).html("<h1>X</h1>");
    });

});
