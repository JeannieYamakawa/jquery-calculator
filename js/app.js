$(document).ready(function(){

var $screen = $("#screen")
var $buttons = $(".buttons")
var $clear = $("#clear")
var $equals = $("#equals")



$buttons.on("click", "span", function(e){
    e.preventDefault()
    var value = $(this).text()
    if ($screen.text() === "Error"){
    $screen.text("Error")
    }
    else if (value === "=" || value === "C"){
        $screen.text($screen.text())
    }
    else if (value === "÷"){
    value = "/"
    $screen.text($screen.text()+ value)
    }
    else if (value === "x"){
    value = "*"
    $screen.text($screen.text()+ value)
    }
    else{
    $screen.text($screen.text()+ value)
    }
})


$clear.on("click", function(e){
    $screen.text("")
})



$equals.on("click", function(e){
    var $result = eval($screen.text())
    if ($result == "Infinity"){
        $screen.text('Error')
    }
    else if($result == "Error"){
        $screen.text('Error')
    }
    else {
        $screen.text(eval($screen.text()))
    }
})









// If the screen displays the message Error, don't append anything.
// Click the clear button to remove all the text from the screen.
// Click the equals button to evaluate the arithmetic expression shown in the screen.
// If the expression is in format operand(+|-|x|÷)operand, evaluate the expression and update the screen with the result.
// If the expression isn't in the correct format or when attempting to divide by zero, update the screen with the message Error.








})
