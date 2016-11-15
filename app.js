$(document).ready(function() {

// Step 1: Bind a click event to the .box class
// Step 2: Check if square is empty
// Step 3: Change turn
// Step 4: Update the HTML with the appropriate letter

// Start off app with currentTurn = X
    var currentTurn = "X";

// Bind a click event to all squares
    $(".box").on("click", function() {
        // console.log($(this).html(), "LETTER SELECTED");

        // Check to see if inner HTML is empty, if so continue logic
        if($(this).html() === "") {
            // Set the HTML of the empty element to whatever the turn is
            $(this).html(currentTurn);

            // Flip the turn to the next player
            if (currentTurn === "X") {
                currentTurn = "O";
            } else {
                currentTurn = "X";
            }
        }
    });










    $(document).on("click", "box", function() {
    alert($(this).html());
});

    var mySquare = $(".tic-cell");

    mySquare.on("click", function() {
        $(this).html("<h1>X</h1>");
    });

});


// var $boxes = $(".boxes");
// var flag = 0;
//
// $boxes.on("click", function() {
//     if (!$(this).hasClass("done")) {
//         if (flag === 0) {
//             $(this).html("X");
//             flag = 1;
//             $(this).addClass("done");
//         } else {
//             $(this).html("0");
//             flag = 0;
//             $(this).addClass("done");
//         }
//     }
// }
