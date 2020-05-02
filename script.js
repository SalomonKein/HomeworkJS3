let a = +prompt('Imput number a');
let b = +prompt('Imput number b');
let matAction = prompt('Enter mathematical action `+`, `-`, `*`, `/`');


function resultAction(a, b, matAction) {
    while ((!Number.isInteger(a)) || (!Number.isInteger(b)) ||
        ((matAction !== "-") && (matAction !== "/") && (matAction !== "+") && (matAction !== "*"))) {
        console.log("You are imput wrong mat. action or wrong number");
        a = +prompt('Imput number a', a);
        b = +prompt('Imput number b', b);
        matAction = prompt('Enter mathematical action `+`, `-`, `*`, `/`', matAction);
        // if (matAction = "null") break;
    }
    let res;
    if (matAction == "+") {
        res = a + b;
    } else if (matAction == "-") {
        res = a - b;
    } else if (matAction == "/") {
        res = a / b;
    } else if (matAction == "*") {
        res = a * b;
    }
    return res;


}


console.log(resultAction(a, b, matAction));