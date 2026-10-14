function verify() {
    let x = parseInt(elementX.value);
    let y = parseInt(elementY.value);
    let z = parseInt(elementZ.value);
    console.log(x, y, z);

    if (x + y > z && x + z > y && y + z > x) {
        if (x * x + y * y === z * z ||
            x * x + z * z === y * y ||
            y * y + z * z === x * x) {
            result = "Треугольник существует и он прямоугольный";
        } else {
            result = "Треугольник существует, но он не прямоугольный";
        }
        check = true;
    } else {
        result = "Треугольник с такими сторонами не существует";
        check = false;
    }
    document.getElementById("result").value = result;
}

function send() {
    verify();

    if (check) {
        document.getElementById("UserEnter").submit();
    } else {
        alert("Треугольник не является прямоугольным. Проверьте данные.");
    }
}


let result;
let check = false;

const elementX = document.getElementById("x");
const elementY = document.getElementById("y");
const elementZ = document.getElementById("z");

const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);

const elementSend = document.getElementById("send");
elementSend.addEventListener('click', send); 