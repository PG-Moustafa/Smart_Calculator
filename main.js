
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
const equals = document.getElementById("equals")
const clear = document.getElementById("clear")

let expression = []
let result = 0
let display_result = document.getElementById("result")
let choice

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
    display_result.innerHTML = expression.join(" ")
}

function clear_expression() {
    expression = []
    result = 0
    display_result.innerHTML = ""
}

function calculate_expression() {
    choice = document.getElementById("choice").value

    if (choice == "Infix") 
    {
        result = calculate_infix_expression()
    } 
    else if (choice == "Prefix")
    {
        result = calculate_prefix_expression()
    } 
    else if (choice == "Postfix") 
    {
        result = calculate_postfix_expression()
    }
    print_result()
}

function print_result () {
    display_result.innerHTML = result
}

// need implementation
function calculate_infix_expression() {

}

function calculate_prefix_expression() {
    let numbers = []

    for (let i = expression.length -1; i >= 0; i--) {

        let element = expression[i]

        if (typeof element === "number")
            numbers.push(element)

        else 
        {
            let n1 = numbers.pop()
            let n2 = numbers.pop()

            if (n1 === undefined || n2 === undefined) {
                window.alert("Invalid prefix expression.")
                return
            }
            
            let newResult
            switch (element) {
                case '+':
                    newResult = n1 + n2
                    break
                case '-':
                    newResult = n1 - n2
                    break
                case '*':
                    newResult = n1 * n2
                    break
                case '/':
                    if (n2 === 0) {
                        window.alert("Division by zero is impossible!")
                        return
                    }
                    newResult = n1 / n2
                    break
                default:
                    throw new Error(`Unsupported operator: ${element}`)
                
            }
            numbers.push(newResult)
        }
    }

    return numbers.pop()

}

function calculate_postfix_expression() {
    let numbers = []

    for (let i = 0; i < expression.length; i++) 
    {
        let element = expression[i]

        if (typeof element === "number")
            numbers.push(element)
            
        else {
            let n1 = numbers.pop()
            let n2 = numbers.pop()

            if (n1 === undefined || n2 === undefined) {
                window.alert("Invalid prefix expression.")
                return
            }
              
            let newResult
            switch (element) {
                case '+':
                    newResult = n1 + n2
                    break
                case '-':
                    newResult = n1 - n2
                    break
                case '*':
                    newResult = n1 * n2
                    break
                case '/':
                    if (n2 === 0) {
                        window.alert("Division by zero is impossible!")
                        return
                    }
                    newResult = n1 / n2
                    break
                default:
                    throw new Error(`Unsupported operator: ${element}`)
            }
            numbers.push(newResult)
        }
    }
    return numbers.pop()
}


read_input()




