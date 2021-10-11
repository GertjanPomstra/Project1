function addFunc() {
    var num1 = Number.parseInt(document.getElementById('numInput1').value);
    var num2 = Number.parseInt(document.getElementById('numInput2').value);
    var num3 = num1 + num2;
    if (!document.getElementById("checkB").checked) {
        alert("Make sure that you are human by checking the checkbox.")
    } else {
        document.getElementById("ans").innerText = num3;
    }
    funcJuf()
}

function subFunc() {
    var num1 = Number.parseInt(document.getElementById('numInput1').value);
    var num2 = Number.parseInt(document.getElementById('numInput2').value);
    var num3 = num1 - num2;
    if (!document.getElementById("checkB").checked) {
        alert("Make sure that you are human by checking the checkbox.")
    } else {
        document.getElementById("ans").innerText = num3;
    }
    funcJuf()
}

function multFunc() {
    var num1 = Number.parseInt(document.getElementById('numInput1').value);
    var num2 = Number.parseInt(document.getElementById('numInput2').value);
    var num3 = num1 * num2;
    if (!document.getElementById("checkB").checked) {
        alert("Make sure that you are human by checking the checkbox.")
    } else {
        document.getElementById("ans").innerText = num3;
    }
    funcJuf()
}

function devFunc() {
    var num1 = Number.parseInt(document.getElementById('numInput1').value);
    var num2 = Number.parseInt(document.getElementById('numInput2').value);
    if (!document.getElementById("checkB").checked) {
        alert("Make sure that you are human by checking the checkbox.")
    } else if (num2 == 0) {
        alert("Delen door nul, dat is fauwekul!")
    } else {
        var num3 = num1 / num2;
        document.getElementById("ans").innerText = num3;
    }
    funcJuf()
}

function modFunc() {
    var num1 = Number.parseInt(document.getElementById('numInput1').value);
    var num2 = Number.parseInt(document.getElementById('numInput2').value);
    var num3 = num1 % num2;
    if (!document.getElementById("checkB").checked) {
        alert("Make sure that you are human by checking the checkbox.")
    } else if (num2 == 0) {
        alert("Delen door nul, dat is fauwekul!")
    } else {
        var num3 = num1 % num2;
        document.getElementById("ans").innerText = num3;
    }
    funcJuf()
}

function funcEgg() {
    document.getElementById("head1").innerText = "Jufculator"
}

function funcJuf() {
    console.log(document.getElementById("head1").innerText == "Jufculator")
    console.log(Number.parseInt(document.getElementById("ans").innerText) % 7 == 0)

    if (document.getElementById("head1").innerText == "Jufculator" && Number.parseInt(document.getElementById("ans").innerText) % 7 == 0) {
        document.getElementById("ans").innerText = "Juf";
    }
}