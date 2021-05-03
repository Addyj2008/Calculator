let dp = false
function handleClick(num) {
    if (num === '+' || num === '-' || num === '*' || num === '/') {
        dp = false
        if (document.getElementById("output").innerText.slice(document.getElementById("output").innerText.length-1) !== '+' && document.getElementById("output").innerText.slice(document.getElementById("output").innerText.length-1) !== '-' && document.getElementById("output").innerText.slice(document.getElementById("output").innerText.length-1) !== '*' && document.getElementById("output").innerText.slice(document.getElementById("output").innerText.length-1) !== '/' && document.getElementById("output").innerText.slice(document.getElementById("output").innerText.length-1) !== '.') {
            if (num === '-' || document.getElementById("output").innerText.length != 0) {
                document.getElementById("output").innerText += num;
            }
        }
    } else if (num === '.') {
        if (!dp) {
            if (document.getElementById("output").innerText == "" || document.getElementById("output").innerText.slice(document.getElementById("output").innerText.length-1) === '+' || document.getElementById("output").innerText.slice(document.getElementById("output").innerText.length-1) === '-' || document.getElementById("output").innerText.slice(document.getElementById("output").innerText.length-1) === '*' || document.getElementById("output").innerText.slice(document.getElementById("output").innerText.length-1) === '/' || document.getElementById("output").innerText.slice(document.getElementById("output").innerText.length-1) === '.') {
                document.getElementById("output").innerText += '0.';
            } else {
                document.getElementById("output").innerText += num;
            }
        }
        dp = true;
    } else {
        document.getElementById("output").innerText += num;
    }
}

function remove(boolean) {
    if (boolean) {
        dp = false;
        document.getElementById("output").innerText = "";
    } else {
        if (document.getElementById("output").innerText.slice(document.getElementById("output").innerText.length-1) === '.') {
            dp = false
        }
        document.getElementById("output").innerText = document.getElementById("output").innerText.slice(0, document.getElementById("output").innerText.length-1);
    }
}

function calculate() {
    if (document.getElementById("output").innerText.length != 0) {
        document.getElementById("output").innerText = eval(document.getElementById("output").innerText);
    }
}

function square() {
    document.getElementById("output").innerText = eval(document.getElementById("output").innerText) * eval(document.getElementById("output").innerText);
}