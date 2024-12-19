
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

let expression = []
let result = 0
let display_result = document.getElementById("result")
let choice = document.getElementById("choice")

function read_input() {
    zero.addEventListener("click", () => add_to_expression(0))
    one.addEventListener("click", () => add_to_expression(1))
    two.addEventListener("click", () => add_to_expression(2))
    three.addEventListener("click", () => add_to_expression(3))
    four.addEventListener("click", () => add_to_expression(4))
    five.addEventListener("click", () => add_to_expression(5))
    six.addEventListener("click", () => add_to_expression(6))
    seven.addEventListener("click", () => add_to_expression(7))
    eight.addEventListener("click", () => add_to_expression(8))
    nine.addEventListener("click", () => add_to_expression(9))

    plus.addEventListener("click", () => add_to_expression('+'))
    minus.addEventListener("click", () => add_to_expression('-'))
    times.addEventListener("click", () => add_to_expression("*"))
    divides.addEventListener("click", () => add_to_expression("/"))

    clear.addEventListener("click", () => clear_expression())
    equals.addEventListener("click", () => calculate_expression())
}

function add_to_expression (n) {
    expression.push(n)
    let str = ""
    for (element in expression) {
        str += element
    }
    display_result.innerHTML = str
}

function clear_expression() {
    expression = []
    display_result.innerHTML = ""
}

function print_result () {
    display_result.innerHTML = result
    result = 0
}

function calculate_expression() {
    if (choice == "Infix") 
    {
        result = calculate_infix_expression()
        return
    } 
    else if (choice == "Prefix")
    {
        result = calculate_prefix_expression()
        print_result()
        return
    } 
    else if (choice == "Postfix") 
    {
        result = calculate_postfix_expression()
        return
    }
}

// 
function calculate_infix_expression() {

}

///
function calculate_prefix_expression() {
    let result = 0
    let numbers = []

    for (element in expression) {
        if (0 <= element <= 9)
            numbers.push(element)

        else 
        {
            n1 = numbers.pop()
            n2 = numbers.pop()

            switch (element) {
                case '+':
                    if (n2 != null)
                        result += (n1+n2)
                    else
                        result += (n1)
                case '-':
                    if (n2 != null)
                        result += (n1-n2)
                    else
                        result -= (n1)
                case '*':
                    if (n2 != null)
                        result += (n1*n2)
                    else
                        result *= (n1)
                case '/':
                    if (n2 != null)
                        result += (n1/n2)
                    else
                        result /= (n1)
            }
        }
        
    }
    return result

}

//
function calculate_postfix_expression() {

}


read_input()




