
// numbers
const zero = document.getElementById("zero")
const one = document.getElementById("one")
const two = document.getElementById("two")
const three = document.getElementById("three")
const four = document.getElementById("four")
const five = document.getElementById("five")
const six = document.getElementById("six")
const seven = document.getElementById("seven")
const eight = document.getElementById("eight")
const nine = document.getElementById("nine")
// operators
const plus = document.getElementById("plus")
const minus = document.getElementById("minus")
const times = document.getElementById("times")
const divides = document.getElementById("divides")
const equals = document.getElementById("equal")
const clear = document.getElementById("clear")

let expression = ""
let result = document.getElementById("result")
let choice = document.getElementById("choice")

function read_input() {
    zero.addEventListener("click", () => add_to_expression("0"))
    one.addEventListener("click", () => add_to_expression("1"))
    two.addEventListener("click", () => add_to_expression("2"))
    three.addEventListener("click", () => add_to_expression("3"))
    four.addEventListener("click", () => add_to_expression("4"))
    five.addEventListener("click", () => add_to_expression("5"))
    six.addEventListener("click", () => add_to_expression("6"))
    seven.addEventListener("click", () => add_to_expression("7"))
    eight.addEventListener("click", () => add_to_expression("8"))
    nine.addEventListener("click", () => add_to_expression("9"))

    plus.addEventListener("click", () => add_to_expression("+"))
    minus.addEventListener("click", () => add_to_expression("-"))
    times.addEventListener("click", () => add_to_expression("*"))
    divides.addEventListener("click", () => add_to_expression("/"))

    clear.addEventListener("click", () => clear_expression())
    equals.addEventListener("click", () => calculate_expression())
}

function add_to_expression (n) {
    expression += n
    result.innerHTML = expression
}

function clear_expression() {
    expression = ""
    result.innerHTML = ""
}

function calculate_expression() {
    if (choice == "Infix") 
    {
        return
    } 
    else if (choice == "Prefix")
    {
        return
    } 
    else if (choice == "Postfix") 
    {
        return
    }
}

function calculate_prefix_expression() {

}



read_input()




