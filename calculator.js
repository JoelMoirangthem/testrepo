function addNumbers() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("result").innerText="please enter a valid no:";
    } else {
        const sum = num1 + num2;
        document.getElementById("result").innerText="sum:" +sum 
    }
}
function subNumbers() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("result").innerText="please enter a valid no:";
    } else {
        const minus = num1 - num2;
        document.getElementById("result").innerText="minus:" +minus
    }
}
function multiplyNumbers() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("result").innerText="please enter a valid no:";
    } else {
        const mmultiplication= num1 * num2;
        document.getElementById("result").innerText="multiplication:" +mmultiplication
    }
}