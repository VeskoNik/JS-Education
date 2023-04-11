function calculator() { 
let num1Input;
let num2Input;
let result;

return {
    init: (selector1,selector2,resultSelector) => {
        num1Input = document.querySelector(selector1)
        num2Input = document.querySelector(selector2)
        result = document.querySelector(resultSelector)
    },
    add: () => result.value = Number(num1Input.value) + Number(num2Input.value),
    subtract: () => result.value = Number(num1Input.value) - Number(num2Input.value)
};
}
const calculate = calculator()
calculate.init('#num1','#num2','#result');




